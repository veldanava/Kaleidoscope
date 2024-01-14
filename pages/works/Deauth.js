import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Berrlium Deauth">
    <Container>
      <Title>
        Berrylium Deauther <Badge>2023</Badge>
      </Title>
      <P>
      Area Network Deauther
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/veldanava/Berrlium-Deauth">
          Deauther<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows / Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>
      <WorkImage src="https://i.pinimg.com/564x/6a/d0/dc/6ad0dc6e68dcdd5b6427d78ec33a8f80.jpg" alt="deauth" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
