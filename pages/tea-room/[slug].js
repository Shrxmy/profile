import NextLink from 'next/link'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    usePrefersReducedMotion
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

const MediaBlock = ({ block }) => {
    const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.300')
    const chromeBg = useColorModeValue('rgba(255, 255, 255, 0.28)', '#25231f')
    const captionColor = useColorModeValue('gray.600', 'whiteAlpha.600')
    const prefersReducedMotion = usePrefersReducedMotion()

    return (
        <Box as="figure" my={2}>
            <Box border="1px solid" borderColor={borderColor} borderRadius="sm" overflow="hidden">
                {block.label && (
                    <Box display="flex" alignItems="center" gap={3} bg={chromeBg} px={4} py={3}>
                        <Box w="7px" h="7px" borderRadius="full" bg="tea.300" />
                        <Text color={captionColor} fontFamily="mono" fontSize="xs">
                            {block.label}
                        </Text>
                    </Box>
                )}
                {block.kind === 'video' ? (
                    <Box
                        as="video"
                        src={block.src}
                        poster={block.poster}
                        aria-label={block.alt}
                        w="full"
                        display="block"
                        bg="#000"
                        autoPlay={!prefersReducedMotion}
                        controls
                        loop
                        muted
                        playsInline
                        preload="metadata"
                    />
                ) : (
                    <Image src={block.src} alt={block.alt} w="full" loading="lazy" />
                )}
            </Box>
            {block.caption && (
                <Text as="figcaption" color={captionColor} fontSize="xs" lineHeight="1.6" mt={2}>
                    {block.caption}
                </Text>
            )}
        </Box>
    )
}

const HandoffVisual = () => {
    const surface = useColorModeValue('rgba(255, 255, 255, 0.24)', '#25231f')
    const border = useColorModeValue('rgba(32, 32, 35, 0.18)', 'rgba(240, 231, 219, 0.2)')
    const text = useColorModeValue('#202023', '#f0e7db')
    const muted = useColorModeValue('#666666', 'rgba(240, 231, 219, 0.62)')
    const accent = useColorModeValue('#2c7a7b', '#88ccca')
    const connector = useColorModeValue('#b9ab99', '#4b4a47')
    const steps = [
        ['01', 'DS firmware', 'ARM7 + ARM9', 'reset vectors'],
        ['02', 'Slot-2 ROM', '0x08000000', 'cartridge visible'],
        ['03', 'HALTCNT', '0x04000301', 'write 0x40'],
        ['04', 'GBA core', '0x08000000', 'execution continues']
    ]

    return (
        <Box
            as="figure"
            bg={surface}
            borderY="1px solid"
            borderColor={border}
            px={[4, 6]}
            py={[5, 6]}
            my={2}
            overflow="hidden"
        >
            <Text color={accent} fontFamily="mono" fontSize="xs" letterSpacing="0.08em" textTransform="uppercase">
                transition trace
            </Text>
            <Heading as="h3" color={text} fontSize={['xl', '2xl']} mt={2}>
                One cartridge, two machine states
            </Heading>
            <Text color={muted} fontSize="sm" lineHeight="1.7" mt={2} maxW="620px">
                The ROM address remains familiar. What changes is the core that owns execution.
            </Text>

            <SimpleGrid columns={[1, 4]} spacing={[3, 4]} mt={6}>
                {steps.map(([number, title, address, detail], index) => (
                    <Box
                        key={number}
                        position="relative"
                        minH={['auto', '142px']}
                        border="1px solid"
                        borderColor={border}
                        px={4}
                        py={4}
                        _after={index < steps.length - 1 ? {
                            content: '"→"',
                            display: ['none', 'block'],
                            position: 'absolute',
                            right: '-15px',
                            top: '57px',
                            color: connector,
                            fontSize: '18px',
                            zIndex: 1
                        } : undefined}
                    >
                        <Box
                            className="handoff-step"
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            w="28px"
                            h="28px"
                            borderRadius="full"
                            border="1px solid"
                            borderColor={accent}
                            color={accent}
                            fontFamily="mono"
                            fontSize="10px"
                            sx={{ animationDelay: `${index * 1.25}s` }}
                        >
                            {number}
                        </Box>
                        <Text color={text} fontFamily="heading" fontWeight="700" mt={3}>
                            {title}
                        </Text>
                        <Text color={accent} fontFamily="mono" fontSize="11px" mt={1} whiteSpace="nowrap">
                            {address}
                        </Text>
                        <Text color={muted} fontSize="xs" mt={1}>
                            {detail}
                        </Text>
                    </Box>
                ))}
            </SimpleGrid>

            <Box position="relative" h="2px" bg={connector} mt={5} overflow="hidden">
                <Box className="handoff-signal" position="absolute" insetY={0} w="24%" bg={accent} />
            </Box>
            <Text as="figcaption" color={muted} fontSize="xs" lineHeight="1.6" mt={3}>
                Firmware boot → Slot-2 mapping → HALTCNT request → runtime-owned GBA execution
            </Text>

            <style jsx global>{`
                @keyframes handoff-step-pulse {
                    0%, 14%, 100% { background: transparent; color: ${accent}; transform: scale(1); }
                    6% { background: ${accent}; color: ${surface}; transform: scale(1.08); }
                }
                @keyframes handoff-signal-flow {
                    from { transform: translateX(-105%); }
                    to { transform: translateX(425%); }
                }
                .handoff-step {
                    animation: handoff-step-pulse 5s ease-in-out infinite;
                }
                .handoff-signal {
                    animation: handoff-signal-flow 5s cubic-bezier(0.45, 0, 0.25, 1) infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                    .handoff-step, .handoff-signal { animation: none !important; }
                }
            `}</style>
        </Box>
    )
}

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

                            if (block.type === 'media') {
                                return <MediaBlock key={`${block.src}-${index}`} block={block} />
                            }

                            if (block.type === 'handoff') {
                                return <HandoffVisual key={`handoff-${index}`} />
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
