import { Container, Badge, Link, List, ListItem, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/pageprops'
import P from '../../components/paragraphs'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="emuGBDS">
            <Container>
                <Title>
                    emuGBDS <Badge>2026</Badge>
                </Title>


                <Box maxW="xl" borderWidth="4px" borderColor="grey" borderRadius="xl" overflow="hidden">
                    <Box p={3} mt={1} as="h4" lineHeight="tight">
                        <P>
                            emuGBDS is a clean-room emulator host focused on in-house GBA and DS core development. The project includes scaffolding for GBA execution, DS timing, firmware Slot-2 transition support, and optional melonDS adapter integration for development experiments.
                        </P>
                    </Box>
                </Box>

                <Box p={2} />

                <Box maxW="xl" borderWidth="1px" borderColor="grey" borderRadius="xl" overflow="hidden">
                    <List ml={30} my={2}>
                        <ListItem>
                            <Meta>Source:</Meta>
                            <Link href="https://github.com/Shrxmy/emuGBDS" isExternal>
                                GitHub Repository <ExternalLinkIcon mx="1px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Type:</Meta>
                            <span>Clean-room emulator host</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack:</Meta>
                            <span>C, CMake, SDL, emulator core architecture</span>
                        </ListItem>
                    </List>
                </Box>
            </Container>
        </Layout>
    )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
