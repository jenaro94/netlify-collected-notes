/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Gatsby Collected Notes Starter`,
    description: `Use Collected Notes as a CMS and Gatsby to add your own mark.`,
    author: `@jenaroc`,
  },
  plugins: [
    {
      resolve: `gatsby-source-collected-notes`,
      options: {
        notesOwner: "jenaro",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
