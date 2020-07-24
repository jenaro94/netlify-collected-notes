import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export const query = graphql`
  query NoteQuery($pagePath: String!) {
    collectedNote(path: { eq: $pagePath }) {
      body
      created_at
      curated
      headline
      id
      path
      poster
      site_id
      title
      updated_at
      url
      user_id
      visibility
    }
  }
`

const BlogPost = ({ data, location }) => {
  if (!data) return null

  const note = data.collectedNote
  return (
    <Layout pathname={location.pathname}>
      <SEO description={note.headline} title={note.title} bodyClass="post" />
      <ReactMarkdown source={note.body} />
    </Layout>
  )
}

export default BlogPost
