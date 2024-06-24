
let endpoint ='https://666c940949dbc5d7145e7fe2.mockapi.io/geek/api/imagem';
// let endpoint ='https://666c940949dbc5d7145e7fe2.mockapi.io/geek/api/imagem';



async function conectaApi(){
    const consulta = await fetch(endpoint);
    
    let consultaConvertida = await consulta.json();
    console.log(consultaConvertida);
    return consultaConvertida;
}
async function criaCartaoApi(titulo,descricao,preco,imagem){
    const conexao =await fetch(endpoint,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"//cabeçalho para informar valores do conteudo de dado do tipo json
        },
        body:JSON.stringify({
            titulo,
            descricao,
            preco,
            imagem
        })
    })
    const resultado = await conexao.json();
    return resultado
}

async function deletaCartao(id){
    const deleta = await fetch(`${endpoint}/${id}`,{
    method:"DELETE",
    headers:{
        "Content-Type":"application/json" 
    }
   
})
    return  deleta
}

async function addCard(item){
    // const plusCard = await fetch (`${endpoint}/${titulo}/${preco}/${imagem}`,{
        const plusCard = await fetch (endpoint,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        }, body:JSON.stringify(
            
            item
        )
        
    })
    return plusCard
}
export const conexaoApi ={
    conectaApi,
    criaCartaoApi,
    deletaCartao,
    exemplo,
    addCard
}
function exemplo(titulo,preco,imagem){
    //  const  ex =fetch (`${endpoint}/${titulo}/${preco}/${imagem}`,{
        const  ex =fetch (endpoint,{
        method:"POST",
        headers:{
            "Content-Type":"application/jsons"
         }, body:JSON.stringify({
       titulo:titulo,
       preco:preco,
       imagem:imagem    
    })
    
})
return ex
}