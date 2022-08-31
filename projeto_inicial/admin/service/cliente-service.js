const listaClientes = () => {
    return fetch(`http://localhost:3000/profle`) 
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }        
        throw new Error('Nâo foi possível listar os clientes')
    })
}

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome, 
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }        
        throw new Error('Nâo foi possível remover um clientes')
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    }).then( resposta => {
        if(!resposta.ok){
            throw new Error('Nâo foi possível remover o cliente')
        }        
       
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`) 
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
            throw new Error('Nâo foi possível detalhar o cliente')
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
            throw new Error('Nâo foi possível atualizar um cliente')
    })
}

export const clienteService = {
    listaClientes,
    criaCliente, 
    removeCliente,
    detalhaCliente,
    atualizaCliente
}
                                                         /*   resposta e passo uma arrow function, executando resposta return, ‘return resposta .json’.

                                                          Lembra que a resposta é um texto e temos que fazer .json para ele virar um objeto JavaScript válido. Agora. O que vamos fazer? Não precisa mexer em mais nada aqui embaixo, vamos no Chrome, vou atualizar a página, e funcionou. */
  
                                                        