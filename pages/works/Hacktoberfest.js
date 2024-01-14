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
    <Layout title="Hacktoberfest">
      <Container>
        <Title>
        Hacktoberfest <Badge>2023</Badge>
        </Title>
        <P>
        Hacktoberfest is DigitalOcean’s annual event that encourages people to contribute to open source throughout October. Much of modern tech infrastructure—including some of DigitalOcean’s own products—relies on open-source projects built and maintained by passionate people who often don’t have the staff or budgets to do much more than keep the project alive. Hacktoberfest is all about giving back to those projects, sharpening skills, and celebrating all things open source, especially the people that make open source so special.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/veldanava/hacktoberfest">
            Hacktoberfest<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Cross platform</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Everything</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Preview</Center>
        </Heading>
  
        <WorkImage src="https://i.pinimg.com/736x/19/ba/5a/19ba5aab9952eb580128fafd49a37acb.jpg" alt="hack" />
      </Container>
    </Layout>
  )
  
  export default Projects
  export { getServerSideProps } from '../../components/chakra'
  