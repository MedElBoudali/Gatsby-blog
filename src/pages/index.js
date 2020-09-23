import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Section = styled.section`
  width: 100%;
  min-height: 100%;
  text-align: left;
`
const BlogContainer = styled.div`
  margin: 10px 0 50px 0;
`
const BlogTitle = styled(Link)`
  color: #595959;
  width: fit-content;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  text-decoration: none;
  display: block;
`

const BlogSubtitle = styled.span`
  font-size: 0.8rem;
  color: darkGray;
  margin: 0 0 10px 0;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
`

const Svg = styled.svg`
  margin: 0 3px 0 10px;
  fill: none;
  width: 15px;
  height: 15px;
  stroke: darkGray;
  stroke-width: 1.5;
  stroke-linecap: round;
`

const Thumbnail = styled.div`
  margin: 0 2%;
  width: 96%;
  height: 250px;
  background-image: ${({url}) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Excerpt = styled.p`
  margin: 0 2%;
  width: 96%;
  font-size: 0.7rem;
  font-weight: bold;
  text-align: justify;
  text-justify: inter-word;
`

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Section>
      {/* Posts */}
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogContainer key={node.id}>
          {/* Title */}
          <BlogTitle to={node.fields.slug}>{node.frontmatter.title}</BlogTitle>
          {/* Data & time to read */}
          <BlogSubtitle>
            {node.frontmatter.date}
            <Svg viewBox="0 0 24 24">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 15" />
            </Svg>
            {node.timeToRead} min.
          </BlogSubtitle>
          {/* Thumbnail */}
          <Thumbnail url={node.frontmatter.thumbnail} />
          {/* Excerpt */}
          <Excerpt>{node.excerpt}</Excerpt>
        </BlogContainer>
      ))}
      {/* <h6>Total blogs: {data.allMarkdownRemark.totalCount}</h6>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Section>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            description
            thumbnail
            date
          }
          html
          excerpt
          timeToRead
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`
