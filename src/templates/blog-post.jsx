import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>{post.frontmatter.title}</div>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: string!) {
    markdonRemark(fields: { slug: { eq: $slug } })
  }
`
