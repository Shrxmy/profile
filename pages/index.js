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
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    useColorModeValue,
    Tag,
    TagLabel,
    Wrap,
    WrapItem,
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/sections'
import Paragraph from "../components/paragraphs"
import { BioSection, BioYear } from '../components/bio'
import { IoLogoGithub, IoLogoSteam, IoLogoLinkedin, IoMail } from 'react-icons/io5'

const getAge = () => {
    const birthday = new Date(2005, 3, 25) // April 25, 2005
    const today = new Date()
    let age = today.getFullYear() - birthday.getFullYear()
    const monthDiff = today.getMonth() - birthday.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        age--
    }
    return age
}

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    p='3'
                    flexShrink={0}
                    textAlign="center"
                >
                    <Box
                        display="inline-block"
                        borderRadius="full"
                        p="2px"
                        bg="teal.400"
                        boxShadow="0 0 20px rgba(56, 178, 172, 0.3)"
                        transition="all 0.4s ease"
                        _hover={{
                            boxShadow: '0 0 35px rgba(56, 178, 172, 0.5)',
                            transform: 'scale(1.05)',
                        }}
                    >
                        <Image
                            borderColor={useColorModeValue('#f0e7db', '#202023')}
                            borderWidth={3}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/paulo.jpg"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>

                <Box display={{ md: 'flex' }} textAlign='center' p='2'>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title" letterSpacing="-0.02em">
                            Hello?
                        </Heading>
                        <Box
                            fontSize="sm"
                            fontWeight="400"
                            opacity={0.8}
                            letterSpacing="0.03em"
                            mt={1}
                        >
                            Average B Student (Developer / Teaholic / Caratbit)
                        </Box>
                    </Box>
                </Box>

                <Box
                    borderRadius="lg"
                    bg="teal"
                    color="white"
                    p={3}
                    mb={4}
                    align="center"
                    fontWeight="500"
                    fontSize="sm"
                    letterSpacing="0.02em"
                >
                    Hello, I&apos;m an average student developer.
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About Me
                    </Heading>
                    <Box p='1' />
                    <Paragraph>
                        Hello! My name is Paulo, and I am a Computer Science student at the University of Santo Tomas. Over the years, I&apos;ve enjoyed building numerous projects ranging from {' '}<NextLink href="/works/minty~" passHref><Link>Discord bots</Link></NextLink> and full-stack web applications to custom Minecraft servers. Currently, my academic and personal focus is on learning modern web development and exploring game design. Programming and making tea are two of my favorite pastimes; both require patience, precision, and yield satisfying results. I am a pragmatic person who prioritizes meaningful work and values continuous learning. I also enjoy collaborating with others and am always open to connecting with new people. Also, I proudly stan LOOΠΔ and SEVENTEEN.
                    </Paragraph>

                    <Box align="center" my={4}>
                        <NextLink href="/works" passHref>
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                                size="md"
                                borderRadius="lg"
                                fontWeight="600"
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 12px rgba(56, 178, 172, 0.3)',
                                }}
                                transition="all 0.2s ease"
                            >
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
                        Male (he/they)
                    </BioSection>
                    <BioSection>
                        <BioYear>Age:</BioYear>
                        {getAge()}
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
                        <Link href="https://open.spotify.com/user/jptgumban" isExternal>
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                                size="md"
                                borderRadius="lg"
                                fontWeight="600"
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 12px rgba(56, 178, 172, 0.3)',
                                }}
                                transition="all 0.2s ease"
                            >
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
                    <Wrap spacing={2}>
                        {['Electric Guitar', 'Programming', 'Photography', 'Practicality', 'Film Cameras', 'Music', 'Final Fantasy', 'Megami Tensei', 'Pokemon', 'JinSoul'].map((hobby) => (
                            <WrapItem key={hobby}>
                                <Tag
                                    size="md"
                                    borderRadius="full"
                                    variant="subtle"
                                    colorScheme="teal"
                                    px={3}
                                    py={1}
                                    transition="all 0.2s ease"
                                    _hover={{
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 2px 8px rgba(56, 178, 172, 0.2)',
                                    }}
                                    cursor="default"
                                >
                                    <TagLabel fontSize="sm">{hobby}</TagLabel>
                                </Tag>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Contact Me
                    </Heading>
                    <Box p='1' />
                    <List spacing={1}>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/paulo-tumabing/" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoLinkedin />}
                                    borderRadius="lg"
                                    _hover={{
                                        transform: 'translateX(4px)',
                                        bg: useColorModeValue('teal.50', 'whiteAlpha.100'),
                                    }}
                                    transition="all 0.2s ease"
                                >
                                    Paulo Tumabing
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://github.com/Shrxmy" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoGithub />}
                                    borderRadius="lg"
                                    _hover={{
                                        transform: 'translateX(4px)',
                                        bg: useColorModeValue('teal.50', 'whiteAlpha.100'),
                                    }}
                                    transition="all 0.2s ease"
                                >
                                    Shrxmy
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="mailto:joevannipaulo0425.tumabing@gmail.com" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoMail />}
                                    borderRadius="lg"
                                    _hover={{
                                        transform: 'translateX(4px)',
                                        bg: useColorModeValue('teal.50', 'whiteAlpha.100'),
                                    }}
                                    transition="all 0.2s ease"
                                >
                                    joevannipaulo0425.tumabing@gmail.com
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://steamcommunity.com/id/shrxmy/" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoSteam />}
                                    borderRadius="lg"
                                    _hover={{
                                        transform: 'translateX(4px)',
                                        bg: useColorModeValue('teal.50', 'whiteAlpha.100'),
                                    }}
                                    transition="all 0.2s ease"
                                >
                                    Shroomy
                                </Button>
                            </Link>
                        </ListItem>
                    </List>

                    <Box align="center" my={4}>
                        <Popover>
                            <PopoverTrigger>
                                <Button
                                    variant="outline"
                                    colorScheme="teal"
                                    borderRadius="lg"
                                    size="sm"
                                    _hover={{
                                        transform: 'translateY(-1px)',
                                        boxShadow: '0 2px 8px rgba(56, 178, 172, 0.2)',
                                    }}
                                    transition="all 0.2s ease"
                                >
                                    Credits
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="xl" boxShadow="lg">
                                <PopoverArrow />
                                <PopoverHeader fontSize="medium" fontWeight="600">
                                    Credits and Inspiration
                                </PopoverHeader>
                                <PopoverBody fontSize="sm">
                                    Inspired by {' '}<Link href="https://www.craftz.dog/">craftzdog</Link>
                                </PopoverBody>
                                <PopoverBody fontSize="sm">
                                    The model is based on {' '}<Link href="https://sketchfab.com/3d-models/yuna-figure-world-of-final-fantasy-9be8455b25ec4e00887657e563f7823a">&quot;Yuna Figure (World of Final Fantasy)&quot;</Link> by {' '}<Link href="https://sketchfab.com/robukan">Robukan</Link> licensed under {' '}<Link href="http://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</Link>
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
