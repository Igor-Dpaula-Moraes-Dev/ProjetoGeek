import { conexaoApi } from "./conectaApi.js";
let elementoParaInserirCard = document.querySelector('.container_cards')
console.log(elementoParaInserirCard)
function createCard(titulo, descricao, preco, imagem, id) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id', id)
    card.innerHTML = ` 

                 <div class="img_fig">
                    <img src="${imagem}" alt="Imagen do producto" id="imagem">
                 </div>
                <div class="card-container--info">
                    <p>Marca: ${descricao}</p>
                    <p>Modelo: ${titulo}</p>
                    
                    <div class="card-container--value">
                    <div class="preco">
                    <p>Preço:<i class="bi bi-currency-dollar"></i>${preco}</p>
                    </div>
                      <div class="icon">
                      <i class="bi bi-trash-fill"></i>
                        <i class="bi bi-plus-square"></i>
                        </div>
                        
                    </div>
                </div>
          
                `
    const deletaCard = card.querySelector('.bi-trash-fill');
    deletaCard.addEventListener('click', async (evento) => {
        evento.preventDefault()
        await conexaoApi.deletaCartao(id)
        card.remove()
    })
    return card;


}

async function exibirCard() {
    elementoParaInserirCard.innerHTML = '';
    const cartoesdaApi = await conexaoApi.conectaApi();
    cartoesdaApi.forEach(elementCards => {
        elementoParaInserirCard.appendChild(createCard(
            elementCards.titulo,
            elementCards.descricao,
            elementCards.preco,
            elementCards.imagem,
            elementCards.id
        ))

    });
};
exibirCard();

let menu = document.querySelector('.bi-list');
menu.addEventListener('click', () => {
    const abreMenu = document.createElement('div');
    abreMenu.className = 'menu_aberto';
    menu = abreMenu;
    abreMenu.innerHTML = `
      
        <div>
            <p>meu carrinho</p>
        </div>
       `
    console.log(abreMenu)
    return abreMenu;
})
const titulo = document.querySelector('#nome');
const valor = document.querySelector('#valor');
const imagem = document.querySelector('#img');

titulo.addEventListener('input', (evento)=>armazenaItem(evento))
valor.addEventListener('input', (evento)=>armazenaItem(evento))
imagem.addEventListener('input', (evento)=>armazenaItem(evento))

const item ={
    titulo: "",
    preco: "",
    imagem:"",
}
 function armazenaItem(eventoInput){
    let nomeCampo = eventoInput.target.name;
    let valorCampo = eventoInput.target.value;
     
    item[nomeCampo] =valorCampo;
    console.log(item)
 }

const btnGuardar = document.querySelector('#guardar');
console.log(btnGuardar)
btnGuardar.addEventListener('click', async (e) => {
    e.preventDefault()
    // await conexaoApi.addCard(titulo.value,valor.value,imagem.value);
  
    const teste = await conexaoApi.addCard(item);
     titulo.value = '';
     valor.value = '';
    imagem.value = '';
    console.log(teste)
    exibirCard()
})







