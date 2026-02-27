/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Link, List, ListItem, Box } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta } from '../../components/pageprops';
import P from '../../components/paragraphs';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="Profile Website">
            <Container>
                <Title>
                    Profile Website <Badge>2022-Present</Badge>
                </Title>
                <Box maxW='xl' borderWidth='4px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <Box
                        p='3'
                        mt='1'
                        as='h4'
                        lineHeight='tight'
                    >
                        <P>
                            This very homepage — a personal portfolio website built with Next.js, Chakra UI, Three.js for 3D models, and Framer Motion for animations. Inspired by craftzdog's homepage with a personal creative touch.
                        </P>
                    </Box>
                </Box>

                <Box p='2' />

                <Box maxW='lg' borderWidth='1px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <List ml={30} my={2}>
                        <ListItem>
                            <Meta>Website:</Meta>
                            <Link href='https://shrxmy-profile.vercel.app'>
                                shrxmy-profile.vercel.app <ExternalLinkIcon mx="1px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Source:</Meta>
                            <Link href='https://github.com/Shrxmy/profile'>
                                GitHub Repository <ExternalLinkIcon mx="1px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack:</Meta>
                            <span>
                                Next.js, Chakra UI, Three.js, Framer Motion
                            </span>
                        </ListItem>
                        <ListItem>
                            <Meta>License:</Meta>
                            <span>
                                MIT
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
