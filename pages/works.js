/* eslint-disable react/no-unescaped-entities */
import { Container, Heading, SimpleGrid, Divider, Box } from "@chakra-ui/react";
import React from "react";
import Section from '../components/sections'
import Layout from '../components/layouts/article'
import { WorkGridItem } from "../components/grid-item";

const thumbMinty = '/images/work/mintybot.jpg'
const thumbLokko = '/images/work/lokkoorg.jpg'
const thumbEmulators = '/images/work/emulatorthumb.jpg'
const thumbMinecraft = '/images/work/minecraftthumb.jpg'
const thumbBondCalc = '/images/work/bondcalcthumb.png'
const thumbCSSApply = '/images/work/cssapplythumb.png'
const thumbDWH = '/images/work/dwhthumb.png'
const thumbProfile = '/images/work/profilethumb.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Box h="100%" display="flex" flexDirection="column" p='3' borderWidth='1px' borderRadius='xl' overflow='hidden' transition='all 0.3s ease' _hover={{ boxShadow: '0 8px 25px rgba(0,0,0,0.1)', transform: 'translateY(-2px)' }} >
                        <Section>
                            <Box
                                mt='1'
                                as='h4'
                                lineHeight='tight'
                                letterSpacing='wide'
                                borderRadius='lg'
                                p='1'
                            >
                                <WorkGridItem id="cssapply" title="CSS Apply" thumbnail={thumbCSSApply}>
                                    Computer Science Society Recruitment Portal — built with Next.js, TypeScript, Tailwind CSS and Prisma.
                                </WorkGridItem>
                            </Box>
                        </Section>
                    </Box>

                    <Box h="100%" display="flex" flexDirection="column" p='3' borderWidth='1px' borderRadius='xl' overflow='hidden' transition='all 0.3s ease' _hover={{ boxShadow: '0 8px 25px rgba(0,0,0,0.1)', transform: 'translateY(-2px)' }} >
                        <Section>
                            <Box
                                mt='1'
                                as='h4'
                                lineHeight='tight'
                                letterSpacing='wide'
                                borderRadius='lg'
                                p='1'
                            >
                                <WorkGridItem id="shopzadadwh" title="ShopZada DWH" thumbnail={thumbDWH}>
                                    End-to-end Data Warehouse for ShopZada e-commerce, orchestrated with Apache Airflow and PostgreSQL.
                                </WorkGridItem>
                            </Box>
                        </Section>
                    </Box>

                    <Box h="100%" display="flex" flexDirection="column" p='3' borderWidth='1px' borderRadius='xl' overflow='hidden' transition='all 0.3s ease' _hover={{ boxShadow: '0 8px 25px rgba(0,0,0,0.1)', transform: 'translateY(-2px)' }} >
                        <Section>
                            <Box
                                mt='1'
                                as='h4'
                                lineHeight='tight'
                                letterSpacing='wide'
                                borderRadius='lg'
                                p='1'
                            >
                                <WorkGridItem id="bondcalculator" title="Bond Calculator" thumbnail={thumbBondCalc}>
                                    A bond calculator web app with yield curve analysis, built with Python and Streamlit.
                                </WorkGridItem>
                            </Box>
                        </Section>
                    </Box>

                    <Box h="100%" display="flex" flexDirection="column" p='3' borderWidth='1px' borderRadius='xl' overflow='hidden' transition='all 0.3s ease' _hover={{ boxShadow: '0 8px 25px rgba(0,0,0,0.1)', transform: 'translateY(-2px)' }} >
                        <Section>
                            <Box
                                mt='1'
                                as='h4'
                                lineHeight='tight'
                                letterSpacing='wide'
                                borderRadius='lg'
                                p='1'
                            >
                                <WorkGridItem id="profilewebsite" title="Profile Website" thumbnail={thumbProfile}>
                                    This homepage — built with Next.js, Chakra UI, Three.js and Framer Motion.
                                </WorkGridItem>
                            </Box>
                        </Section>
                    </Box>

                    <Box h="100%" display="flex" flexDirection="column" p='3' borderWidth='1px' borderRadius='xl' overflow='hidden' transition='all 0.3s ease' _hover={{ boxShadow: '0 8px 25px rgba(0,0,0,0.1)', transform: 'translateY(-2px)' }} >
                        <Section>
                            <Box
                                mt='1'
                                as='h4'
                                lineHeight='tight'
                                letterSpacing='wide'
                                borderRadius='lg'
                                p='1'
                            >
                                <WorkGridItem id="minty~" title="Minty~" thumbnail={thumbMinty}>
                                    A K-pop based Discord bot with Administration, Music, Greetings and Twitter updates.
                                </WorkGridItem>
                            </Box>
                        </Section>
                    </Box>

                    <Box h="100%" display="flex" flexDirection="column" p='3' borderWidth='1px' borderRadius='xl' overflow='hidden' transition='all 0.3s ease' _hover={{ boxShadow: '0 8px 25px rgba(0,0,0,0.1)', transform: 'translateY(-2px)' }} >
                        <Section>
                            <Box
                                mt='1'
                                as='h4'
                                lineHeight='tight'
                                letterSpacing='wide'
                                borderRadius='lg'
                                p='1'
                            >
                                <WorkGridItem id="lokkowebsite" title="LOKKO Org." thumbnail={thumbLokko}>
                                    LOKKO Organization's website. Provides information regarding the organization's goals, games, tournaments and news.
                                </WorkGridItem>
                            </Box>
                        </Section>
                    </Box>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={4} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        Useful Links
                    </Heading>

                    <SimpleGrid columns={[1, 1, 2]} gap={6} >
                        <Box h="100%" display="flex" flexDirection="column" p='3' borderWidth='1px' borderRadius='xl' overflow='hidden' transition='all 0.3s ease' _hover={{ boxShadow: '0 8px 25px rgba(0,0,0,0.1)', transform: 'translateY(-2px)' }} >
                            <Section>
                                <Box
                                    mt='1'
                                    as='h4'
                                    lineHeight='tight'
                                    letterSpacing='wide'
                                    borderRadius='lg'
                                    p='1'
                                >
                                    <WorkGridItem id="emulatorfiles" title="Emulator Files" thumbnail={thumbEmulators}>
                                        All emulator files I have organized for the people that are quite insecure of installing them online.
                                    </WorkGridItem>
                                </Box>
                            </Section>
                        </Box>



                        <Box alignSelf='center' p='3' borderWidth='1px' borderRadius='xl' overflow='hidden' transition='all 0.3s ease' _hover={{ boxShadow: '0 8px 25px rgba(0,0,0,0.1)', transform: 'translateY(-2px)' }} >
                            <Section>
                                <Box
                                    mt='1'
                                    as='h4'
                                    lineHeight='tight'
                                    letterSpacing='wide'
                                    borderRadius='lg'
                                    p='1'
                                >
                                    <WorkGridItem id="minecraftserver" title="Minecraft Servers" thumbnail={thumbMinecraft}>
                                        Minecraft servers that are downloadable and ready to setup, these are Forge servers.
                                    </WorkGridItem>
                                </Box>
                            </Section>
                        </Box>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default Works
export { getServerSideProps } from '../components/chakra'