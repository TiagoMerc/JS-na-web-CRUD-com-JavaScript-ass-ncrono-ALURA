const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`) 
    .then(resposta => {
        return resposta.json()
    })
}

export const clienteService = {
    listaClientes
}
                                                         /*   resposta e passo uma arrow function, executando resposta return, ‘return resposta .json’.

                                                          Lembra que a resposta é um texto e temos que fazer .json para ele virar um objeto JavaScript válido. Agora. O que vamos fazer? Não precisa mexer em mais nada aqui embaixo, vamos no Chrome, vou atualizar a página, e funcionou. */
  
                                                        