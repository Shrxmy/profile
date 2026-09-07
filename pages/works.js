import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/sections'
import { WorkGridItem } from '../components/grid-item'

const projects = [
    {
        id: 'agml-densecbam',
        title: 'AGML-DenseCBAM',
        category: 'Machine learning research',
        thumbnail: '/images/work/agml-densecbam.jpg',
        description: 'Attention-guided multi-task learning for TMD classification using panoramic radiographs.'
    },
    {
        id: 'emugbds',
        title: 'emuGBDS',
        category: 'Emulation research',
        thumbnail: '/images/work/emugbds.jpg',
        description: 'A clean-room emulator host focused on in-house GBA and DS core development.'
    },
    {
        id: 'cssapply',
        title: 'CSSApply',
        category: 'Web application',
        thumbnail: '/images/work/cssapplythumb.png',
        description: 'A recruitment portal for the University of Santo Tomas Computer Science Society.'
    },
    {
        id: 'shopzadadwh',
        title: 'ShopZada Data Warehouse',
        category: 'Data engineering',
        thumbnail: '/images/work/dwhthumb.png',
        description: 'An end-to-end warehouse orchestrated with Airflow and loaded into PostgreSQL.'
    },
    {
        id: 'bondcalculator',
        title: 'Bond Calculator',
        category: 'Data application',
        thumbnail: '/images/work/bondcalcthumb.png',
        description: 'A Streamlit app for bond prices, yields, duration, and yield curve analysis.'
    },
    {
        id: 'profilewebsite',
        title: 'Profile Website',
        category: 'Personal site',
        thumbnail: '/images/work/profilethumb.png',
        description: 'This site, shaped by experiments in Next.js, Chakra UI, Three.js, and writing.'
    },
    {
        id: 'minty~',
        title: 'Minty~',
        category: 'Discord bot',
        thumbnail: '/images/work/mintybot.jpg',
        description: 'A K-pop inspired Discord bot with moderation, music, greetings, and updates.'
    },
    {
        id: 'lokkowebsite',
        title: 'LOKKO Org.',
        category: 'Community website',
        thumbnail: '/images/work/lokkoorg.jpg',
        description: 'A website for an organization supporting youth esports players in Iloilo.'
    }
]

const usefulLinks = [
    {
        id: 'emulatorfiles',
        title: 'Emulator Files',
        category: 'Reference library',
        thumbnail: '/images/work/emulatorthumb.jpg',
        description: 'A curated collection of emulator links and notes for people who want a safer starting point.'
    },
    {
        id: 'minecraftserver',
        title: 'Minecraft Servers',
        category: 'Community resource',
        thumbnail: '/images/work/minecraftthumb.jpg',
        description: 'Downloadable Forge server setups and practical notes for playing with friends.'
    }
]

const Works = () => {
    const mutedText = useColorModeValue('ink.500', 'whiteAlpha.700')
    const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

    return (
        <Layout title="Projects">
            <Container maxW="none" px={0}>
                <Section delay={0.05} mb={[6, 8]}>
                    <Heading as="h1" fontSize={['2xl', '3xl']} letterSpacing="-0.02em">
                        Projects &amp; Links
                    </Heading>
                    <Text color={mutedText} lineHeight="1.8" mt={4}>
                        A selection of software, research, and community projects. Some are polished,
                        some are still teaching me something, and all of them are part of the story.
                    </Text>
                </Section>

                <Section delay={0.12} mb={[6, 8]}>
                    <Heading as="h2" variant="section-title" mb={4}>
                        Projects
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={[5, 6]}>
                        {projects.map(project => (
                            <Box
                                key={project.id}
                                borderTop="1px solid"
                                borderColor={borderColor}
                                pt={4}
                            >
                                <WorkGridItem {...project}>
                                    {project.description}
                                </WorkGridItem>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Section>

                <Section delay={0.18}>
                    <Box borderTop="1px solid" borderColor={borderColor} pt={6}>
                        <Heading as="h2" variant="section-title" mb={2}>
                            Useful links
                        </Heading>
                        <Text color={mutedText} lineHeight="1.7" mb={6}>
                            A few practical resources I keep around for game development, emulation,
                            and playing with friends.
                        </Text>
                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={[5, 6]}>
                            {usefulLinks.map(item => (
                                <Box key={item.id} borderTop="1px solid" borderColor={borderColor} pt={4}>
                                    <WorkGridItem {...item}>
                                        {item.description}
                                    </WorkGridItem>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>
                </Section>

            </Container>
        </Layout>
    )
}

export default Works
export { getServerSideProps } from '../components/chakra'
