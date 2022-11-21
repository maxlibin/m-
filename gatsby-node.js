const path = require(`path`)
const fetch = require('node-fetch');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          title
          excerpt
          content
          slug
        }
      }
    }
  `).then(result => {
    result.data.allWpPost.nodes.forEach(node => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/blog-post.tsx`),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}

exports.sourceNodes = async ({actions: {createNode}, createContentDigest}) => {
  const response = await fetch("https://api.github.com/users/maxlibin/repos")

  const repos = await response.json();

  repos.forEach((repo) => {
    createNode({
      ...repo,
      id: String(repo.id),
      internal: {
        type: 'GithubRepos',
        contentDigest: createContentDigest(repo)
      }
    });
  });
};
