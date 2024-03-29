import NextLink from 'next/link';
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';

export const Title = ({ children }) => (
    <Box>
        <NextLink href="/works" passHref>
            <Link>Projects & Links</Link>
        </NextLink>
        <span>
        {' '}
            <ChevronRightIcon />{' '}
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const WorkImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
    <Badge colorScheme="teal" mr={2}>
        {children}
    </Badge>
)


export const TwtTitle = ({ children }) => (
    <Box>
        <NextLink href="/" passHref>
            <Link>Home</Link>
        </NextLink>
        <span>
        {' '}
            <ChevronRightIcon />{' '}
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)
