import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                width={720}
                height={400}
                loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" align="center">
        <NextLink href={`/works/${id}`} passHref>
            <LinkBox
                cursor="pointer"
                transition="all 0.3s ease"
                _hover={{
                    transform: 'translateY(-4px)',
                }}
            >
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    width={720}
                    height={400}
                />
                <LinkOverlay href={`/works/${id}`}>
                    <Text mt={2} fontSize={20} fontWeight="600">
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={13} opacity={0.75}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
            width: 100%;
            aspect-ratio: 16 / 9;
            object-fit: cover;
            transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .grid-item-thumbnail:hover {
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
    `} />
)