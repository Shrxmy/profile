export const teaPosts = [
    {
        slug: 'emugbds-progress-the-ds-to-gba-handoff-works',
        title: 'emuGBDS progress: the DS-to-GBA handoff works',
        date: '2026-10-25',
        readingTime: '12 min read',
        excerpt:
            'A progress report on turning the Slot-2 idea into a working DS-to-GBA transition, and the architecture that now supports two CPUs, real firmware boot, video, sound, saves, and a usable emulator host.',
        content: [
            {
                type: 'paragraph',
                text: 'The last time I wrote about emuGBDS, the main question was whether GBA functionality inside a Nintendo DS emulator should remain a Slot-2 accessory or become a proper execution target of its own. The project had the direction, but much of the work was still described through scaffolding, boundaries, and the systems that needed to exist before the idea could feel real.'
            },
            {
                type: 'paragraph',
                text: 'A lot has changed since then. The most important progress is that the DS-to-GBA path is no longer only an architectural plan. The in-house DS core can now run the BIOS and firmware, accept a GBA cartridge in Slot-2, reach the firmware menu, and hand control to the in-house GBA core when the ARM7 requests GBA mode. There is now a complete transition path from the hardware-facing signal to the runtime that changes the active emulator core.'
            },
            {
                type: 'heading',
                text: 'The architecture became a working system'
            },
            {
                type: 'paragraph',
                text: 'One decision that continued to help the project was keeping the application, runtime, adapters, and hardware cores separate. The frontend should not need to understand HALTCNT, ARM banked registers, or how a cartridge is mapped. Its responsibility is to open a game, collect input, and present video and audio. The DS and GBA implementations handle their own hardware, while the runtime decides which core is currently active.'
            },
            {
                type: 'code',
                filename: 'emugbds-layers.txt',
                language: 'txt',
                code: `SDL2 + Dear ImGui application
  -> Session
    -> RuntimeKernel
      -> IEmuCore adapter
        -> in-house DS core
        -> in-house GBA core

DS core emits a transition event
  -> RuntimeKernel receives it
    -> Slot-2 ROM is loaded by the GBA core
      -> active core becomes GBA`
            },
            {
                type: 'paragraph',
                text: 'This separation matters more now because emuGBDS is doing more than starting one emulator and leaving it there. A session may begin as a DS, produce two-screen video and DS audio, and later become a GBA session without asking the application to reproduce the hardware transition itself. The host sees a common core contract, while the runtime owns the change in mode.'
            },
            {
                type: 'heading',
                text: 'The shared ARM CPU became the foundation'
            },
            {
                type: 'paragraph',
                text: 'The DS core now runs both processors through the shared ARM interpreter. The ARM7 uses the ARMv4T path, which is also appropriate for the GBA, while the ARM9 uses the ARMv5TE path. ARMv5 behavior such as BLX, CLZ, saturating operations, signed halfword multiplies, LDRD and STRD, and coprocessor transfers is gated by the selected architecture so that adding DS support does not silently change ARMv4 decoding.'
            },
            {
                type: 'paragraph',
                text: 'The two DS processors are interleaved through a 2:1 scheduler. It is still a simplified timing model, but it gives the system a practical structure for ARM9 and ARM7 execution, interrupts, IPC, timers, DMA, LCD timing, and halt or wake behavior. This was an important change because the transition could not be treated as a special button in the host. It had to come from code running on the DS side.'
            },
            {
                type: 'heading',
                text: 'HALTCNT is now the real transition signal'
            },
            {
                type: 'paragraph',
                text: 'On the DS, POSTFLG and HALTCNT share the word beginning at 0x04000300. POSTFLG occupies the low byte at 0x04000300, while the ARM7 writes HALTCNT through the upper byte at 0x04000301. Writing 0x40 places 01 in HALTCNT bits 6-7, which is the request for GBA mode. The in-house I/O layer recognizes that exact byte write, CPU execution stops at the requesting instruction, and the core creates a transition event explaining that the DS ARM7 entered GBA mode through HALTCNT.'
            },
            {
                type: 'code',
                filename: 'address-level-handoff.txt',
                language: 'txt',
                code: `DS Slot-2 ROM window:
  0x08000000-0x09FFFFFF  GBA cartridge ROM, visible to ARM9 and ARM7

DS mode request:
  0x04000300             POSTFLG
  0x04000301             HALTCNT
  write 0x40             HALTCNT bits 6-7 = 01, request GBA mode

After the runtime switches cores:
  0x00000000             GBA BIOS entry, when a BIOS is configured
  0x08000000             GBA ROM entry and cartridge aperture
  0x0E000000             GBA SRAM / FLASH save aperture`
            },
            {
                type: 'code',
                filename: 'ds-to-gba-handoff.txt',
                language: 'txt',
                code: `DS BIOS and firmware run
  -> firmware sees the Slot-2 cartridge
    -> user selects "Start GBA game"
      -> ARM7 writes HALTCNT GBA mode
        -> DS core queues DS -> GBA event
          -> adapter exposes the event
            -> RuntimeKernel loads Slot-2 in the GBA core
              -> video, audio, and input continue in GBA mode`
            },
            {
                type: 'handoff'
            },
            {
                type: 'paragraph',
                text: 'The adapter does not perform the switch directly. It exposes the event through PollTransition, which is part of the common core interface. The RuntimeKernel receives the event after a frame, stores the reason, moves through a transitioning state, initializes the GBA core, loads the configured Slot-2 ROM, and changes the active core. This keeps hardware detection inside the DS implementation and orchestration inside the runtime.'
            },
            {
                type: 'paragraph',
                text: 'For me, this is the point where the project started to feel more complete. The transition is not a hidden shortcut attached to the frontend. It crosses each layer deliberately: DS hardware behavior, core event, adapter boundary, runtime decision, and GBA execution. Each part has one reason to change, which makes the path easier to test and easier to improve later.'
            },
            {
                type: 'heading',
                text: 'The firmware path is real when the files are present'
            },
            {
                type: 'paragraph',
                text: 'With the ARM7 BIOS, ARM9 BIOS, and DS firmware available locally, firmware boot begins from the real reset vectors. The SPI bus exposes the firmware flash, power-management device, and touchscreen conversions. The RTC, math unit, VRAM banking, input, and both 2D engines provide enough of the surrounding system for the menu to render and respond. Selecting the GBA cartridge then reaches the same HALTCNT transition used by the runtime.'
            },
            {
                type: 'paragraph',
                text: 'The fallback path still exists when those images are unavailable. It simulates the Slot-2 selection after two frames so the transition can be exercised without distributing BIOS or firmware files. The important distinction is that a real firmware boot never fakes the selection. If the firmware does not write HALTCNT, no transition is produced. This prevents the fallback from hiding problems in the actual boot path.'
            },
            {
                type: 'heading',
                text: 'The DS core grew around the handoff'
            },
            {
                type: 'paragraph',
                text: 'The transition layer would not mean much if the DS side could only wait for a mode switch. Main RAM begins at 0x02000000 and covers 4 MiB, ARM7 private WRAM is available from 0x03800000, and the shared WRAM split is controlled through WRAMCNT in the 0x04000244 register word. The ARM9 BIOS is mapped at 0xFFFF0000, while the ARM7 BIOS starts at 0x00000000. CP15 controls the ARM9 ITCM and DTCM regions, so those mappings remain owned by the memory system rather than the shared CPU interpreter.'
            },
            {
                type: 'code',
                filename: 'ds-registers-now-in-the-path.txt',
                language: 'txt',
                code: `0x04000004  DISPSTAT / VCOUNT
0x040000B0-0x040000DC  DMA channels
0x04000100-0x0400010C  timers 0-3
0x04000130  KEYINPUT / KEYCNT
0x04000180  IPCSYNC
0x04000184  IPCFIFOCNT
0x04000188  IPCFIFOSEND
0x04100000  IPCFIFORECV
0x040001A0-0x040001B8  Slot-1 AUXSPI, ROMCTRL, command and KEY2
0x04100010  Slot-1 card data
0x040001C0  ARM7 SPI control and data
0x04000208  IME
0x04000210  IE
0x04000214  IF
0x04000240-0x04000248  VRAM bank and WRAM control
0x04000304  display and engine power control
0x04000400-0x0400051C  ARM7 sound channels, mixer and capture`
            },
            {
                type: 'paragraph',
                text: 'These addresses are routed through per-CPU bus views instead of one flat register array. IPC reads can pop a FIFO, cartridge data arrives through 0x04100010, DMA cannot access the ARM9 TCM regions, and the ARM9 cannot perform byte writes to palette, VRAM, or OAM. Both 2D engines then render backgrounds, objects, windows, blending, and brightness into a combined 256 by 384 frame.'
            },
            {
                type: 'paragraph',
                text: 'Cartridge support also moved beyond loading a file into memory. The Slot-1 bus handles header, chip ID, and data commands, including card DMA and transfer interrupts. DS save memory is backed by EEPROM or flash behavior and written to a .sav file beside the game. There are also practical stubs for Wi-Fi and the geometry engine so games can continue through code that expects those devices, even though the 3D output itself is not implemented yet.'
            },
            {
                type: 'paragraph',
                text: 'This is already enough for Fire Emblem: Shadow Dragon to reach its menus and story scenes through the in-house DS core. Games that depend on the 3D engine still lose that layer, which is why something such as Devil Survivor can execute while leaving its main 3D screen empty. That limitation is now clearer because many of the systems around it are working.'
            },
            {
                type: 'heading',
                text: 'Sound and persistent hardware state are now part of the picture'
            },
            {
                type: 'paragraph',
                text: 'The DS sound path now supports its 16 channels across PCM8, PCM16, IMA-ADPCM, PSG, and noise formats, with mixer routing, master volume, bias, and both capture units. Audio is produced at 32768 Hz and passed through the same runtime output bundle as video. This made the architecture more consistent because each active core can provide a frame and an audio chunk without the frontend needing separate DS and GBA playback rules.'
            },
            {
                type: 'paragraph',
                text: 'The GBA core has progressed as well. Cartridge saves now cover SRAM or FRAM, 64K and 128K flash, and EEPROM behavior over DMA3, with the save type detected from the ROM and persisted beside it. Cartridge GPIO and a real-time clock follow the host clock. PSG channels one through four now sit beside Direct Sound FIFO mixing, giving the GBA side more of the hardware it needs once the transition is complete.'
            },
            {
                type: 'code',
                filename: 'gba-memory-after-transition.txt',
                language: 'txt',
                code: `0x00000000-0x00003FFF  BIOS, 16 KiB
0x02000000-0x0203FFFF  EWRAM, 256 KiB
0x03000000-0x03007FFF  IWRAM, 32 KiB
0x04000000              I/O registers
0x05000000              palette RAM
0x06000000              VRAM
0x07000000              OAM
0x08000000              cartridge ROM
0x0E000000              SRAM / FLASH save region

Cartridge GPIO / RTC:
  0x080000C4-0x080000C9  GPIO data, direction and control area`
            },
            {
                type: 'paragraph',
                text: 'The repeated 0x08000000 address is important. On the DS side it is the Slot-2 ROM window observed before the handoff. After the runtime activates the GBA core, the same cartridge image becomes the GBA Game Pak ROM region expected by the game. The runtime is changing which machine owns execution, while the cartridge remains conceptually in the same hardware-facing place.'
            },
            {
                type: 'media',
                kind: 'video',
                src: '/images/tea-room/emugbds-ds-to-gba-transition.mp4',
                poster: '/images/tea-room/emugbds-ds-to-gba-poster.png',
                label: 'emuGBDS 0.1.0 · live DS → GBA handoff',
                alt: 'The current emuGBDS build running Nintendo DS firmware, selecting Start GBA game, and transitioning into Pokémon Emerald on the in-house GBA core',
                caption: 'A direct capture of the implemented path: real DS firmware presents the Slot-2 cartridge, “Start GBA game” triggers the HALTCNT request, and the runtime continues in the in-house GBA core.'
            },
            {
                type: 'heading',
                text: 'The emulator is becoming usable outside the debugger'
            },
            {
                type: 'paragraph',
                text: 'The application layer also changed from a command-line experiment into a usable SDL2 and Dear ImGui host. ROMs can be opened from a picker or dragged into the window. There are controls for pause, frame step, fast-forward, window scale, DS screen layout, fullscreen, volume, mute, keyboard bindings, and gamepads. BIOS paths and the option to start GBA files through the DS firmware can be saved in the settings file.'
            },
            {
                type: 'paragraph',
                text: 'Debugging remains part of the interface rather than being separated from it. Live CPU and I/O state, layer toggles, screenshots, memory dumps, and transition tracing make it easier to compare what the emulator believes is happening with what appears on screen. The recent 2D renderer work also reduced repeated composition and tile-fetch costs, bringing Shadow Dragon to around 84 frames per second in a headless run. The ARM interpreter is now the more obvious performance target.'
            },
            {
                type: 'heading',
                text: 'The tests follow the architecture'
            },
            {
                type: 'paragraph',
                text: 'The transition has tests at more than one level. One test runs ARM7 code that writes HALTCNT and checks that execution stops at the request. Another verifies that a real BIOS path only transitions when HALTCNT is written. A runtime integration test boots in DS mode with a Slot-2 ROM, advances the session, and confirms that the active mode becomes GBA. Memory mapping, firmware SPI behavior, input, video, sound, saves, and settings also have focused coverage.'
            },
            {
                type: 'code',
                filename: 'transition-test-boundaries.txt',
                language: 'txt',
                code: `I/O test       -> HALTCNT records a GBA-mode request
DS core test  -> request becomes a DS -> GBA event
Firmware test -> real boot does not invent the event
Runtime test  -> event switches the active core to GBA`
            },
            {
                type: 'paragraph',
                text: 'Testing the boundaries separately is useful because a visible switch can fail for several different reasons. The register write may not be decoded, the DS core may not expose the event, the adapter may lose it, or the runtime may not have the Slot-2 ROM needed to start the GBA core. Keeping these failures separate gives the transition layer a clearer shape than one large end-to-end check alone.'
            },
            {
                type: 'heading',
                text: 'What comes next'
            },
            {
                type: 'paragraph',
                text: 'The main unfinished DS feature is still the 3D engine. It is a large boundary because many games depend on geometry, rendering state, and FIFO behavior even when their menus use the 2D engines. CPU performance and timing accuracy also need more work. The scheduler currently uses short fixed slices and simplified instruction timing, which is practical for bring-up but will eventually need refinement for games that depend on tighter synchronization.'
            },
            {
                type: 'paragraph',
                text: 'There is also more correctness work on both sides: wider game compatibility, stronger BIOS and SWI behavior, more accurate DMA and timer coupling, audio timing, and continued save-device testing. The difference now is that these tasks are being added to a system with a working path through it. The DS core can boot, run, render, accept input, produce sound, and hand a Slot-2 game to the GBA core through an explicit runtime transition.'
            },
            {
                type: 'paragraph',
                text: 'emuGBDS is still early, but the project is no longer only asking how the DS and GBA should meet. The handoff works, the layers have clearer ownership, and the surrounding hardware is becoming detailed enough to support real software. For me, that progress gives the project a more concrete identity: not simply a collection of emulator experiments, but one host where two related systems can exist separately and still pass control between each other in a way that reflects the hardware.'
            }
        ]
    },
    {
        slug: 'when-initiative-feels-one-sided',
        title: 'When initiative feels one-sided',
        date: '2026-07-08',
        readingTime: '6 min read',
        excerpt:
            'A reflection on organizational management, shared responsibility, and why making an impact matters more than trying to leave a legacy.',
        content: [
            {
                type: 'paragraph',
                text: 'Managing an organization can feel difficult when initiative does not seem to be shared evenly. There are moments when a few people keep moving while everyone else appears to be waiting for instructions, waiting for motivation, or waiting for someone else to take responsibility. That kind of situation can become frustrating quickly, especially when the work matters to the people the organization is meant to serve.'
            },
            {
                type: 'paragraph',
                text: 'I am learning that organizational management is not only about assigning tasks. It is also about understanding how people depend on one another, how expectations are communicated, and how a team responds when the work becomes inconvenient. The challenge is not to complain about the lack of initiative forever, but to understand what can be improved without pretending that carrying everything alone is sustainable.'
            },
            {
                type: 'heading',
                text: 'A team is called a team for a reason'
            },
            {
                type: 'paragraph',
                text: 'A team exists because one person should not have to do everything. We should be able to depend on each other—not in a way that avoids personal responsibility, but in a way that makes responsibility possible. One person may organize the plan, another may communicate it, and someone else may notice the detail that everyone missed. The work becomes stronger when those abilities are connected instead of isolated.'
            },
            {
                type: 'paragraph',
                text: 'No person is an island. Even the person who seems capable of handling every task still needs feedback, support, and time to recover. When one person becomes the permanent solution to every problem, the organization may continue moving for a while, but it also becomes fragile. Dependence should not mean helplessness. It should mean trust: I will do my part, and I believe you will do yours.'
            },
            {
                type: 'heading',
                text: 'Initiative needs direction and room'
            },
            {
                type: 'paragraph',
                text: 'Sometimes a lack of initiative is not caused by laziness. People may be unsure about what they own, afraid of making the wrong decision, or waiting for permission because the organization has not made its expectations clear. That does not remove the need for people to step up, but it does remind leaders to make the next action visible. Clear ownership, realistic deadlines, and room to make decisions can turn passive participation into meaningful contribution.'
            },
            {
                type: 'paragraph',
                text: 'There will still be situations where some people do not move, even after the direction is clear. That is painful to accept, but it is also part of managing honestly. We can invite people to participate, give them a real opportunity, and follow up with them. We cannot manufacture commitment for someone else. What we can do is build a culture where initiative is noticed, supported, and expected.'
            },
            {
                type: 'heading',
                text: 'Hard does not mean impossible'
            },
            {
                type: 'paragraph',
                text: 'Organizational work can feel impossible when the same few people keep pushing it forward. The deadlines are real, the problems are visible, and the lack of movement can make effort feel pointless. Still, difficulty is not proof that the work has no value. Sometimes the next step is small: making one call, finishing one document, asking one clearer question, or helping one person understand what they can contribute.'
            },
            {
                type: 'paragraph',
                text: 'Small actions are not insignificant when they create movement. They can give other people something to build on, and they can remind the team that progress does not always arrive as a dramatic breakthrough. Even when the situation is hard, we can keep pushing through—not because the struggle is pleasant, but because the people affected by the work deserve our best effort.'
            },
            {
                type: 'heading',
                text: 'Impact matters more than legacy'
            },
            {
                type: 'paragraph',
                text: 'Legacy is tempting to think about. We want the organization to remember what we built, to attach our names to successful projects, and to know that our time meant something. But legacy is often out of our control. People remember different things, circumstances change, and even the best systems may eventually be replaced.'
            },
            {
                type: 'paragraph',
                text: 'Impact is more immediate and more honest. Impact is the person who gained confidence because someone made space for them. It is the process that became easier, the event that reached the people it needed to reach, or the teammate who learned how to lead after being trusted with responsibility. We may not control whether our work becomes a legacy, but we can choose whether it helps someone today.'
            },
            {
                type: 'paragraph',
                text: 'That is the part I want to remember when organizational management becomes exhausting. I do not need to carry the whole organization to prove that I care, and I do not need a permanent monument to justify the effort. I need to do my part, help others do theirs, and leave the team in a better position than I found it.'
            },
            {
                type: 'paragraph',
                text: 'A team will never be perfect. Initiative will sometimes be uneven, communication will fail, and difficult decisions will still have to be made. But no one has to be an island, and no hard situation has to be the end of the story. If the work creates a real improvement for even one person, then it has already made an impact—and that is more valuable than simply being remembered.'
            }
        ]
    },
    {
        slug: 'emugbds-and-the-gba-slot-question',
        title: 'emuGBDS and the GBA slot question',
        date: '2026-07-07',
        readingTime: '8 min read',
        excerpt:
            'A study on why Nintendo DS emulation can acknowledge GBA hardware but still not fully treat GBA games as a first-class execution target, and how emuGBDS is progressing around that question.',
        content: [
            {
                type: 'paragraph',
                text: 'emuGBDS is interesting to me because it sits in a strange but meaningful area between the Game Boy Advance and the Nintendo DS. There is already an understanding that melonDS has a form of GBA functionality, especially because the Nintendo DS itself has a Slot-2 area and a historical relationship with GBA cartridges. However, that does not automatically mean that GBA games become a complete first-class gameplay target inside the emulator.'
            },
            {
                type: 'paragraph',
                text: 'The distinction matters. A system can recognize that GBA hardware exists, expose the slot, or support certain transitions, but still remain architecturally focused on the DS. This is where I would see the limitation: melonDS is primarily a DS emulator, so the center of gravity is still ARM9, ARM7 in DS mode, DS memory mapping, DS video, DS sound, firmware, and gamecard behavior. GBA functionality exists around that world, but it is not necessarily the main world being simulated.'
            },
            {
                type: 'heading',
                text: 'The DS is not simply a faster GBA'
            },
            {
                type: 'paragraph',
                text: 'The Nintendo DS has a dual-processor architecture. In DS mode, the ARM9 becomes the main processor for most game code, while the ARM7 is still present for sound, input, firmware-side work, and compatibility-related responsibilities. GBATEK describes this separation clearly by distinguishing NDS9 as the ARM9 processor and its memory and I/O ports, NDS7 as the ARM7 processor in DS mode, and GBA as the ARM7 processor operating in GBA mode.'
            },
            {
                type: 'code',
                filename: 'ds-processor-view.txt',
                language: 'txt',
                code: `NDS mode:
  ARM9  -> main game code, video engines, DS memory control
  ARM7  -> sound, firmware-side work, input, IPC support

GBA mode:
  ARM7  -> behaves as the GBA execution CPU
  ARM9  -> not the center of execution`
            },
            {
                type: 'paragraph',
                text: 'This is why the DS should not be interpreted as only a stronger GBA. It carries GBA compatibility, but its native mode is a different architecture with a different division of responsibility. There is balance throughout the system: one side is the DS as its own machine, while the other side is the inherited GBA behavior that must still be respected if compatibility is the goal.'
            },
            {
                type: 'heading',
                text: 'The GBA side has its own memory identity'
            },
            {
                type: 'paragraph',
                text: 'GBATEK documents the GBA Game Pak ROM region around 08000000h and the SRAM region around 0E000000h on the original GBA memory map. On the DS memory map, the GBA Slot appears again, but it appears inside a DS system that can decide which processor has access and how the slot is treated. This creates the architectural problem: the GBA cartridge is not just a file to open, but a memory and timing environment.'
            },
            {
                type: 'code',
                filename: 'gba-and-ds-slot-map.txt',
                language: 'txt',
                code: `GBA memory view:
  08000000h-09FFFFFFh  Game Pak ROM / Flash ROM
  0A000000h-0BFFFFFFh  Game Pak ROM mirror / wait state area
  0C000000h-0DFFFFFFh  Game Pak ROM mirror / wait state area
  0E000000h-0E00FFFFh  Game Pak SRAM

DS memory view:
  08000000h  GBA Slot ROM
  0A000000h  GBA Slot RAM`
            },
            {
                type: 'paragraph',
                text: 'This may look simple when written as addresses, but it is not simple when implemented. A GBA game expects its own CPU behavior, BIOS behavior, memory access timing, interrupt behavior, DMA behavior, timers, video registers, audio timing, and save memory behavior. If an emulator only sees the cartridge as an accessory to the DS side, it can miss the deeper requirement: GBA software expects the machine around it to become the GBA.'
            },
            {
                type: 'heading',
                text: 'Why melonDS having GBA functionality is not the same as GBA game focus'
            },
            {
                type: 'paragraph',
                text: 'This is where I would compare the situation lightly. melonDS is very strong because its purpose is centered on the Nintendo DS. It makes sense that the emulator gives attention to DS correctness first: ARM9 and ARM7 interaction, DS gamecards, firmware, 2D and 3D engines, audio, input, and timing. If GBA functionality exists there, it is usually attached to the DS use case, such as Slot-2 behavior, rather than a complete philosophical shift toward GBA gameplay as the main target.'
            },
            {
                type: 'paragraph',
                text: 'I would not see this as a weakness in melonDS, but more as a boundary of purpose. A tool that is made for the DS will naturally explain the GBA through the DS. The issue is that GBA games need to be explained through the GBA itself. It is similar to interpreting an artwork only through the background color; the color is there, but there is more to uncover underneath it.'
            },
            {
                type: 'heading',
                text: 'How emuGBDS approaches the problem'
            },
            {
                type: 'paragraph',
                text: 'emuGBDS is progressing by separating the concern instead of hiding it. The repository already describes an in-house GBA core scaffold, an in-house DS core scaffold, optional melonDS adapter support, and a Slot-2 transition path. This matters because it means GBA support is not treated only as a side attachment. It can become its own internal target while still being studied beside the DS.'
            },
            {
                type: 'code',
                filename: 'emugbds-runtime-shape.txt',
                language: 'txt',
                code: `emuGBDS direction:
  ingba -> in-house GBA core
  inds  -> in-house DS core
  slot2 -> DS firmware transition into GBA-side behavior
  adapter -> optional external melonDS integration`
            },
            {
                type: 'paragraph',
                text: 'The current progress is still scaffolded and incremental, but that is also why the architecture is worth discussing. The roadmap focuses first on stabilizing the in-house GBA core: CPU state, ARM banked registers, mode switching, interrupts, BIOS and SWI behavior, timers, DMA timing, and rendering paths. These are not decorative tasks. They are the foundation of making GBA execution meaningful.'
            },
            {
                type: 'code',
                filename: 'gba-core-progress.txt',
                language: 'txt',
                code: `GBA core progress targets:
  CPU state model
  ARM mode switching
  exception entry and return
  IRQ trigger and acknowledge timing
  BIOS / SWI behavior
  timer and DMA coupling
  video paths beyond simple smoke tests`
            },
            {
                type: 'paragraph',
                text: 'This is also why emuGBDS feels different from simply asking a DS emulator to run a GBA game. The project can treat the GBA game as a system that deserves its own correctness. The DS side still matters, especially for Slot-2 transition and architecture study, but the GBA side is not just a historical note.'
            },
            {
                type: 'heading',
                text: 'The architectural challenge'
            },
            {
                type: 'paragraph',
                text: 'The main challenge is that DS and GBA compatibility is not only a question of loading a ROM. It is a question of switching the meaning of the machine. In DS mode, the system is divided between ARM9 and ARM7, with memory regions and access rights arranged around DS execution. In GBA mode, the expectation changes. The ARM7 becomes the center, and the hardware behavior must follow the older GBA identity.'
            },
            {
                type: 'code',
                filename: 'slot2-handoff-model.txt',
                language: 'txt',
                code: `DS firmware path:
  boot DS firmware
  detect Slot-2 cartridge
  prepare transition state
  hand control toward GBA execution
  map GBA ROM and RAM expectations
  run through GBA core behavior`
            },
            {
                type: 'paragraph',
                text: 'There is a certain philosophy in this. The DS contains the memory of the GBA, but it does not always express it directly. The emulator must decide whether the GBA is only a slot, or whether it is a full system that deserves to be represented. emuGBDS chooses the second direction by making the GBA core explicit and by using the DS transition path as an integration target.'
            },
            {
                type: 'heading',
                text: 'Why this matters'
            },
            {
                type: 'paragraph',
                text: 'For me, this makes emuGBDS useful as a study of boundaries. It studies where the DS ends, where the GBA begins, and how a cartridge slot can represent more than just an address range. The progress may still be early, but the direction is clear: make the GBA side understandable, testable, and eventually playable enough instead of leaving it as an accessory to DS emulation.'
            },
            {
                type: 'paragraph',
                text: 'Thus, the project becomes more than an emulator experiment. It becomes an architectural question about compatibility. melonDS can remain excellent at DS emulation while emuGBDS explores the deeper GBA game functionality that lives behind the Slot-2 idea. Both can exist with different focuses, but emuGBDS gives me a clearer place to study the GBA behavior itself.'
            }
        ]
    },
    {
        slug: 'hermes-agent-feels-surprisingly-good',
        title: 'Hermes Agent feels surprisingly good',
        date: '2026-07-07',
        readingTime: '5 min read',
        excerpt:
            'Hermes Agent is a development assistant that turns coding into a clear flow of context, focused editing, verification, and a contained Docker-based setup.',
        content: [
            {
                type: 'paragraph',
                text: 'Hermes Agent can be understood as a developer-focused assistant that helps organize the process of building, revising, and checking software. It is not only useful because it can respond quickly, but because it gives structure to work that can easily become scattered. In programming, there is often a balance between speed and correctness, and Hermes works well because it does not treat those two values as opposites.'
            },
            {
                type: 'paragraph',
                text: 'The basic idea is that Hermes works closest to the code. It reads the surrounding project, understands the change that needs to happen, applies the edit, and then checks whether the result still behaves correctly. This makes it feel less like a tool that simply produces text and more like a workflow companion that stays aware of the repository.'
            },
            {
                type: 'paragraph',
                text: 'My ideal coding setup for Hermes is simple. I would keep the project open, describe the change clearly, let the agent inspect only the files that matter, and then require it to verify the result through linting, building, or a browser check. The setup is not about making the agent autonomous for everything; it is about giving it enough structure to work carefully.'
            },
            {
                type: 'code',
                filename: 'hermes-workflow.txt',
                language: 'txt',
                code: `open the project
state the intended change
inspect the relevant files
make a focused edit
run the smallest useful check
review the result before moving on`
            },
            {
                type: 'paragraph',
                text: 'For my own setup, I connect this idea with Windows 11 and Docker Desktop. The important part is not that Docker makes the agent magical, but that it gives the work a clearer boundary. Hermes can run from a container image, keep its working data inside a mounted folder on the D: drive, and expose its gateway through a local port. This creates a practical separation between the host machine and the agent environment.'
            },
            {
                type: 'code',
                filename: 'windows-docker-setup.ps1',
                language: 'powershell',
                code: `docker run -d --name hermes \
  --restart unless-stopped \
  -p 8642:8642 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v D:\\Configurations\\DockerData\\HermesAgent\\data:/opt/data \
  nousresearch/hermes-agent`
            },
            {
                type: 'paragraph',
                text: 'This setup reflects the way I want the tool to behave. The data lives in a predictable Windows folder, the container exposes Hermes through port 8642, and Docker Desktop becomes the place where I can start, stop, or inspect the environment. There is still power here, especially because Docker access can reach other containers, but it is at least placed inside a visible setup rather than hidden inside the system.'
            },
            {
                type: 'paragraph',
                text: 'This is where I lightly compare it with systems such as OpenClaw. OpenClaw feels broader because it is closer to an agent operating system: it can connect tools, maintain longer-running context, and support more autonomous workflows across a machine or communication platform. That direction is powerful, especially for people who want persistent automation and wider integrations.'
            },
            {
                type: 'paragraph',
                text: 'Hermes, on the other hand, feels better when the goal is direct development work. It does not need to become the center of the whole computer to be useful. Its value is more concentrated: understand this repository, make this change, and prove that the change works. There is a certain balance in that limitation, because the narrower focus makes the tool feel more controlled.'
            },
            {
                type: 'paragraph',
                text: 'I would see Hermes as useful because it allows the developer to stay focused on intention. There is the idea that a good tool should not overpower the person using it, but should instead clarify the work in front of them. Hermes does that by making the steps of development more visible: what is being changed, why it is being changed, and how the change can be confirmed.'
            },
            {
                type: 'paragraph',
                text: 'This reflects why I find it really good. Through a clean flow, it becomes easier to express potential in a project without making the process feel unnecessarily heavy. Hermes Agent supports practical development by combining direction, execution, and verification in a way that feels professional, controlled, and genuinely helpful.'
            }
        ]
    }
]

export const getTeaPost = slug => teaPosts.find(post => post.slug === slug)
