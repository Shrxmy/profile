import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// Keep the site's original teal identity while giving the new layout a few
// semantic names for spacing and surfaces.
const colors = {
    glassTeal: '#88ccca',
    paper: {
        50: '#f0e7db',
        100: '#f0e7db',
        200: '#e2d5c5'
    },
    ink: {
        500: '#666666',
        700: '#333333',
        900: '#202023'
    },
    tea: {
        100: '#e6fffa',
        300: '#88ccca',
        500: '#319795',
        600: '#2c7a7b',
        700: '#285e61'
    }
}

const styles = {
    global: props => ({
        html: {
            scrollBehavior: 'smooth'
        },
        body: {
            bg: mode('#f0e7db', '#202023')(props),
            color: mode('#202023', '#f0e7db')(props),
            transition: 'background-color 0.3s ease, color 0.3s ease',
            fontFeatureSettings: '"kern" 1',
            WebkitFontSmoothing: 'antialiased'
        },
        '::selection': {
            background: mode('#88ccca', '#4c7775')(props),
            color: mode('#202023', '#f0e7db')(props)
        },
        '*:focus-visible': {
            outline: '3px solid #88ccca',
            outlineOffset: '3px'
        }
    })
}

const components = {
    Heading: {
        baseStyle: {
            fontFamily: 'heading',
            fontWeight: 700
        },
        variants: {
            'page-title': {
                fontSize: ['2xl', '3xl'],
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                fontWeight: 700
            },
            'section-title': {
                textDecoration: 'underline',
                fontFamily: 'heading',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#88ccca',
                textDecorationThickness: 1,
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
    },
    Button: {
        baseStyle: {
            fontFamily: 'body',
            fontWeight: 600,
            letterSpacing: '0.01em'
        }
    }
}

const fonts = {
    heading: "'Arsenal', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'Inter', sans-serif"
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

export default extendTheme({
    config,
    styles,
    components,
    colors,
    fonts
})
