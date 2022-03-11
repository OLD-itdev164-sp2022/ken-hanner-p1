import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = () => (
  <Layout>
    <Seo title="Blog" />
    <h1>Hi from the blog page</h1>
    <p>Welcome to the BLOG page.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
