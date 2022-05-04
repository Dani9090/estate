const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
)

module.exports = {
  siteMetadata: {
    title: `Z lokatorem`,
    siteUrl: `https://www.zlokatorem.pl`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-eslint`,
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
     {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/icons/logo.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/icons/",
      },
      __key: "icons",
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.GATSBY_API_DATOCMS,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
        pages: path.join(__dirname, "src/pages"),
        templates: path.join(__dirname, "src/templates"),
        src: path.join(__dirname, "src"),
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          'montserrat\:300,500,700',
          'cormorant garamond\:500',
          'gilda display\:400',
          'inter\:300,500,700',
        ],

      },
    },
  ],
}
