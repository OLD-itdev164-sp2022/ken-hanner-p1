import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD MMMM, YYYY")
      featuredImage {
        file {
            url
        }
      }
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
      <SEO title={props.data.contentfulBlogPost.title} />
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </span>

        {props.data.contentfulBlogPost.featuredImage && (
          <GatsbyImage
            className="featured"
            image={props.data.contentfulBlogPost.featuredImage.file.url}
            alt={props.data.contentfulBlogPost.title}
          />
        )}

        {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
      </div>
    </Layout>
  )
}

export default BlogPost
