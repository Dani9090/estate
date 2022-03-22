const path = require("path")

// eslint-disable-next-line import/no-extraneous-dependencies
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
    title: "Z lokatorem",
    siteUrl: "https://www.zlokatorem.pl",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        fix: true,
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx"],
        exclude: [
          "node_modules",
          "bower_components",
          ".cache",
          "public",
          "src2",
          "gatsby-config.js",
        ],
      },
    },

    "gatsby-plugin-styled-components",
    /* {
                   resolve: 'gatsby-plugin-google-analytics',
                   options: {
                     trackingId: 'gvkavrag7nip',
                   },
                 }, */
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/icons/favicon.png",
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
        ],
        display: "swap",
      },
    },
  ],
}
