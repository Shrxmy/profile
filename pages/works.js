import { Container, Heading, SimpleGrid, Divider, Box } from "@chakra-ui/react";
import React from "react";
import Section from '../components/sections'
import Layout from '../components/layouts/article'
import { WorkGridItem } from "../components/grid-item";

import thumbMinty from '../public/images/work/mintybot.jpg'
import thumbLokko from '../public/images/work/lokkoorg.jpg'
import thumbEmulators from '../public/images/work/emulatorthumb.jpg'
import thumbStudy from '../public/images/work/studythumb.jpg'
import thumbMinecraft from '../public/images/work/minecraftthumb.jpg'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>
    
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Box alignSelf='center' p='3' borderWidth='1px' borderRadius='lg' overflow='hidden' >
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
                                    This is a K-pop based Discord bot that has Administration, Music, Greetings and Twitter updates.
                                </WorkGridItem>
                            </Box>
                        </Section>
                    </Box>

                    <Box alignSelf='center' p='3' borderWidth='1px' borderRadius='lg' overflow='hidden' >
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
                                    LOKKO Organization's website. Provides information regarding the organizations goals, games, tournaments and news.
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
        
                    <SimpleGrid columns={[1,1,2]} gap={6} >
                    <Box alignSelf='center' p='3' borderWidth='1px' borderRadius='lg' overflow='hidden' >
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

                    <Box alignSelf='center' p='3' borderWidth='1px' borderRadius='lg' overflow='hidden' >
                        <Section>
                            <Box         
                                mt='1'
                                as='h4'
                                lineHeight='tight'
                                letterSpacing='wide'
                                borderRadius='lg'
                                p='1'
                            >
                                <WorkGridItem id="education" title="Study Materials" thumbnail={thumbStudy}>
                                    Collection of study materials I have used with some tips inside too.
                                </WorkGridItem>
                            </Box>
                        </Section>
                    </Box>

                    {/* <Section>
                        <WorkGridItem id="notionwebsite" title="Notion Website" thumbnail={thumbNotion}>
                            Notion website I created myself. You can also make one yourself!
                        </WorkGridItem>
                    </Section> */}

                    <Box alignSelf='center' p='3' borderWidth='1px' borderRadius='lg' overflow='hidden' >
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