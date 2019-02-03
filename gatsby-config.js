module.exports = {
  siteMetadata: {
    title: 'Molecular starter'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'markdown-pages'
      }
    },
    `gatsby-transformer-remark`
  ]
}
