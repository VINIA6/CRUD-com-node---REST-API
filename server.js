//CRUD
const express = require("express")
const app = express()

app.use(express.json())

let empresas = [
    {
        id: 1,
        name: 'Facebook',
        site: 'http://facebook.com'
    },
    {
        id: 2,
        name: 'Google',
        site: 'http://Google.com'
    },
    {
        id: 3,
        name: 'Amazon',
        site: 'http://Amazon.com'
    }
]

//Criando uma rota usando express pra listar todas as empressas no nosso banco simulado.
app.get("/empresas", (req, res) => {
    res.json(empresas)
})
//Trabalhando com parametro id => obs sempre que for trabalhar com parametros colcoar os :
app.get("/empresas/:id", (req, res) => {
    //Implementando lógica.
    //ou seja, pegue da requisição o parametro id.
    const id = parseInt(req.params.id)
    //Ultilizamos empresa.find para buscar o item id, só que o find vai buscar aquele id igual
    //ao id que a gente está capturando da requisição.
    const empresa = empresas.find(items => items.id === id)
    //No status o codigo quer dizer que se empresa for positivo ele retorna 200 caso contrario 404
    const status = empresa ? 200 : 404
    //Retornando status e empresa json
    return res.status(status).json(empresa)
})
//Inserindo valores em nosso banco 
app.post("/empresas", (req, res) => {
    //Buscando nome e site da requisição o id vai estar na logica autoincrementavel 
    const { name, site } = req.body
    //Incremento do id naturalmente 
    const id = empresas[empresas.length - 1].id + 1
    //Adicionando valores em nosso banco/array
    const novaEmpresa = { id, name, site }
    empresas.push(novaEmpresa)

    return res.status(201).json(novaEmpresa)
})
//Editando
app.put("/empresas/:id", (req, res) => {
    //Fazendo requisição dos valores a serem modificados
    const { name, site } = req.body
    const id = parseInt(req.params.id)
    //Verificação de valor id existente
    const index = empresas.findIndex(items => items.id === id) + 1
    const status = index >= 0 ? 200 : 400

    if (index >= 0) {
        empresas[index] = {
            id: index ,
            name, 
            site
        }
    }

    return res.status(status).json(empresas[index])
})
// Deletando empresa
app.delete("/empresas/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const index = empresas.findIndex(item => item.id === id)
    const status = index >= 0 ? 200:400
    if(index>=0){
        // splice consegue remover o item de um array
        empresas.splice(index, 1)
    }

    return res.status(status).json()
})

app.listen(3002)
