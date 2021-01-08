let facebook_pixel = '12'
let gtm = '1234'

module.exports = {
  siteMetadata: {
    title: `Butterfly Solutions`,
    description: `Butterfly Solutions `,
    author: `Bhuwan Bansal`,
    siteUrl: "https://needstobetheproductionurl.com",
    phone: `+61 404004925`,
    address: `Butterfly Consultancy, P.O BOX 5026, Chisholm ACT 2905`,
    email: `contactus@butterflyconsultancy.com.au`, 
    pathPrefix: `/home`  
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: gtm,
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/images/gatsby-icon.png'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     queryLimit: 1000, // Default to 100
    //     contentTypes: ['article'],
    //     // Possibility to login with a strapi user, when content types are not publically available (optional).
    //     loginData: {
    //       identifier: "",
    //       password: "",
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-styled-components`
  ],
}
