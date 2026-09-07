import NextLink from 'next/link'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
    Box,
    Button,
    Container,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/sections'
import { getTeaPost, teaPosts } from '../../lib/tea-posts'
import { FiArrowUpRight } from 'react-icons/fi'

const CodeWindow = ({ block }) => (
    <Box
        bg="#25231f"
        color="rgba(252, 249, 241, 0.88)"
        border="1px solid"
        borderColor="whiteAlpha.300"
        borderRadius="sm"
        overflow="hidden"
        my={2}
    >
        <Box
            display="flex"
            alignItems="center"
            gap={2}
            px={4}
            py={3}
            borderBottom="1px solid"
            borderColor="whiteAlpha.200"
        >
            <Box w="8px" h="8px" borderRadius="full" bg="teal.500" />
            <Box w="8px" h="8px" borderRadius="full" bg="#d1a34a" />
            <Box w="8px" h="8px" borderRadius="full" bg="tea.300" />
            <Text ml={3} color="whiteAlpha.700" fontFamily="mono" fontSize="xs">
                {block.filename}
            </Text>
        </Box>
        <Box as="pre" m={0} p={5} overflowX="auto">
            <Box
                as="code"
                fontFamily="mono"
                fontSize="13px"
                lineHeight="1.7"
                whiteSpace="pre"
            >
                {block.code.replace(/\\n/g, '\n')}
            </Box>
        </Box>
    </Box>
)

const TeaPost = ({ post }) => {
    const mutedText = useColorModeValue('ink.500', 'whiteAlpha.700')
    const dateText = useColorModeValue('gray.600', 'whiteAlpha.600')

    return (
        <Layout title={post.title}>
            <Container maxW="none" px={0}>
                <Section delay={0.05}>
                    <NextLink href="/tea-room" passHref>
                        <Button
                            as="a"
                            leftIcon={<ChevronLeftIcon />}
                            variant="ghost"
                            size="sm"
                            mb={7}
                            px={0}
                            color="tea.700"
                            _hover={{ bg: 'transparent', textDecoration: 'underline' }}
                        >
                            Tea Room
                        </Button>
                    </NextLink>

                    <Text color={dateText} fontSize="sm" fontFamily="mono" mb={4}>
                        {post.date} · {post.readingTime}
                    </Text>
                    <Heading as="h1" fontSize={['3xl', '5xl']} letterSpacing="-0.04em" maxW="850px">
                        {post.title}
                    </Heading>
                    <Text color={mutedText} fontSize="lg" lineHeight="1.85" mt={5} maxW="720px">
                        {post.excerpt}
                    </Text>
                </Section>

                <Section delay={0.12}>
                    <Stack spacing={6} maxW="760px">
                        {post.content.map((block, index) => {
                            if (block.type === 'code') {
                                return <CodeWindow key={`${block.filename}-${index}`} block={block} />
                            }

                            if (block.type === 'heading') {
                                return (
                                    <Heading key={`${block.text}-${index}`} as="h2" fontSize="2xl" mt={4}>
                                        {block.text}
                                    </Heading>
                                )
                            }

                            return (
                                <Text key={`${block.text.slice(0, 24)}-${index}`} lineHeight="1.95" color={mutedText}>
                                    {block.text}
                                </Text>
                            )
                        })}
                    </Stack>
                </Section>

                <Section delay={0.18}>
                    <NextLink href="/tea-room" passHref>
                        <Link display="inline-flex" alignItems="center" fontWeight="700">
                            More from the Tea Room <FiArrowUpRight />
                        </Link>
                    </NextLink>
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
