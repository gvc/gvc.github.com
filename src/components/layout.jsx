import React from "react"

import { Link } from 'gatsby'

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <div>
            <span>Guilherme Carvalho</span>
          </div>
          <div>
              <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
          </div>
          <div>
            &nbsp;
          </div>
        </nav>
      </header>

      <main>
        {children}
      </main>
    </>
  )
}
