import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

// markup
const BooksPage = ({data}) => {
  console.log(data.allBooksYaml.edges)
  const booksRead = data.allBooksYaml.edges.map((edge) => edge.node);
  return (
    <Layout>
      <main>
        <h1>Books read</h1>
        {booksRead.map((book) => book.title)}

      </main>
    </Layout>
  )
}

export const query = graphql`
    query BooksRead {
    allBooksYaml(sort: {fields: date_read, order: ASC}) {
        edges {
        node {
            author
            date_read
            title
            review
            note
        }
        }
    }
    }
`

export default BooksPage
