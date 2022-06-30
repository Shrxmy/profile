import { Container, Badge, Link, List, ListItem, Heading, Divider, Box } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta } from '../../components/pageprops';
import P from '../../components/paragraphs';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="Emulator Files">
            <Container>
                <Title>
                    Emulator Files <Badge>Yes</Badge>
                </Title>
                <Box maxW='xl' borderWidth='4px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <Box
                        p='3'
                        mt='1'
                        as='h4'
                        lineHeight='tight'
                    >
                        <P>
                        - Disclaimer, I will only provide links for the Emulators I trust and use myself. I will not be providing any ROMs due to piracy issues and I know it may seem small but this is really a big issue especially on {' '}<Link href="https://kotaku.com/nintendo-piracy-case-bowser-xecuter-team-prison-pirate-1849026479"><Link>Nintendo's case</Link></Link>.
                        </P>
                        <P>
                        - I provide these emulators for the people that are hesitant and have a feeling of getting a virus to feel the ease that these are all safe. Also, I am not associated with any of Nintendo, Sony, or even Microsoft's shenanigans and I am gaining no benefit from posting these files. It's all up to you guys to download these files especially the BIOSes which is quite on the grey side when finding and downloading these.
                        </P>
                        <P>
                        - No, I have not tampered with anything on the emulators files to do bad things, that is unethical and very unhuman to do and I will never tolerate such acts.
                        </P>
                        <P>
                        - Credits to all the developers whom made these emulators, without them the nostalgia would never have been possible till this day. Also, If there are outdated files, please inform me through Discord or any social media contacts I provide.
                        </P>
                    </Box>
                </Box>
                <Box p='3'>
                    <Divider />
                </Box>

                <Box maxW='lg' borderWidth='1px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <Box
                        p='2'
                        color='cyan.700'
                        fontWeight='semibold'
                        letterSpacing='wider'
                        fontSize='xs'
                        ml='4'
                    >
                        <Heading as="h3" fontSize={20}>Nintendo Emulators</Heading>
                    </Box>
                    
                    <List ml={30} my={2}>
                        <Box p='2'>
                            <ListItem>
                                <Meta>GB/GBC/GBA Emulator :</Meta>
                                <Link href='https://drive.google.com/drive/folders/16o_bLEQJzs9eLC8_hAMV1oJLNs0EjoBL?usp=sharing'>
                                    GDrive Link for GB Emulator <ExternalLinkIcon mx="1px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>SNES Emulator:</Meta>
                                <Link href='https://drive.google.com/drive/folders/1OAn7XAoQ7RPzOOW-rfo6CH724G7-bPQo?usp=sharing'>
                                    GDrive Link for SNES/NES Emulators<ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>NDS Emulator</Meta>
                                <Link href='https://drive.google.com/drive/folders/19vB4lFt6Ng0i1snzQo1AgB-N7dZYwJcJ?usp=sharing'>
                                    GDrive Link for NDS<ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>3DS Emulator (Citra):</Meta>
                                <Link href='https://citra-emu.org/download/'>
                                    Citra's Website<ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>Wii & GC Emulator (Dolphin):</Meta>
                                <Link href='https://dolphin-emu.org/'>
                                    Dolphin's Website<ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>Wii & GC Firmwares (Dolphin):</Meta>
                                <Link href='https://drive.google.com/drive/folders/12JVMHT490YM_7VwsPiPNyBztX36NOX3m?usp=sharing'>
                                    GDrive Link for Firmware<ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>Wii U Emulator (Dolphin):</Meta>
                                <Link href='https://cemu.info/#download'>
                                    Cemu's Website<ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>Switch Emulator (Yuzu EA):</Meta>
                                <Link href='https://github.com/Kryptuq/Yuzu-Early-Access-files/releases'>
                                    Latest EA Files in Github<ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                        </Box>
                    </List>
                </Box>
                
                <Box p='2'/>

                <Box maxW='lg' borderWidth='1px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <Box
                        p='2'
                        color='cyan.700'
                        fontWeight='semibold'
                        letterSpacing='wider'
                        fontSize='xs'
                        ml='4'
                    >
                        <Heading align="left" as="h3" fontSize={20}>PlayStation Emulators</Heading>
                    </Box>

                    <List ml={30} my={2}>
                        <Box p='2'>
                            <ListItem>
                                <Meta>PSX Emulator:</Meta>
                                <Link href='https://drive.google.com/drive/folders/1WrsRAd58Q_b-cA0F1PsBZu_JxkGg0VBN?usp=sharing'>
                                    GDrive Link for PSX Emulator <ExternalLinkIcon mx="1px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>PS2 Emulators (PCSX2):</Meta>
                                <Link href='https://pcsx2.net/downloads/'>
                                    PCSX2's Website <ExternalLinkIcon mx="1px" />
                                </Link>
                                <span>
                                - I recommend downloading the Nightly release for this because of the better UI.
                                </span>
                            </ListItem>
                            <ListItem>
                                <Meta>PS2 BIOSes:</Meta>
                                <Link href='https://drive.google.com/drive/folders/1zaZbyFuokWJy-2tYKk-sViL3Lf0W2pdn?usp=sharing'>
                                    GDrive Link for PS2 BIOSes <ExternalLinkIcon mx="1px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>PSP Emulator (PPSSPP):</Meta>
                                <Link href='https://www.ppsspp.org/downloads.html'>
                                    PPSSPP Website <ExternalLinkIcon mx="1px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>PSVita Emulator (Vita3k):</Meta>
                                <Link href='https://vita3k.org/'>
                                    Vita3k Website <ExternalLinkIcon mx="1px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>PS3 Emulator (RPCS3):</Meta>
                                <Link href='https://rpcs3.net/download'>
                                    RPCS3 Website <ExternalLinkIcon mx="1px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>PS3 Files (RPCS3):</Meta>
                                <Link href='https://drive.google.com/drive/folders/1hh4Y6iqVhBUvfQgeJ93ppcgRP4HOFBEI?usp=sharing'>
                                    GDrive Link for PS3 Files (Important) <ExternalLinkIcon mx="1px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>PS4 Emulator:</Meta>
                                <span>
                                    There is no present PS4 Emulator yet however, there is one being developed called {' '}<Link href="https://github.com/devofspine/spine/releases"><Link>Spine</Link></Link> but it only runs on Linux systems.
                                </span>
                            </ListItem>
                        </Box>
                    </List>
                </Box>

                <Box p='2'/>

                <Box maxW='lg' borderWidth='1px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <Box
                        p='2'
                        color='cyan.700'
                        fontWeight='semibold'
                        letterSpacing='wider'
                        fontSize='xs'
                        ml='4'
                    >
                    <Heading align="left" as="h3" fontSize={20}>Microsoft Emulators</Heading>
                    </Box>

                    <List ml={30} my={2}>
                        <Box p='2'>
                            <ListItem>
                                <Meta>Original XBox Emulator (Xemu):</Meta>
                                <Link href='https://xemu.app/'>
                                    Xemu's Website <ExternalLinkIcon mx="1px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>XBox 360 Emulator (Xenia):</Meta>
                                <Link href='https://xenia.jp/download/'>
                                    Xenia's Website <ExternalLinkIcon mx="1px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Meta>XBox One Emulator:</Meta>
                                <span>
                                    Xbox One is unhackable. LOL
                                </span>
                            </ListItem>
                        </Box>
                    </List>
                </Box>

                <Box p='2'/>

            </Container>
        </Layout>
    )
}

export default Work