import React from "react"
import { Link, graphql } from "gatsby"

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
      {/* Posts */}
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div style={{ margin: "10px 0 50px 0" }} key={node.id}>
          {/* Title */}
          <a
            style={{
              color: "#595959",
              width: "fit-content",
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              margin: "0",
              textDecoration: "none",
              display: "block",
            }}
            href={node.fields.slug}
            target="_blank"
            rel="noreferrer"
          >
            {node.frontmatter.title}
          </a>
          {/* Data & time to read */}
          <span
            style={{
              fontSize: "0.8rem",
              color: "darkGray",
              margin: "0 0 10px 0",
              display: "inline-flex",
              alignItems: "center",
              verticalAlign: "middle",
            }}
          >
            {node.frontmatter.date}
            <svg
              viewBox="0 0 24 24"
              style={{
                margin: "0 3px 0 10px",
                fill: "none",
                width: "15px",
                height: "15px",
                stroke: "darkGray",
                strokeWidth: "1.5",
                strokeLinecap: "round",
              }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 15" />
            </svg>
            {node.timeToRead} min.
          </span>
          {/* Thumbnail */}
          <div
            style={{
              margin: "0 2%",
              width: "96%",
              height: "250px",
              backgroundImage: `url(${node.frontmatter.thumbnail})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Excerpt */}
          <p
            style={{
              margin: "0 2%",
              width: "96%",
              fontSize: "0.7rem",
              fontWeight: "bold",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            {node.excerpt}
          </p>
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
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`
