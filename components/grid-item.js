import NextLink from 'next/link'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import { Box, Flex, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                width={720}
                height={400}
                loading="lazy"
            />
            <LinkOverlay href={href} target="_blank" rel="noreferrer">
                <Text mt={3} fontFamily="heading" fontSize="xl">
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize="sm" color="ink.500" mt={1} lineHeight="1.7">
                {children}
            </Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%">
        <NextLink href={`/works/${id}`} passHref>
            <LinkBox
                cursor="pointer"
                transition="transform 0.25s ease"
                _hover={{ transform: 'translateY(-4px)' }}
            >
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    width={720}
                    height={400}
                />
                <LinkOverlay href={`/works/${id}`}>
                    <Flex align="center" justify="space-between" mt={3}>
                        <Text fontFamily="heading" fontSize="xl" color="inherit">
                            {title}
                        </Text>
                        <FiArrowUpRight aria-hidden="true" />
                    </Flex>
                </LinkOverlay>
                <Text fontSize="sm" color="ink.500" lineHeight="1.6">
                    {children}
                </Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
        .grid-item-thumbnail {
            border-radius: 4px;
            width: 100%;
            aspect-ratio: 16 / 9;
            object-fit: cover;
            transition: filter 0.3s ease, transform 0.3s ease;
        }
        .grid-item-thumbnail:hover {
            filter: saturate(1.08) contrast(1.02);
        }
    `}
    />
)
