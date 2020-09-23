import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Thumbnail = styled.img`
  width: 100%;
`

export default ({ data }) => {
  const {
    html,
    frontmatter: { title, thumbnail },
  } = data.markdownRemark
  return (
    <Layout>
      <SEO title={title} />
      <div>{title}</div>
      <Thumbnail src={thumbnail} alt="thumbnail" loading="lazy" />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnail
      }
    }
  }
`
