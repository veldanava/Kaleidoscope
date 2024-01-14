import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Enigma">
    <Container>
      <Title>
        Enigma Machine <Badge>2023</Badge>
      </Title>
      <P>
      The Enigma machine is a cipher device developed and used in the early- to mid-20th century to protect commercial, diplomatic, and military communication. It was employed extensively by Nazi Germany during World War II, in all branches of the German military. The Enigma machine was considered so secure that it was used to encipher the most top-secret messages.
      </P>
      <br></br>
      Implemented as Python code.
      <P>

      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/veldanava/enigma-machine">
          Enigma Machine <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRji8G5xYDI4ChyFtIRfQIC9T3EqAsGCtLPHw&usqp=CAU" alt="enigma" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
