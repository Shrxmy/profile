import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => (
    <Box as="main" minH="100vh" pb={8}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
                name="description"
                content="Paulo Tumabing — software developer, student, and writer."
            />
            <meta name="author" content="Paulo Tumabing" />
            <link rel="apple-touch-icon" href="/logol.png" />
            <link rel="shortcut icon" href="/logol.png" type="image/x-icon" />
            <title>Paulo Tumabing — Shroomy / Lucete</title>
        </Head>

        <Navbar path={router.asPath} />

        <Container maxW="container.lg" pt={[20, 24]} px={[4, 6, 8]}>
            {children}
            <Footer />
        </Container>
    </Box>
)

export default Main
