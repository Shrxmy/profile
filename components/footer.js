import { Box, Divider, Flex, Text, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
    const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
    const muted = useColorModeValue('gray.600', 'whiteAlpha.600')

    return (
        <Box mt={[12, 20]}>
            <Divider borderColor={borderColor} mb={4} />
            <Flex
                direction={['column', 'row']}
                justify="space-between"
                gap={2}
                fontSize="xs"
                color={muted}
                letterSpacing="0.04em"
                pb={6}
            >
                <Text>© {new Date().getFullYear()} Paulo Tumabing</Text>
                <Text>Built with care · Shroomy / Lucete</Text>
            </Flex>
        </Box>
    )
}

export default Footer
