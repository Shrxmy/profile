import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Link,
    SimpleGrid,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import { FiArrowUpRight } from 'react-icons/fi'
import Layout from '../components/layouts/article'
import Section from '../components/sections'
import { BioSection, BioYear } from '../components/bio'
import MushroomLoader from '../components/mushroom-loader'

const LazyMushroom = dynamic(() => import('../components/mushroom'), {
    ssr: false,
    loading: () => <MushroomLoader />
})

const experience = [
    {
        dates: 'Aug 2026 — Present',
        company: 'Angat Buhay Foundation',
        role: 'Intern · Developer',
        description: 'Builds full-stack features for Angat Buhay platforms, including ABVN, a real-time partnership portal serving 213 organizations, with PHP, JavaScript, HTML/CSS, and Firebase.'
    },
    {
        dates: 'Jan 2025 — May 2026',
        company: 'Freelance',
        role: 'Web Developer',
        description: 'Delivered end-to-end web solutions across UI/UX, visual design, and backend integrations with SQL, MongoDB, and Firebase.'
    },
    {
        dates: 'Sep 2025 — Oct 2025',
        company: 'Mobius Engine',
        role: 'Marketing Analyst',
        description: 'Expanded awareness and lead generation for an automated job-search platform through targeted outreach.'
    },
    {
        dates: 'Feb 2023 — Mar 2023',
        company: 'The Medical City Iloilo',
        role: 'Intern · IT Assistant',
        description: 'Supported medical and administrative staff through frontline IT troubleshooting and hospital data-system maintenance.'
    }
]

const getAge = () => {
    const birthday = new Date(2005, 3, 25)
    const today = new Date()
    let age = today.getFullYear() - birthday.getFullYear()
    const monthDiff = today.getMonth() - birthday.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        age--
    }
    return age
}

const SocialLink = ({ href, icon, children }) => (
    <Link
        href={href}
        isExternal={!href.startsWith('mailto:')}
        display="inline-flex"
        alignItems="center"
        fontSize="sm"
        fontWeight="600"
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        _hover={{ color: 'teal.500', textDecoration: 'none' }}
    >
        <Box as={icon} mr={2} color="teal" aria-hidden="true" />
        {children}
    </Link>
)

