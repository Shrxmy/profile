/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const MushroomSpinner = () => (
    <Spinner
        size="xl"
        position="absolute"
        left="50%"
        top="50%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
    />
)

export const MushroomContainer = forwardRef(({ children }, ref) => (
    <Box
        ref={ref}
        className="mushroom"
        m="auto"
        mt={['-20px', '-60px', '-120px']}
        mb={['-40px', '-140px', '-200px']}
        w={[280, 480, 640]}
        h={[280, 480, 640]}
    >
        {children}
    </Box>
))

const Loader = () => {
    return (
        <MushroomContainer>
            <MushroomSpinner />
        </MushroomContainer>
    )
}

export default Loader
