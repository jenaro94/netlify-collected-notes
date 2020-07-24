import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function Home({ location }) {
  return (
    <Layout pathname={location.pathname}>
      <SEO title="Home" />
      <h1>Gatsby + Collected Notes</h1>
      <Link to="/blog">Check the blog</Link>
    </Layout>
  )
}
