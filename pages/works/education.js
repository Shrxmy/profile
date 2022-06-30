import { Container, Badge, Link, List, ListItem, Box } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta } from '../../components/pageprops';
import P from '../../components/paragraphs';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="Study Materials">
            <Container>
                <Title>
                    Study Materials <Badge>Yes once again</Badge>
                </Title>
                <Box maxW='xl' borderWidth='4px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <Box
                        p='3'
                        mt='1'
                        as='h4'
                        lineHeight='tight'
                    >
                        <P>
                        These are study materials I have collected online. Most of these are used for CET preparations and some review stuff in PH universities. These are in Google Drive and all of these are not mine. Credits to all who have provided this.
                        </P>
                    </Box>
                </Box>

                <Box p='2'/>

                <Box maxW='lg' borderWidth='1px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <List ml={58} my={4}>
                        <ListItem>
                            <Meta>Link 1:</Meta>
                            <Link href='https://drive.google.com/drive/folders/1kSUOLwRDbSLosU9dd127bmgU0ZicFt9E'>
                                Link 1 <ExternalLinkIcon mx="1px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Link 2:</Meta>
                            <Link href='https://drive.google.com/drive/u/0/folders/1Q3d-Np8SPwh0fQ0vn7Q1evsB_3ZkQ7p2?sort=13&direction=a'>
                                Link 2 <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Link 3:</Meta>
                            <Link href='https://drive.google.com/file/d/1myQnouNQ_8hjKRTtTFnTuFdNOLU_P8EQ/view'>
                                Link 3 <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Link 4:</Meta>
                            <Link href='https://drive.google.com/drive/u/0/folders/1Lmq8tZOwZ7r6PQrOltzoMIOA_RO-wvML'>
                                Link 4 <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Link 5:</Meta>
                            <Link href='https://drive.google.com/drive/u/0/folders/1pslrbOFbJYK-_I8mQX18s-jC5VH5ZSYs'>
                                Link 5 <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Twitter Thread of Reviewers:</Meta>
                            <Link href='https://twitter.com/4reumict/status/1282857429068210177'>
                                Twitter Thread 1 <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Twitter Thread of Reviewers:</Meta>
                            <Link href='https://twitter.com/upcatreviewers/status/1281448714343571456?lang=en'>
                                Twitter Thread 2 <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Container>
        </Layout>
    )
}

export default Work