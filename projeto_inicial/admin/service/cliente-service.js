const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`) 
    .then(resposta => {
        return resposta.json()
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
        return resposta.body
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    })
}

export const clienteService = {
    listaClientes,
    criaCliente, 
    removeCliente
}
                                                         /*   resposta e passo uma arrow function, executando resposta return, ‘return resposta .json’.

                                                          Lembra que a resposta é um texto e temos que fazer .json para ele virar um objeto JavaScript válido. Agora. O que vamos fazer? Não precisa mexer em mais nada aqui embaixo, vamos no Chrome, vou atualizar a página, e funcionou. */
  
                                                        