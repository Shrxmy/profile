import NextLink from 'next/link'
import {
    Box,
    Button,
    Container,
    Heading,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import Section from '../../components/sections'
import { getTeaPost, teaPosts } from '../../lib/tea-posts'

const CodeWindow = ({ block }) => (
    <Box
        bg="#06060a"
        color="rgba(252,253,255,0.86)"
        border="1px solid rgba(255,255,255,0.14)"
        borderRadius="lg"
        overflow="hidden"
        my={2}
    >
        <Box
            display="flex"
            alignItems="center"
            gap={2}
            px={4}
            py={3}
            borderBottom="1px solid rgba(255,255,255,0.06)"
        >
            <Box w="10px" h="10px" borderRadius="full" bg="#ff2047" />
            <Box w="10px" h="10px" borderRadius="full" bg="#ffc53d" />
            <Box w="10px" h="10px" borderRadius="full" bg="#11ff99" />
            <Text
                as="span"
                ml={3}
                color="rgba(252,253,255,0.7)"
                fontFamily="'Inter', sans-serif"
                fontSize="xs"
            >
                {block.filename}
            </Text>
        </Box>

        <Box as="pre" m={0} p={4} overflowX="auto">
            <Box
                as="code"
                fontFamily="'Geist Mono', 'SFMono-Regular', Consolas, monospace"
                fontSize="13px"
                lineHeight="1.6"
                whiteSpace="pre"
            >
                {block.code.replace(/\\n/g, '\n')}
            </Box>
        </Box>
    </Box>
)

const TeaPost = ({ post }) => {
    const mutedText = useColorModeValue('gray.600', 'whiteAlpha.700')
    const dateText = useColorModeValue('gray.500', 'whiteAlpha.600')
    return (
        <Layout title={post.title}>
            <Container>
                <Section delay={0.05}>
                    <Box pt={[8, 10]} pb={2}>
                        <NextLink href="/tea-room" passHref>
                            <Button
                                as="a"
                                leftIcon={<ChevronLeftIcon />}
                                colorScheme="teal"
                                variant="ghost"
                                size="sm"
                                mb={6}
                                px={0}
                                _hover={{ bg: 'transparent', textDecoration: 'underline' }}
                            >
                                Tea Room
                            </Button>
                        </NextLink>

                        <Text color={dateText} fontSize="sm" mb={3}>
                            {post.date} · {post.readingTime}
                        </Text>

                        <Heading as="h2" fontSize={[28, 32, 36]} letterSpacing="-0.03em" mb={4}>
                            {post.title}
                        </Heading>

                        <Text color={mutedText} fontSize="md" lineHeight="1.8">
                            {post.excerpt}
                        </Text>
                    </Box>
                </Section>

                <Section delay={0.12}>
                    <Stack spacing={5}>
                        {post.content.map(block => {
                            if (block.type === 'code') {
                                return <CodeWindow key={block.code} block={block} />
                            }

                            if (block.type === 'heading') {
                                return (
                                    <Heading key={block.text} as="h3" fontSize="xl" mt={3}>
                                        {block.text}
                                    </Heading>
                                )
                            }

                            return (
                                <Text key={block.text} lineHeight="1.9" color={mutedText}>
                                    {block.text}
                                </Text>
                            )
                        })}
                    </Stack>
                </Section>

                <Section delay={0.18}>
                    <Box mt={4} align="center">
                        <NextLink href="/tea-room" passHref>
                            <Button as="a" bg="teal" color="white" size="sm">
                                Return to Tea Room
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export const getStaticPaths = async () => ({
    paths: teaPosts.map(post => ({ params: { slug: post.slug } })),
    fallback: false
})

export const getStaticProps = async ({ params }) => ({
    props: {
        post: getTeaPost(params.slug)
    }
})

export default TeaPost
