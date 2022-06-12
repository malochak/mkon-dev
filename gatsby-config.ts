import type {GatsbyConfig} from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Mkon`,
    siteUrl: `https://www.mkon.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-7S3XWRG6ZY",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending  pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    }
  ],
}

export default config
