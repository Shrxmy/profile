import { Container, Badge, Link, List, ListItem, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/pageprops'
import P from '../../components/paragraphs'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="AGML-DenseCBAM">
            <Container>
                <Title>
                    AGML-DenseCBAM <Badge>2026</Badge>
                </Title>


                <Box maxW="xl" borderWidth="4px" borderColor="grey" borderRadius="xl" overflow="hidden">
                    <Box p={3} mt={1} as="h4" lineHeight="tight">
                        <P>
                            AGML-DenseCBAM proposes an Attention-Guided Multi-task Learning framework for robust classification of Temporomandibular Disorders using panoramic radiographs. The project explores how attention mechanisms and multi-task learning can support medical image analysis where model focus and interpretability matter.
                        </P>
                    </Box>
                </Box>

                <Box p={2} />

                <Box maxW="xl" borderWidth="1px" borderColor="grey" borderRadius="xl" overflow="hidden">
                    <List ml={30} my={2}>
                        <ListItem>
                            <Meta>Source:</Meta>
                            <Link href="https://github.com/Shrxmy/AGML-DenseCBAM" isExternal>
                                GitHub Repository <ExternalLinkIcon mx="1px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Type:</Meta>
                            <span>Machine learning research project</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack:</Meta>
                            <span>Jupyter Notebook, Python, medical imaging workflow</span>
                        </ListItem>
                    </List>
                </Box>
            </Container>
        </Layout>
    )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
