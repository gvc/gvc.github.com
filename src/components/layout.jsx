import React from "react"

export default function Layout({ children }) {
  return (
    <>
      <main className="md:container mx-auto mt-8 text-lg">
        {children}
      </main>
    </>
  )
}
