import { Container, Badge, Link, List, ListItem, Box } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/pageprops';
import P from '../../components/paragraphs';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="LOKKO's Website">
            <Container>
                <Title>
                    LOKKO's Website <Badge>2021-Present</Badge>
                </Title>
                <Box maxW='xl' borderWidth='4px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <Box
                        p='3'
                        mt='1'
                        as='h4'
                        lineHeight='tight'
                    > 
                        <P>
                        LOKKO Gaming — an organization founded/established to enhance and advance upcoming youth players in Iloilo. Promoting active participation of e-sports in the area — With various events, well-embedded in the content distribution and gaming world. 
                        </P>
                    </Box>
                </Box>

                <Box p='2' />

                <Box maxW='lg' borderWidth='1px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <List ml={30} my={2}>
                        <ListItem>
                            <Meta>Website:</Meta>
                            <Link href='https://shrxmy.github.io/lokko.org/'>
                                https://shrxmy.github.io/lokko.org/ <ExternalLinkIcon mx="1px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Used Languages:</Meta>
                            <span>
                                Javascript with HTML & CSS
                            </span>
                        </ListItem>
                        <ListItem>
                            <Meta>Facebook:</Meta>
                            <Link href='https://www.facebook.com/Lokko.Org'>
                                https://www.facebook.com/Lokko.Org <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                            <Meta>Discord:</Meta>
                            <Link href='https://discord.gg/YqMJHG6crj'>
                                https://discord.gg/LokkoOfficial <ExternalLinkIcon mx="2px" />
                            </Link>
                    </List>
                </Box>

                <Box p='2' />
                
                <WorkImage src="/images/work/lokko1.png" alt= "LOKKO Website"/>
                <WorkImage src="/images/work/lokko2.png" alt= "LOKKO Website"/>
            </Container>
        </Layout>
    )
}

export default Work