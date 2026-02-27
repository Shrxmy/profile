import NextLink from 'next/link';
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react';

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Error! Not Found</Heading>
            <Text>Hello, message from the Dev. The page you&apos;re looking for was not found. It&apos;s probably down or I have not updated the page yet. Anyways, Stan LOONA and SEVENTEEN</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/" passHref>
                    <Button colorScheme="cyan">Go back?</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound