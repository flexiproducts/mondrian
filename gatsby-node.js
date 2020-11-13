const mondrians = require('./data/all.json')

exports.createPages = async ({actions: {createPage}}) => {
  mondrians.forEach((mondrian) => {
    createPage({
      path: `/${mondrian.id}`,
      component: require.resolve('./src/App.tsx'),
      context: {mondrian}
    })
  })

  createPage({
    path: '/',
    component: require.resolve('./src/App.tsx'),
    context: {mondrian: mondrians[100]}
  })
}
