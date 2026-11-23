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
import { GridItem, WorkGridItem } from '../components/grid-item'

const projects = [
    {
        id: 'heekki',
        title: 'Heekki',
        category: 'Discord bot',
        thumbnail: '/images/work/heekki.jpg',
        description: 'A LOONA-themed Discord bot with music, welcome cards, games, member profiles, and lookups.'
    },
    {
        id: 'agml-densecbam',
        title: 'AGML-DenseCBAM',
        category: 'Machine learning research',
        thumbnail: '/images/work/agml-densecbam.jpg',
        description: 'Attention-guided multi-task learning for TMD classification using panoramic radiographs.'
    },
    {
        id: 'gtd-focalresnet',
        title: 'GTD-FocalResNet',
        category: 'Machine learning research',
        thumbnail: '/images/work/gtd-focalresnet.png',
        description: 'A residual focal-loss neural model for attack success prediction on the Global Terrorism Database.'
    },
    {
        id: 'emugbds',
        title: 'emuGBDS',
        category: 'Emulation research',
        thumbnail: '/images/work/emugbds.jpg',
        description: 'A clean-room emulator host focused on in-house GBA and DS core development.'
    },
    {
        id: 'evosys',
        title: 'UST EVoSys 2.0',
        category: 'Web application',
        thumbnail: '/images/work/evosys.png',
        description: 'A Next.js and PostgreSQL rewrite of a legacy ASP.NET voting system, with transactional ballots and private receipts.'
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
        id: 'dotfiles',
        title: 'dotfiles',
        href: 'https://github.com/Shrxmy/dotfiles',
        thumbnail: '/images/work/dotfiles.png',
        description: 'My Debian + Hyprland setup: keybinds, zsh, terminal, and battery tweaks. The looks live in u-da-real-ricing.'
    },
    {
        id: 'u-da-real-ricing',
        title: 'u-da-real-ricing',
        href: 'https://github.com/Shrxmy/u-da-real-ricing',
        thumbnail: '/images/work/ricing.png',
        description: 'The looks half of my setup: the retro clean palette, Waybar, Quickshell wallpapers, and notifications.'
    },
    {
        id: 'claude-code-setup',
        title: 'Claude Code Setup',
        href: 'https://github.com/Shrxmy/claude-code-setup',
        thumbnail: '/images/work/claudecodesetup.png',
        description: 'My Claude Code instructions, settings, plugins, and skills, with a one-command installer.'
    },
    {
        id: 'my-pi-configs',
        title: 'Pi Setup',
        href: 'https://github.com/Shrxmy/my-pi-configs',
        thumbnail: '/images/work/pisetup.png',
        description: 'My pi agent config: retro-clean theme, subagents, workflows, background terminals, and skills.'
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
                            The configs I actually use day to day: my desktop, terminal, and coding agents.
                        </Text>
                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={[5, 6]}>
                            {usefulLinks.map(item => (
                                <Box key={item.id} borderTop="1px solid" borderColor={borderColor} pt={4}>
                                    <GridItem {...item}>
                                        {item.description}
                                    </GridItem>
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
