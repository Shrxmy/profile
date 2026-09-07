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
        color="tea.500"
    />
)

export const MushroomContainer = forwardRef(({ children }, ref) => (
    <Box
        ref={ref}
        className="mushroom"
        position="relative"
        m="auto"
        w={[240, 280, 320]}
        h={[240, 280, 320]}
    >
        {children}
    </Box>
))

const Loader = () => (
    <MushroomContainer>
        <MushroomSpinner />
    </MushroomContainer>
)

export default Loader
