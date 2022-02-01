import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const BookRead = ({ book }) => {
  console.log(book)
  const isCurrentlyReading = book.date_read.match(/\d{4}-\d{2}-\d{2}/)

  if (!isCurrentlyReading) {
    return (
      <div className="flex mb-3">
        <h2 className="text-xl font-bold text-green-600 bg-gray-200" dangerouslySetInnerHTML={{ __html: book.title }} />
        <small className="text-xs">Currently reading</small>
      </div>
    )
  }

  return (
    <>
      <div className="flex space-x-2">
        <h2 className="text-xl font-bold" dangerouslySetInnerHTML={{ __html: book.title }} />
        <span className="text-purple-600 align-baseline">{book.review}</span>
      </div>
      <p className="mb-3">
        {book.notes}
        <br />
        <span>Read on: {book.date_read}</span>
      </p>
    </>
  )
}

const BooksPage = ({data}) => {
  const booksRead = data.allBooksYaml.edges.map((edge) => edge.node);
  
  return (
    <Layout>
        <h1 className="text-3xl">Books read</h1>
        <p className="mb-3">
          This is a list of books I've read since the beginning of 2022 along with
          my thoughts on each.
          <br />
          <Link className="underline text-blue-600 hover:bg-blue-600 hover:text-white" to="/">Go back</Link>
        </p>
        {booksRead.map((book, index) => <BookRead book={book} key={`index-${book.title}`} />)}
    </Layout>
  )
}

export const query = graphql`
  query BooksRead {
    allBooksYaml(sort: {fields: date_read, order: ASC}) {
      edges {
        node {
            author
            date_read(formatString: "YYYY-MM-DD")
            title
            review
            notes
        }
      }
    }
  }
`

export default BooksPage
