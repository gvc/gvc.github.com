import * as React from "react"
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const CurrentlyReading = ({ current }) => {
  if (current) {
    return (
      <p className="mb-2">
        Currently reading: <strong className="text-green-600 bg-gray-200" dangerouslySetInnerHTML={{ __html: current.title }} />
      </p>
    )
  }

  return <hr />
}

// markup
const IndexPage = ({ data }) => {
  const [currentlyReading] = data.allBooksYaml.nodes
  return (
    <Layout>
        <p className="mb-2">
          Hello, I'm Guilherme Carvalho, co-founder of <a href='http://www.guava.com.br'>Guava</a>, a Ruby/Rails development studio.
          <br />
          Computer Science graduate from UFPE (Universidade Federal de Pernambuco).
          <br />
          Master's degree on ensemble methods for machine learning from UFPE.
        </p>
        <CurrentlyReading current={currentlyReading} />
        <p className="flex space-x-2">
          <Link className="underline text-blue-600 hover:bg-blue-600 hover:text-white" to="/books">Books</Link>
          <a className="underline text-blue-600 hover:bg-blue-600 hover:text-white" href='http://github.com/gvc'>Github</a>
          <a className="underline text-blue-600 hover:bg-blue-600 hover:text-white" href='http://twitter.com/guieevc'>Twitter</a>
        </p>
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
