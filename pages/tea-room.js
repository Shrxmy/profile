import NextLink from 'next/link'
import {
    Box,
    Button,
    Container,
    Heading,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/sections'
import { teaPosts } from '../lib/tea-posts'


const TeaRoom = () => {
    const pageNoteBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
    const itemHoverBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
    const mutedText = useColorModeValue('gray.600', 'whiteAlpha.700')
    const dateText = useColorModeValue('gray.500', 'whiteAlpha.600')

    return (
        <Layout title="Tea Room">
            <Container>
                <Section delay={0.05}>
                    <Box pt={[8, 10]} pb={2}>
                        <Heading as="h2" fontSize={[28, 32, 36]} letterSpacing="-0.03em" mb={3}>
                            Tea Room
                        </Heading>

                        <Text color={mutedText} fontSize="md" lineHeight="1.8">
                            A quiet corner for short thoughts on programming, school projects,
                            web development, game ideas, and the lessons that stay after building.
                        </Text>
                    </Box>
                </Section>

                <Section delay={0.12}>
                    <Stack spacing={1}>
                        {teaPosts.map(post => (
                            <NextLink key={post.slug} href={`/tea-room/${post.slug}`} passHref>
                                <Box
                                    as="a"
                                    display="block"
                                    px={[0, 3]}
                                    py={4}
                                    borderRadius="lg"
                                    transition="background-color 0.2s ease"
                                    _hover={{
                                        bg: itemHoverBg,
                                        textDecoration: 'none'
                                    }}
                                >
                                    <SimpleGrid columns={[1, 1, '120px 1fr']} gap={[2, 2, 5]}>
                                        <Text color={dateText} fontSize="sm">
                                            {post.date}
                                        </Text>

                                        <Box>
                                            <Heading as="h3" fontSize="lg" letterSpacing="-0.01em">
                                                {post.title}
                                            </Heading>

                                            <Text color={mutedText} fontSize="sm" lineHeight="1.7" mt={2}>
                                                {post.excerpt}
                                            </Text>

                                            <Text color={dateText} fontSize="xs" mt={2}>
                                                {post.readingTime}
                                            </Text>
                                        </Box>
                                    </SimpleGrid>
                                </Box>
                            </NextLink>
                        ))}
                    </Stack>
                </Section>

                <Section delay={0.18}>
                    <Box mt={2} p={5} borderRadius="xl" bg={pageNoteBg}>
                        <Text color={mutedText} lineHeight="1.8">
                            One post for now. I&apos;ll add more only when there is something useful to
                            say, so this page stays clean instead of filled with placeholders.
                        </Text>

                        <Box mt={5} align="center">
                            <NextLink href="/" passHref>
                                <Button
                                    as="a"
                                    bg="teal"
                                    color="white"
                                    size="sm"
                                    rightIcon={<ChevronRightIcon />}
                                >
                                    Return Home
                                </Button>
                            </NextLink>
                        </Box>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default TeaRoom
