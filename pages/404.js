import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
// show 404 panel if error
const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">404 Error</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Return to homepage</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
