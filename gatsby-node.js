exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    query {
    allDatoCmsEstate {
        nodes {
            id
            titleestate
            slug
           
        }
    }
}
  `)
    data.allDatoCmsEstate.nodes.forEach(estate => {
           actions.createPage({
            path: `nieruchomosci/${estate.slug}`,
            component: require.resolve(`./src/templates/CreatePage.jsx`),
            context: { slug: estate.slug },
        })
    })
}

