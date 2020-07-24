import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../../components/SEO"
import Layout from "../../components/Layout"

function Blog({ location }) {
  const data = useStaticQuery(graphql`
    query AllNotes {
      allCollectedNote {
        nodes {
          path
          title
        }
      }
    }
  `)

  const notes = data.allCollectedNote

  return (
    <Layout pathname={location.pathname}>
      <SEO
        description="Here I write about stuff I learn"
        title="My Blog!"
        bodyClass="post"
      />
      <ul>
        {notes &&
          notes.nodes &&
          notes.nodes.map(note => (
            <li key={note.path}>
              <p>
                {note.title} |{" "}
                <Link to={`/blog/${note.path}`}>Read more &rarr;</Link>
              </p>
            </li>
          ))}
      </ul>
    </Layout>
  )
}

export default Blog