const Home = () => {
    const mutedText = useColorModeValue('ink.500', 'whiteAlpha.700')
    const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
    const softBackground = useColorModeValue('paper.100', 'whiteAlpha.100')

    return (
        <Layout>
            <Container maxW="none" px={0}>
                <Section delay={0.05}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={[10, 16]} alignItems="center">
                        <Box order={{ base: 2, md: 1 }}>
                            <Heading as="h1" variant="page-title">
                                Paulo Tumabing
                            </Heading>
                            <Text
                                mt={5}
                                maxW="560px"
                                color={mutedText}
                                fontSize={['lg', 'xl']}
                                lineHeight="1.65"
                            >
                                I build thoughtful software, explore game systems, and write about
                                what I learn along the way.
                            </Text>
                            <Text mt={4} maxW="520px" color={mutedText} lineHeight="1.8">
                                Computer Science student at the University of Santo Tomas, usually
                                found moving between a code editor, a film camera, and a cup of tea.
                            </Text>

                            <Flex mt={8} gap={3} wrap="wrap">
                                <NextLink href="/works" passHref>
                                    <Button
                                        as="a"
                                        bg="teal"
                                        color="white"
                                        rightIcon={<FiArrowUpRight />}
                                        borderRadius="lg"
                                        _hover={{ bg: 'teal.600', transform: 'translateY(-2px)' }}
                                        transition="all 0.2s ease"
                                    >
                                        Projects &amp; Links
                                    </Button>
                                </NextLink>
                                <NextLink href="/tea-room" passHref>
                                    <Button
                                        as="a"
                                        variant="outline"
                                        borderColor="teal.500"
                                        color="teal.700"
                                        rightIcon={<FiArrowUpRight />}
                                        borderRadius="lg"
                                        _hover={{ bg: 'teal.50', transform: 'translateY(-2px)' }}
                                        transition="all 0.2s ease"
                                    >
                                        Tea Room
                                    </Button>
                                </NextLink>
                            </Flex>

                            <Flex mt={8} gap={[4, 6]} wrap="wrap">
                                <SocialLink href="https://github.com/Shrxmy" icon={IoLogoGithub}>
                                    GitHub
                                </SocialLink>
                                <SocialLink
                                    href="https://www.linkedin.com/in/paulo-tumabing/"
                                    icon={IoLogoLinkedin}
                                >
                                    LinkedIn
                                </SocialLink>
                                <SocialLink
                                    href="mailto:joevannipaulo0425.tumabing@gmail.com"
                                    icon={IoMail}
                                >
                                    Email
                                </SocialLink>
                            </Flex>
                        </Box>

                        <Box order={{ base: 1, md: 2 }}>
                            <Box
                                borderTop="1px solid"
                                borderLeft="1px solid"
                                borderColor={borderColor}
                                p={[3, 5]}
                                bg={softBackground}
                            >
                                <Box position="relative" w="full" pt="100%" overflow="hidden">
                                    <Image
                                        src="/images/paulo1.jpg"
                                        alt="Paulo Tumabing in a casual portrait"
                                        position="absolute"
                                        top={0}
                                        right={0}
                                        bottom={0}
                                        left={0}
                                        w="full"
                                        h="full"
                                        objectFit="cover"
                                        objectPosition="center"
                                        filter="saturate(0.88)"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Section>

                <Section delay={0.12}>
                    <Box borderTop="1px solid" borderColor={borderColor} pt={6}>
                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={[8, 14]} alignItems="center">
                            <Box>
                                <Heading as="h2" variant="section-title">
                                    Away from the keyboard
                                </Heading>
                                <Text color={mutedText} lineHeight="1.9">
                                    I like projects with a little patience in them: brewing tea, taking
                                    photos on film, learning a guitar part, or getting lost in a game
                                    system. Those slower interests often shape how I approach software.
                                </Text>
                                <Text color={mutedText} lineHeight="1.9" mt={4}>
                                    I value meaningful work, continuous learning, and collaborating with
                                    people who are open to new ideas.
                                </Text>
                            </Box>
                            <Box>
                                <Heading as="h3" variant="section-title" mb={4}>
                                    A few facts
                                </Heading>
                                <BioSection>
                                    <BioYear>Age:</BioYear>
                                    {getAge()}
                                </BioSection>
                                <BioSection>
                                    <BioYear>Gender:</BioYear>
                                    Male (he/they)
                                </BioSection>
                                <BioSection>
                                    <BioYear>MBTI:</BioYear>
                                    INFJ
                                </BioSection>
                                <BioSection>
                                    <BioYear>Dreams:</BioYear>
                                    Future Software Developer
                                </BioSection>
                            </Box>
                        </SimpleGrid>
                    </Box>
                </Section>

                <Section delay={0.18}>
                    <Box borderTop="1px solid" borderColor={borderColor} pt={6}>
                        <Heading as="h2" variant="section-title">
                            Work experience
                        </Heading>
                        <Box borderTop="1px solid" borderColor={borderColor}>
                            {experience.map(item => (
                                <Box
                                    key={`${item.company}-${item.role}`}
                                    py={5}
                                    borderBottom="1px solid"
                                    borderColor={borderColor}
                                >
                                    <Flex align="baseline" justify="space-between" gap={4}>
                                        <Box>
                                            <Heading as="h3" fontSize="xl">
                                                {item.role}
                                            </Heading>
                                            <Text color="teal.500" fontSize="sm" fontWeight="600" mt={1}>
                                                {item.company}
                                            </Text>
                                        </Box>
                                        <Text
                                            color={mutedText}
                                            fontSize="sm"
                                            fontFamily="mono"
                                            textAlign="right"
                                            flexShrink={0}
                                        >
                                            {item.dates}
                                        </Text>
                                    </Flex>
                                    <Text color={mutedText} fontSize="sm" lineHeight="1.65" mt={2}>
                                        {item.description}
                                    </Text>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Section>

                <Section delay={0.24}>
                    <Box
                        borderTop="1px solid"
                        borderBottom="1px solid"
                        borderColor={borderColor}
                        py={5}
                    >
                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} alignItems="center">
                            <Box>
                                <Heading as="h2" variant="section-title" mb={2}>
                                    A small interactive corner
                                </Heading>
                                <Text color={mutedText} lineHeight="1.8" maxW="430px">
                                    The 3D companion that started this site is still here, now kept
                                    separate from the main introduction so it can be enjoyed without
                                    getting in the way.
                                </Text>
                            </Box>
                            <Box h={[220, 260]} overflow="hidden" aria-label="Interactive 3D mushroom model">
                                <LazyMushroom />
                            </Box>
                        </SimpleGrid>
                    </Box>
                </Section>

                <Section delay={0.3}>
                    <Box bg={softBackground} p={[6, 8]}>
                        <Heading as="h2" fontSize={['2xl', '3xl']}>
                            Have something in mind?
                        </Heading>
                        <Text color={mutedText} lineHeight="1.8" mt={3}>
                            I am always happy to talk about a project, an interesting technical
                            problem, or a good cup of tea.
                        </Text>
                        <Flex mt={5} gap={[4, 6]} wrap="wrap">
                            <SocialLink href="mailto:joevannipaulo0425.tumabing@gmail.com" icon={IoMail}>
                                joevannipaulo0425.tumabing@gmail.com
                            </SocialLink>
                            <SocialLink href="https://github.com/Shrxmy" icon={IoLogoGithub}>
                                GitHub / Shrxmy
                            </SocialLink>
                        </Flex>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Home
export { getServerSideProps } from '../components/chakra'
