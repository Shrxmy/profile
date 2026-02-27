import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from "./theme-toggle-button";

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.700', 'whiteAlpha.900')
    const hoverBgColor = useColorModeValue('teal.50', 'whiteAlpha.100')

    return (
        <NextLink href={href} passHref scroll={false}>
            <Link
                p={2}
                bg={active ? 'teal.500' : undefined}
                color={active ? '#ffffff' : inactiveColor}
                target={target}
                borderRadius='lg'
                fontWeight={active ? '600' : '400'}
                fontSize='sm'
                letterSpacing='0.02em'
                _hover={{
                    textDecoration: 'none',
                    bg: active ? 'teal.500' : hoverBgColor,
                    transform: 'translateY(-1px)',
                }}
                transition='all 0.2s ease'
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(16px)' }}
            zIndex={2}
            borderBottom="1px solid"
            borderColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            {...props}
        >

            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                    spacing={2}
                >
                    <LinkItem href="/works" path={path}>
                        Projects & Links
                    </LinkItem>
                    <LinkItem href="/tea-room" path={path}>
                        Tea Room
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />

                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Projects and Links</MenuItem>
                                </NextLink>
                                <NextLink href="/tea-room" passHref>
                                    <MenuItem as={Link}>Tea Room</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar