import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
    padding-left: 3.4em;
    text-indent: -3.4em;
    padding-top: 0.3em;
    padding-bottom: 0.3em;
    border-left: 3px solid #38b2ac;
    padding-left: 1.2em;
    text-indent: 0;
    margin-bottom: 0.5em;
    border-radius: 0 6px 6px 0;
    transition: background 0.2s ease;

    &:hover {
        background: rgba(56, 178, 172, 0.08);
    }
`

export const BioYear = styled.span`
    font-weight: bold;
    margin-right: 1em;
    color: #38b2ac;
`