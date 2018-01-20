const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/:username/:view?') // User page with view
