import { motion, useReducedMotion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const Section = ({ children, delay = 0 }) => {
    const shouldReduceMotion = useReducedMotion()

    return (
        <StyledDiv
            initial={shouldReduceMotion ? { opacity: 0 } : { y: 16, opacity: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.45, delay }}
            mb={6}
        >
            {children}
        </StyledDiv>
    )
}

export default Section