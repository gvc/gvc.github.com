module.exports = {
    siteMetadata: {
        title: `gvc`,
        siteUrl: `https://gvc.github.io`,
    },
    plugins: [
        'gatsby-plugin-postcss',
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/data/`,
            },
        },
    ]
}
