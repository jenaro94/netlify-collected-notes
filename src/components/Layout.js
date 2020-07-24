import React from "react"
import { Link } from "gatsby"
import "./layout.css"

function Layout({ children, pathname, previous, next }) {
  return (
    <>
      {pathname !== "/" && (
        <header>
          <Link to={pathname.includes("/blog/") ? "/blog" : "/"}>
            &larr; back
          </Link>
        </header>
      )}
      <main>{children}</main>
      {pathname !== "/" && (
        <footer>
          {previous && (
            <Link to={previous.href} className="previous">
              {previous.title}
            </Link>
          )}
          {next && (
            <Link to={next.href} className="next">
              {next.title}
            </Link>
          )}
        </footer>
      )}
    </>
  )
}

export default Layout
