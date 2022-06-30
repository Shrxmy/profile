import { Box, Link } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="xs">
            &copy; {new Date().getFullYear()} Shroomy/Lucete. All rights reserved. 
        </Box> 

    )
}

export default Footer