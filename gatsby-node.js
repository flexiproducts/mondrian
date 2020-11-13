const mondrians = require('./data/all.json')

exports.createPages = async ({actions: {createPage}}) => {
  mondrians.forEach((mondrian) => {
    createPage({
      path: `/${mondrian.id}`,
      component: require.resolve('./src/templates/Mondrian.tsx'),
      context: {mondrian}
    })
  })

  createPage({
    path: '/',
    component: require.resolve('./src/templates/Overview.tsx'),
    context: {mondrianList: mondrians}
  })
}
