import NextLink from 'next/link'
import { 
    Button,
    Container, 
    Box, 
    Heading, 
    Image,
    Link,
    List,
    ListItem,
    Popover,
    PopoverArrow,
    PopoverTrigger,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/sections'
import Paragraph from "../components/paragraphs"
import { BioSection, BioYear } from '../components/bio' 
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoDiscord, IoLogoSteam} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box  
                    p='3'             
                    flexShrink={0} 
                    textAlign="center" 
                >
                    <Image 
                        borderColor="grey"
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px" 
                        display="inline-block" 
                        borderRadius="full" 
                        src="/images/paulo.jpg" 
                        alt="Profile Image"
                    />
                </Box>

                <Box display={{md:'flex'}} textAlign='center' p='2'>
                    <Box flexGrow={1}> 
                        <Heading as="h2" variant="page-title">
                            Hello?
                        </Heading>
                        <div>Average B Student (Developer / Teaholic / Caratbit)</div>
                    </Box>
                </Box>

                <Box borderRadius="lg" bg="teal" p={3} mb={4} align="center">
                Hello, I'm an average student developer.
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About Me
                    </Heading>
                    <Box p='1' />
                    <Paragraph>Hello, my name is Paulo, and I am a STEM strand graduate at Ateneo de Iloilo. I've created {' '}<NextLink href="/works/minty"><Link>Discord bots</Link></NextLink>, websites, and Minecraft servers. I am currently studying web applications and game development. I like programming and tea since both of these are soothing activities that need time to prepare. Being a realistic person, I prioritize what is vital to me and what I need above settling for things that don't provide much value. I also socialize a lot with friends, and I would like the opportunity to meet new people at the same time. Also, I stan LOOΠΔ and SEVENTEEN.</Paragraph>
                    
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                Projects and Links
                            </Button>                    
                        </NextLink>
                    </Box>
                </Section>
                
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <Box p='1' />
                        <BioSection>
                            <BioYear>Gender:</BioYear>
                            Male (he/him)
                        </BioSection>
                        <BioSection>
                            <BioYear>Age:</BioYear>
                            17
                        </BioSection>
                        <BioSection>
                            <BioYear>MBTI:</BioYear>
                            INFJ
                        </BioSection>
                        <BioSection>
                            <BioYear>Dreams:</BioYear>
                            Future Software Developer
                        </BioSection>

                        <Box align="center" my={4}>
                        <Link href="https://open.spotify.com/user/jptgumban">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                Spotify
                            </Button>                    
                        </Link>
                    </Box>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Hobbies and Likes
                    </Heading>
                    <Box p='1' />
                    <Paragraph>
                    Electric Guitar, Programing, Photography, Practicality, Film Cameras, Music, Final Fantasy, Megami Tensei, Pokemon, and JinSoul
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Socials
                    </Heading>
                    <Box p='1' />
                    <List>
                        <ListItem>
                            <Link href="https://github.com/Shrxmy" target="_blank">
                                <Button 
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub />}
                                >
                                    Shrxmy
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/paulucete_/" target="_blank">
                                <Button 
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoInstagram />}
                                >
                                    @paulucete_
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/shrxmy" target="_blank">
                                <Button 
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoTwitter />}
                                >
                                    @shrxmy (priv acc)
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href= "https://twitter.com/luceizbit" target="_blank">
                                <Button 
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoTwitter />}
                                >
                                    @luceizbit (stan acc)
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://steamcommunity.com/id/shrxmy/" target="_blank">
                                <Button 
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoSteam />}
                                >
                                    Shroomy
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Button 
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoDiscord />}
                            >
                                Shroomy#9393
                            </Button>          
                        </ListItem>
                        <ListItem>
                            <Button 
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoDiscord />}
                            >
                                Lucete#6860
                            </Button>          
                        </ListItem>
                    </List>

                    <Box align="center" my={4}>
                        <Popover>
                            <PopoverTrigger>
                                <Button>Credits</Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverHeader fontSize="medium">
                                    Credits and Inspiration
                                </PopoverHeader>
                                <PopoverBody fontSize="sm">
                                    Inspired by {' '}<Link href="https://www.craftz.dog/"><Link>craftzdog</Link></Link>
                                </PopoverBody>
                                <PopoverBody fontSize="sm">
                                    The model is based on {' '}<Link href="https://sketchfab.com/3d-models/yuna-figure-world-of-final-fantasy-9be8455b25ec4e00887657e563f7823a"><Link>"Yuna Figure (World of Final Fantasy)"</Link></Link> by {' '}<Link href="https://sketchfab.com/robukan"><Link>Robukan</Link></Link> licensed under {' '}<Link href="http://creativecommons.org/licenses/by/4.0/"><Link>CC-BY-4.0</Link></Link>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Box>
                </Section>
            </Container> 
        </Layout>
    )
}

export default Page
export { getServerSideProps } from '../components/chakra'
