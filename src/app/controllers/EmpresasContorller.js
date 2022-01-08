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

class EmpresasContorler {
    //listar
    //Criando uma rota usando express pra listar todas as empressas no nosso banco simulado.
    index(req, res) {
        res.json(empresas)
    }
    //Recupera Empresa
    //Trabalhando com parametro id => obs sempre que for trabalhar com parametros colcoar os :
    show(req, res) {
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
    }
    //Cria Empresa
    //Inserindo valores em nosso banco 
    create(req, res) {
        //Buscando nome e site da requisição o id vai estar na logica autoincrementavel 
        const { name, site } = req.body
        //Incremento do id naturalmente 
        const id = empresas[empresas.length - 1].id + 1
        //Adicionando valores em nosso banco/array
        const novaEmpresa = { id, name, site }
        empresas.push(novaEmpresa)

        return res.status(201).json(novaEmpresa)
    }
    //Atualiza Empresa
    update(req, res) {
        //Fazendo requisição dos valores a serem modificados
        const { name, site } = req.body
        const id = parseInt(req.params.id)
        //Verificação de valor id existente
        const index = empresas.findIndex(items => items.id === id) + 1
        const status = index >= 0 ? 200 : 400

        if (index >= 0) {
            empresas[index] = {
                id: index,
                name,
                site
            }
        }

        return res.status(status).json(empresas[index])
    }
    // Excluir Empresa
    destroy(req, res) {
        const id = parseInt(req.params.id)
        const index = empresas.findIndex(item => item.id === id)
        const status = index >= 0 ? 200 : 404
        if (index >= 0) {
            // splice consegue remover o item de um array
            empresas.splice(index, 1)
        }

        return res.status(status).json()
    }
}

module.exports = new EmpresasContorler()
// export default new EmpresasContorler()