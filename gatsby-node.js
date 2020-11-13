const mondrians = require('./data/all.json')

exports.createPages = async ({actions: {createPage}}) => {
  mondrians.forEach((mondrian) => {
    createPage({
      path: `/${mondrian.id}`,
      component: require.resolve('./src/pages/Mondrian.tsx'),
      context: {mondrian}
    })
  })

  createPage({
    path: '/',
    component: require.resolve('./src/pages/Overview.tsx'),
    context: {mondrianList: mondrians}
  })
}
