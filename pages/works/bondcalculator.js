import { Container, Badge, Link, List, ListItem, Box } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta } from '../../components/pageprops';
import P from '../../components/paragraphs';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="Bond Calculator">
            <Container>
                <Title>
                    Bond Calculator <Badge>2026</Badge>
                </Title>
                <Box maxW='xl' borderWidth='4px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <Box
                        p='3'
                        mt='1'
                        as='h4'
                        lineHeight='tight'
                    >
                        <P>
                            A simple bond calculator web application that computes bond prices, yields, Macaulay duration, modified duration, and displays yield curves. Built with Python and deployed on Streamlit Cloud.
                        </P>
                    </Box>
                </Box>

                <Box p='2' />

                <Box maxW='lg' borderWidth='1px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <List ml={30} my={2}>
                        <ListItem>
                            <Meta>Website:</Meta>
                            <Link href='https://bondcalculator-shrxmy.streamlit.app/'>
                                bondcalculator-shrxmy.streamlit.app <ExternalLinkIcon mx="1px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Source:</Meta>
                            <Link href='https://github.com/Shrxmy/bondCalculator'>
                                GitHub Repository <ExternalLinkIcon mx="1px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack:</Meta>
                            <span>
                                Python, Streamlit
                            </span>
                        </ListItem>
                        <ListItem>
                            <Meta>Topics:</Meta>
                            <span>
                                Business Intelligence, Calculator
                            </span>
                        </ListItem>
                    </List>
                </Box>
            </Container>
        </Layout>
    )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
