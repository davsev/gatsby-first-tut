const path = require("path")

//create pages dinamicly
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query getProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/templates/productTemplate.js`),
      context: {
        slug: product.slug,
      },
    })
  })
}
