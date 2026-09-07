import { Box, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
    display: flex;
    padding-top: 0.35em;
    padding-bottom: 0.35em;
    margin-bottom: 0.35em;
`

export const BioYear = ({ children }) => (
    <Box
        as="span"
        display="inline-block"
        minW={['90px', '110px']}
        mr={4}
        fontWeight="700"
        color={useColorModeValue('tea.700', 'tea.300')}
    >
        {children}
    </Box>
)
