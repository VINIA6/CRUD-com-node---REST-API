const {Router} = require('express')
const routes = new Router()
const empresas= require('./app/controllers/EmpresasContorller')

// import { Router } from "express"
// import routes from new Router
// import empresas from './app/controllers/EmpresasContorller'

routes.get('/empresas',empresas.index)
routes.get('/empresas/:id',empresas.show)
routes.post('/empresas',empresas.create)
routes.put('/empresas/:id',empresas.update)
routes.delete('/empresas/:id',empresas.destroy)


module.exports = routes
// export default routes

//Sucrase - transpilador
// Esse pacote permite uma sintaxe mais usual atualmente
// Como import para importação e export para exportar, recursos.