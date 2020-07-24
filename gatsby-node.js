const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query CollectedNotesQuery {
        allCollectedNote {
          nodes {
            path
          }
        }
      }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each note.
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  result.data.allCollectedNote.nodes.forEach(node => {
    const path = node.path
    createPage({
      path: `/blog/${path}`,
      component: blogPostTemplate,
      context: {
        pagePath: path,
      },
    })
  })
}
