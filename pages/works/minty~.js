/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, ListItem, List, Box } from '@chakra-ui/react';
import { Title, WorkImage, Meta } from '../../components/pageprops';
import P from '../../components/paragraphs';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="Minty~">
            <Container>
                <Title>
                    Minty~ <Badge>2021-Present</Badge>
                </Title>
                <Box maxW='xl' borderWidth='4px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <Box
                        p='3'
                        mt='1'
                        as='h4'
                        lineHeight='tight'
                    >
                        <P>
                            Minty is a K-Pop based Discord bot. It was also inspired through IZ*ONE and now LESSERAFIM's Kim Chaewon. The bot has moderation, music, welcome messages, and Twitter notifications.
                        </P>
                    </Box>
                </Box>

                <Box p='2' />

                <Box maxW='lg' borderWidth='1px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <List ml={30} my={4}>
                        <ListItem>
                            <Meta>Updates:</Meta>
                            <span>
                                Minty~ is currently offline and will be back soon!(Until I retrive the source code from my old hard drive.)
                            </span>
                        </ListItem>
                        <ListItem>
                            <Meta>Used Languages:</Meta>
                            <span>
                                Javascript, Node.js
                            </span>
                        </ListItem>
                        <ListItem>
                            <Meta>Database:</Meta>
                            <span>
                                SQL and Mongo DB
                            </span>
                        </ListItem>
                        <Meta>Required Permissions:</Meta>
                        <span>
                            Administrator
                        </span>
                    </List>
                </Box>

                <Box p='2' />

                <WorkImage src="/images/work/minty1.png" alt="Minty~" />
                <WorkImage src="/images/work/minty2.png" alt="Minty~" />
                <WorkImage src="/images/work/minty3.png" alt="Minty~" />
            </Container>
        </Layout>
    )
}

export default Work