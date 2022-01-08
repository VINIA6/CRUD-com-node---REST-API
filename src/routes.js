const {Router} = require('express')
const routes = new Router()
const empresas= require('./app/controllers/EmpresasContorller')

routes.get('/empresas',empresas.index)
routes.get('/empresas/:id',empresas.show)
routes.post('/empresas',empresas.create)
routes.put('/empresas/:id',empresas.update)
routes.delete('/empresas/:id',empresas.destroy)


module.exports = routes