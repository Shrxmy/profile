import { Container, Badge, Link, List, ListItem, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/pageprops'
import P from '../../components/paragraphs'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Heekki">
            <Container>
                <Title>
                    Heekki <Badge>2026</Badge>
                </Title>

                <Box maxW="xl" borderWidth="4px" borderColor="grey" borderRadius="xl" overflow="hidden">
                    <Box p={3} mt={1} as="h4" lineHeight="tight">
                        <P>
                            Heekki is a LOONA-themed Discord bot. It plays music from YouTube and Spotify through Lavalink, draws &quot;twelve stars&quot; welcome cards in the members&apos; colours, and has Last.fm stats, LOONA member profiles, games, and lookups for anime, GitHub, Pokédex, Steam, weather and more. Every command works as both a prefix and a slash command.
                        </P>
                    </Box>
                </Box>

                <Box p={2} />

                <Box maxW="xl" borderWidth="1px" borderColor="grey" borderRadius="xl" overflow="hidden">
                    <List ml={30} my={2}>
                        <ListItem>
                            <Meta>Source:</Meta>
                            <Link href="https://github.com/Shrxmy/Heekki" isExternal>
                                GitHub Repository <ExternalLinkIcon mx="1px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Type:</Meta>
                            <span>Discord bot</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack:</Meta>
                            <span>Node.js, discord.js v14, Lavalink v4, Docker</span>
                        </ListItem>
                    </List>
                </Box>
            </Container>
        </Layout>
    )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
