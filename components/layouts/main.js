import { Box, Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Navbar from '../navbar'
import Footer from '../footer'
import MushroomLoader from '../mushroom-loader'

const LazyMushroom = dynamic(() => import('../mushroom'), {
    ssr: false,
    loading: () => <MushroomLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as= "main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Paulo's homepage" />
                <meta name="author" content="Paulo Tumabing" />
                <meta name="author" content="Shroomy" />
                <link rel="apple-touch-icon" href="logol.png" />
                <link rel="shortcut icon" href="/logol.png" type="image/x-icon" />
                <title>Shroomy/Lucete - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />
        
            <Container maxW="container.md" pt={14}>
                <LazyMushroom />
                
                {children}

                <Footer />
            </Container>
        </Box>
    )
}

export default Main