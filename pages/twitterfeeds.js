import NextLink from 'next/link';
import Layout from '../components/layouts/article'
import { TwtTitle } from '../components/pageprops'
import { Box, Heading, Text, Container, Divider, Button, useColorModeValue } from '@chakra-ui/react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const SampleNotFound = () => {
    return (
        <Layout>
            <Container>
                <TwtTitle>Twitter Feeds</TwtTitle>
                    <Text>This is a twitter feed of K-pop groups I stan, I guess if you guys are interested in these then that's good to know. I can't change the theme back to light when toggled though TT</Text>
                <Divider my={6} />
                <Box my={6} align="center">
                    <NextLink href="/">
                        <Button colorScheme="twitter">Go back?</Button> 
                    </NextLink>
                </Box>
                <Box p='1' maxW='xl' borderWidth='4px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="loonatheworld"
                        options={{height: 400}}
                        theme='dark'
                        noFooter='true'
                        noScrollbar='true'
                    />
                </Box>
                <Box p='2' />
                <Box p='1' maxW='xl' borderWidth='4px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="pledis_17"
                        options={{height: 400}}
                        theme='dark'
                        noFooter='true'
                        noScrollbar='true'
                    />
                </Box>
                <Box p='2' />
            </Container>
        </Layout>
    )
}

export default SampleNotFound