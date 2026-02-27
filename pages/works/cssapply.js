import { Container, Badge, Link, List, ListItem, Box } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta } from '../../components/pageprops';
import P from '../../components/paragraphs';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="CSS Apply">
            <Container>
                <Title>
                    CSS Apply <Badge>2025</Badge>
                </Title>
                <Box maxW='xl' borderWidth='4px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <Box
                        p='3'
                        mt='1'
                        as='h4'
                        lineHeight='tight'
                    >
                        <P>
                            The official recruitment portal for the Computer Science Society at the University of Santo Tomas. Features member, committee staff, and executive assistant applications with secure authentication and email notifications.
                        </P>
                    </Box>
                </Box>

                <Box p='2' />

                <Box maxW='lg' borderWidth='1px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <List ml={30} my={2}>
                        <ListItem>
                            <Meta>Website:</Meta>
                            <Link href='https://css-apply.vercel.app'>
                                css-apply.vercel.app <ExternalLinkIcon mx="1px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Source:</Meta>
                            <Link href='https://github.com/genna-cervantes/css-apply'>
                                GitHub Repository <ExternalLinkIcon mx="1px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack:</Meta>
                            <span>
                                Next.js, TypeScript, Tailwind CSS, Prisma
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
