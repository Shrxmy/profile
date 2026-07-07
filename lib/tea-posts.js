export const teaPosts = [
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
