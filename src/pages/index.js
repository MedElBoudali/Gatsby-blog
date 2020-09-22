import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section
      style={{
        width: "100%",
        minHeight: "100%",
        textAlign: "left",
      }}
    >
      <h1 style={{ color: "gray", fontSize: "1.4rem" }}>
        This is my 1st Gatsby blog.
      </h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3 style={{ color: "#595959", fontSize: "1rem", textTransform: 'uppercase' }}>
            {node.frontmatter.title} -
            <span
              style={{
                marginLeft: "5px",
                fontSize: "0.8rem",
                color: "darkGray",
              }}
            >
              {node.frontmatter.date}
            </span>
          </h3>
        </div>
      ))}
      <h7>
        Reading time: {data.allMarkdownRemark.edges[0].node.timeToRead}min.
      </h7>
      <h6>Total blogs: {data.allMarkdownRemark.totalCount}</h6>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            date
          }
          html
          excerpt
          timeToRead
        }
      }
      totalCount
    }
  }
`
