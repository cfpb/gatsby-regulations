const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve(`src/templates/reg-page.js`);

  const pages = await graphql(`
    query allRegs {
      regulations {
        regulations {
          regulation {
            title
            shortName
            partNumber
          }
        }
      }
    }
  `);

  let regulations = pages.data.regulations.regulations;

  regulations.forEach((edge) => {
    createPage({
      path: `/${edge.regulation.partNumber}`,
      component: template,
      context: { id: edge.partNumber, name: edge.shortName, title: edge.title },
    });
  });
};
