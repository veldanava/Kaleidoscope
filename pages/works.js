import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import zeta from '../public/images/works/4.png'
import enigma from '../public/images/works/1.jpg'
import crud from '../public/images/works/3.jpg'
import thumbHandGesture from '../public/images/works/2.jpg'
import coin from '../public/images/works/5.jpg'

const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="AiWaifu" title="AiWaifu" thumbnail={zeta}>
           your personal smart waifu assistant
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="Enigma"
            title="Enigma"
            thumbnail={enigma}
          >
            implementation Engima Machine as Python Code
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="Hacktoberfest"
            title="Hacktoberfest"
            thumbnail={coin}
          >
            Make your first Pull Request and let's celebrate the HacktoberFest 2023 event!!! 
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="Deauth"
            title="Deauth"
            thumbnail={crud}
          >
            Area Network Deauther
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
