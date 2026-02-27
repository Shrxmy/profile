import { Container, Badge, Link, List, ListItem, Box } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta } from '../../components/pageprops';
import P from '../../components/paragraphs';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="ShopZada DWH">
            <Container>
                <Title>
                    ShopZada Data Warehouse <Badge>2025</Badge>
                </Title>
                <Box maxW='xl' borderWidth='4px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <Box
                        p='3'
                        mt='1'
                        as='h4'
                        lineHeight='tight'
                    >
                        <P>
                            End-to-end Kimball-style data warehouse for the ShopZada multi-department e-commerce dataset. Includes ingestion of multi-format files, transformation, dimensional modeling, analytical views, and a Power BI dashboard — all orchestrated with Apache Airflow and loaded into PostgreSQL.
                        </P>
                    </Box>
                </Box>

                <Box p='2' />

                <Box maxW='lg' borderWidth='1px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <List ml={30} my={2}>
                        <ListItem>
                            <Meta>Source:</Meta>
                            <Link href='https://github.com/daaviii95/dwh_finalproject_3CSD_Group3_Aperture'>
                                GitHub Repository <ExternalLinkIcon mx="1px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack:</Meta>
                            <span>
                                Python, Apache Airflow, PostgreSQL, Power BI, Docker
                            </span>
                        </ListItem>
                        <ListItem>
                            <Meta>Team:</Meta>
                            <span>
                                Group 3 — Aperture (3CSD)
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
