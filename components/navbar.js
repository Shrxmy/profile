import NextLink from 'next/link'
import {
    Box,
    Container,
    Flex,
    Heading,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const textColor = useColorModeValue('ink.700', 'paper.100')
    const activeColor = useColorModeValue('tea.700', 'tea.300')

    return (
        <NextLink href={href} passHref>
            <Link
                px={1}
                py={2}
                target={target}
                color={active ? activeColor : textColor}
                borderBottom="1px solid"
                borderColor={active ? activeColor : 'transparent'}
                fontSize="sm"
                fontWeight={active ? 700 : 500}
                letterSpacing="0.02em"
                _hover={{
                    color: activeColor,
                    textDecoration: 'none',
                    borderColor: activeColor
                }}
                transition="all 0.2s ease"
                aria-current={active ? 'page' : undefined}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = ({ path, ...props }) => {
    const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
    const background = useColorModeValue('rgba(251, 248, 242, 0.86)', 'rgba(37, 35, 31, 0.86)')

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={background}
            css={{ backdropFilter: 'blur(16px)' }}
            zIndex={2}
            borderBottom="1px solid"
            borderColor={borderColor}
            {...props}
        >
            <Container
                display="flex"
                px={[4, 6, 8]}
                py={3}
                maxW="container.lg"
                align="center"
                justify="space-between"
            >
                <Flex align="center">
                    <Heading as="h1" size="md" letterSpacing="-0.02em">
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction="row"
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="center"
                    spacing={6}
                    ml="auto"
                    mr={5}
                >
                    <LinkItem href="/" path={path}>
                        About
                    </LinkItem>
                    <LinkItem href="/works" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem href="/tea-room" path={path}>
                        Tea Room
                    </LinkItem>
                </Stack>

                <Flex align="center" gap={1} ml="auto">
                    <ThemeToggleButton />

                    <Box display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu" placement="bottom-end">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="ghost"
                                borderRadius="full"
                                aria-label="Open navigation menu"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>
                                <NextLink href="/tea-room" passHref>
                                    <MenuItem as={Link}>Tea Room</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar
