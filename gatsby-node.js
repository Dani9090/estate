const path = require("path");

async function turnTraditionalIntoPages({ graphql, actions }) {

// 2. Query all pizzas
  const { data } = await graphql(`
    query {
    allDatoCmsEstate {
        nodes {
            id
            titleestate
            slug
            galeryestate {
            url
            alt
            title
          }
           
        }
    }
}
  `);
// 3. Loop over each pizza and create a page for that pizza
  data.allDatoCmsEstate.nodes.forEach((estate) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `nieruchomosci/${estate.slug}`,
      component: path.resolve(`./src/templates/CreatePage.jsx`),
      context: {
        slug: estate.slug,
        foto: estate.galeryestate,

      }
    });
  });
}


export async function createPages(params) {
  await Promise.all([turnTraditionalIntoPages(params)]);
}


/*

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
    allDatoCmsEstate {
        nodes {
            id
            titleestate
            slug
            galeryestate {
            url
            alt
            title
          }
           
        }
    }
}
  `);
  data.allDatoCmsEstate.nodes.forEach(estate => {
    actions.createPage({
      path: `nieruchomosci/${estate.slug}`,
      component: require.resolve(`./src/templates/CreatePage.jsx`),
      context: {
        slug: estate.slug,
        foto: estate.galeryestate,

      }
    });
  });
};*/

