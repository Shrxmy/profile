import { Container, Badge, List, ListItem, Box } from '@chakra-ui/react'
import { Title, Meta } from '../../components/pageprops'
import P from '../../components/paragraphs'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="UST EVoSys 2.0">
            <Container>
                <Title>
                    UST EVoSys 2.0 <Badge>2026</Badge>
                </Title>

                <Box maxW="xl" borderWidth="4px" borderColor="grey" borderRadius="xl" overflow="hidden">
                    <Box p={3} mt={1} as="h4" lineHeight="tight">
                        <P>
                            UST EVoSys 2.0 is a rewrite of a legacy ASP.NET electronic voting system in Next.js and PostgreSQL, keeping the original election rules while modernizing the stack. It handles central and college-level ballots with transactional voting, per-voter row locking to prevent duplicate votes, and ballot storage that keeps selections separate from voter identity.
                        </P>
                    </Box>
                </Box>

                <Box p={2} />

                <Box maxW="xl" borderWidth="1px" borderColor="grey" borderRadius="xl" overflow="hidden">
                    <List ml={30} mr={4} my={2}>
                        <ListItem>
                            <Meta>Type:</Meta>
                            <span>Web application (private repository)</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack:</Meta>
                            <span>Next.js 16, React 19, TypeScript (strict), PostgreSQL 15, Drizzle ORM, Auth.js, Zod, Tailwind CSS 4</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Access control:</Meta>
                            <span>4 roles with separate permissions, audited password changes, and nonce-based CSP</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Voting:</Meta>
                            <span>Configurable 1–180 minute ballot timers enforced server-side, and 20-character private receipts verified through HMAC lookup hashes</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Data:</Meta>
                            <span>14 versioned SQL migrations, transactional CSV roster import, and archive exports with SHA-256 checksums</span>
                        </ListItem>
                    </List>
                </Box>
            </Container>
        </Layout>
    )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
