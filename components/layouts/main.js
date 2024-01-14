import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Dimitri" />
        <meta name="author" content="Kaleidoscope" />
        <link rel="apple-touch-icon" href="https://cdn2.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-7/24/2199-256.png" />
        <link rel="shortcut icon" href="https://cdn2.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-7/24/2199-256.png" type="image/x-icon" />
        <title>Kaleidoscope</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
