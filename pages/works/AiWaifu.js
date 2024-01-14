import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Projects = () => (
  <Layout title="AiWaifu">
    <Container>
      <Title>
      AiWaifu <Badge>2023</Badge>
      </Title>
      <P>
      your personal smart waifu assistant
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/veldanava/AiWaifu">
          AiWaifu<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux maybe</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="https://i.pinimg.com/564x/44/ba/71/44ba712eb2bb0d791501a7066c3dccc5.jpg" alt="zeta" />
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
