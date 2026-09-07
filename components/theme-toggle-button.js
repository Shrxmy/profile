import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { TbMoon2, TbSun } from 'react-icons/tb'

const ThemeToggleButton = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const icon = useColorModeValue(<TbMoon2 />, <TbSun />)
    const label = colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'

    return (
        <IconButton
            aria-label={label}
            icon={icon}
            variant="ghost"
            size="sm"
            borderRadius="full"
            onClick={toggleColorMode}
            color={useColorModeValue('ink.700', 'paper.100')}
            _hover={{
                bg: useColorModeValue('blackAlpha.100', 'whiteAlpha.100'),
                color: useColorModeValue('tea.700', 'tea.300')
            }}
        />
    )
}

export default ThemeToggleButton
