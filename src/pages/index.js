import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
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
        <div style={{ margin: "10px 0 50px 0" }} key={node.id}>
          <h3
            style={{
              color: "#595959",
              fontSize: "1rem",
              textTransform: "uppercase",
              margin: "0",
            }}
          >
            {node.frontmatter.title}
          </h3>
          <span
            style={{
              fontSize: "0.8rem",
              color: "darkGray",
              margin: "0 0 10px 0",
            }}
          >
            {node.frontmatter.date}-
            <svg
              viewBox="0 0 24 24"
              style={{
                stroke: "none",
                width: "20px",
                height: "20px",
                fill: "rgb(209, 209, 209)",
              }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 15" />
            </svg>
            {node.timeToRead}min.
          </span>
          <div
            style={{
              width: "100%",
              height: "150px",
              backgroundImage: `url(${node.frontmatter.thumbnail})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      ))}
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
            thumbnail
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
