import { TbMoon2 } from "react-icons/tb"
import { Icon, Switch, useColorMode, useColorModeValue } from "@chakra-ui/react";

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (  
        <Switch 
            p='2'
            aria-label="Toggle theme"
            colorScheme={useColorModeValue('orange', 'purple')}
            size= "lg"
            onChange={toggleColorMode}>
            <Icon as={TbMoon2} height='6'/>
        </Switch>
    )
}

export default ThemeToggleButton

{/* <AnimatePresence exitBeforeEnter initial={false}>
<motion.div
    style={{ display: 'inline-block' }}
    key={useColorModeValue('light', 'dark')}
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ opacity: 0 }}>


</motion.div>
</AnimatePresence> */}