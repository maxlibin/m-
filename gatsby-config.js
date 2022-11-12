module.exports = {
  siteMetadata: {
    title: `Max li bin - Frontend developer`,
    description: `I am based in Singapore, have Javascript, React, ReasonMl, ReasonReact projects you'd like to discuss?`,
    twitterUsername: `@maxlibin`,
    author: `@maxlibin`,
    image: `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🤔</text></svg>`,
    siteUrl: `https://maxlibin.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `https://b.maxlibin.com/graphql`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `maxlibin.com`,
        short_name: `maxlibin`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/heart.webp`, // This path is relative to the root of the site.
      },
    },
  ],
}
