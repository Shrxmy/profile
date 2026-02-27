import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props),
            transition: 'background-color 0.3s ease'
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 2,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },

    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'Arsenal', sans-serif",
    body: "'Inter', sans-serif"
}

const colors = {
    glassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts
})

export default theme