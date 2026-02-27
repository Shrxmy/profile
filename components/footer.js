import { Box, Divider, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box mt={8}>
            <Divider
                borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
                mb={4}
            />
            <Box
                align="center"
                opacity={0.5}
                fontSize="sm"
                fontWeight="300"
                letterSpacing="0.02em"
                pb={4}
            >
                &copy; {new Date().getFullYear()} Shroomy/Lucete. All rights reserved. • v2.0
            </Box>
        </Box>
    )
}

export default Footer;