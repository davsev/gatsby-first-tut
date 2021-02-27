import React from "react"
import Layout from "../components/layout"
import Header from "../examples/Header"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  console.log("data ", author)

  return (
    <Layout>
      <p>Examples</p>

      <Header />
    </Layout>
  )
}
export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`
export default examples
