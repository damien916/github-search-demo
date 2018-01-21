const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/:username([\\w-]+)/:view(list|blocs)?') // User page with view
