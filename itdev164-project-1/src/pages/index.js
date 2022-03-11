import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome to this page.</h1>
    <p>This is a page.</p>
    <p>This is a line on a page.</p>
    
    <p>
      <Link to="/blog/">Visit the Blog Page</Link>
    </p>
  </Layout>
)

export default IndexPage
