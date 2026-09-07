import NextLink from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/sections'
import { teaPosts } from '../lib/tea-posts'

const TeaRoom = () => {
    const mutedText = useColorModeValue('ink.500', 'whiteAlpha.700')
    const dateText = useColorModeValue('gray.600', 'whiteAlpha.600')
    const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
    const pageNoteBg = useColorModeValue('paper.100', 'whiteAlpha.100')

    return (
        <Layout title="Tea Room">
            <Container maxW="none" px={0}>
                <Section delay={0.05} mb={[6, 8]}>
                    <Heading as="h1" fontSize={['3xl', '4xl']} letterSpacing="-0.02em" mt={2}>
                        Tea Room
                    </Heading>
                    <Text color={mutedText} lineHeight="1.7" mt={3} maxW="680px">
                        A quiet corner for short thoughts on programming, school projects, web
                        development, game ideas, and the lessons that stay after building.
                    </Text>
                </Section>

                <Section delay={0.12} mb={[6, 8]}>
                    <Flex justify="space-between" align="end" mb={3}>
                        <Heading as="h2" variant="section-title" mb={0}>
                            Recent notes
                        </Heading>
                        <Text display={{ base: 'none', md: 'block' }} color={mutedText} fontSize="sm">
                            {teaPosts.length} {teaPosts.length === 1 ? 'entry' : 'entries'}
                        </Text>
                    </Flex>
                    <Stack spacing={0} borderTop="1px solid" borderColor={borderColor}>
                        {teaPosts.map(post => (
                            <NextLink key={post.slug} href={`/tea-room/${post.slug}`} passHref>
                                <Link
                                    display="block"
                                    py={4}
                                    borderBottom="1px solid"
                                    borderColor={borderColor}
                                    color="inherit"
                                    _hover={{
                                        textDecoration: 'none',
                                        color: 'teal.500'
                                    }}
                                >
                                    <SimpleGrid columns={{ base: 1, md: '120px 1fr auto' }} gap={[1, 1, 5]} alignItems="start">
                                        <Text color={dateText} fontSize="sm" fontFamily="mono">
                                            {post.date}
                                        </Text>
                                        <Box>
                                            <Heading as="h3" fontSize={['lg', 'xl']}>
                                                {post.title}
                                            </Heading>
                                            <Text color={mutedText} fontSize="sm" lineHeight="1.65" mt={2} maxW="700px">
                                                {post.excerpt}
                                            </Text>
                                            <Text color={dateText} fontSize="xs" mt={2} letterSpacing="0.05em">
                                                {post.readingTime}
                                            </Text>
                                        </Box>
                                        <Box as={FiArrowUpRight} display={{ base: 'none', md: 'block' }} mt={1} fontSize="xl" />
                                    </SimpleGrid>
                                </Link>
                            </NextLink>
                        ))}
                    </Stack>
                </Section>

                <Section delay={0.18} mb={0}>
                    <Box mt={1} p={[4, 5]} bg={pageNoteBg}>
                        <Text color={mutedText} lineHeight="1.65" maxW="650px">
                            I will add more only when there is something useful to say, so this page
                            stays clean instead of filled with placeholders.
                        </Text>
                        <NextLink href="/" passHref>
                            <Button
                                as="a"
                                mt={3}
                                variant="outline"
                                borderColor="tea.500"
                                color="tea.700"
                                size="sm"
                                rightIcon={<FiArrowUpRight />}
                                borderRadius="full"
                            >
                                Return home
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default TeaRoom
