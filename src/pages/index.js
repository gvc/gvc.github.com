import * as React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const CurrentlyReading = ({ current }) => {
  if (current) {
    const innerHTML = {__html: `Currently reading <strong>${current.title}</strong>`}
    return <p dangerouslySetInnerHTML={innerHTML} />
  }

  return <hr />
}

// markup
const IndexPage = ({ data }) => {
  const [currentlyReading] = data.allBooksYaml.nodes
  return (
    <Layout>
      <main>

        <p>
          Co-founder of <a id="guava" href='http://www.guava.com.br'>Guava</a>, a Ruby/Rails development studio.
          Computer Science graduate from UFPE (Universidade Federal de Pernambuco).
          Master's degree on ensemble methods for machine learning from UFPE. Generally a nice guy.
        </p>
        <CurrentlyReading current={currentlyReading} />
        <p>
          <a href='http://github.com/gvc'></a>
          <a href='http://twitter.com/guieevc'></a>
        </p>
      </main>
    </Layout>
  )
}

export const query = graphql`
query ReadingBookQuery {
  allBooksYaml(limit: 1, filter: {date_read: {eq: ""}}) {
    nodes {
      title
    }
  }
}
`
export default IndexPage
