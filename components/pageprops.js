import NextLink from 'next/link'
import { Heading, Box, Image, Link, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
    <Box mb={8}>
        <NextLink href="/works" passHref>
            <Link fontSize="sm" fontWeight="600">
                Projects
            </Link>
        </NextLink>
        <ChevronRightIcon mx={2} verticalAlign="middle" color="tea.500" />
        <Heading
            display="inline"
            as="h1"
            fontSize={['3xl', '4xl']}
            letterSpacing="-0.03em"
            verticalAlign="middle"
        >
            {children}
        </Heading>
    </Box>
)

export const WorkImage = ({ src, alt }) => (
    <Image borderRadius="sm" w="full" src={src} alt={alt} mb={6} />
)

export const Meta = ({ children }) => (
    <Box
        as="span"
        color={useColorModeValue('tea.700', 'tea.300')}
        fontWeight="700"
        fontSize="xs"
        letterSpacing="0.06em"
        textTransform="uppercase"
        mr={2}
    >
        {children}
    </Box>
)

export const TwtTitle = ({ children }) => (
    <Box>
        <NextLink href="/" passHref>
            <Link>Home</Link>
        </NextLink>
        <ChevronRightIcon mx={2} verticalAlign="middle" />
        <Heading display="inline" as="h1" fontSize="3xl">
            {children}
        </Heading>
    </Box>
)
