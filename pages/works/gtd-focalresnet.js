import { Container, Badge, Link, List, ListItem, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/pageprops'
import P from '../../components/paragraphs'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="GTD-FocalResNet">
            <Container>
                <Title>
                    GTD-FocalResNet <Badge>2026</Badge>
                </Title>


                <Box maxW="xl" borderWidth="4px" borderColor="grey" borderRadius="xl" overflow="hidden">
                    <Box p={3} mt={1} as="h4" lineHeight="tight">
                        <P>
                            GTD-FocalResNet: A Residual Focal-Loss Neural Model for Attack Success Prediction. This study predicts the success outcome of incidents recorded in the Global Terrorism Database (GTD), comparing Logistic Regression, CART, XGBoost, and a feedforward neural network under a forward-looking temporal validation design. It proposes GTD-FocalResNet, a residual focal-loss architecture adapted for the class imbalance in attack-success prediction.
                        </P>
                    </Box>
                </Box>

                <Box p={2} />

                <Box maxW="xl" borderWidth="1px" borderColor="grey" borderRadius="xl" overflow="hidden">
                    <List ml={30} my={2}>
                        <ListItem>
                            <Meta>Source:</Meta>
                            <Link href="https://github.com/Shrxmy/CSELEC2C-FinalProject" isExternal>
                                GitHub Repository <ExternalLinkIcon mx="1px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Type:</Meta>
                            <span>Machine learning research project</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack:</Meta>
                            <span>Python, Jupyter Notebook, scikit-learn, XGBoost, PyTorch</span>
                        </ListItem>
                    </List>
                </Box>

                <Box p={2} />

                <WorkImage src="/images/work/gtd-confusion-matrices.png" alt="Test-set confusion matrices for each model under the temporal split" />
            </Container>
        </Layout>
    )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
