
const numero = document.querySelector('.numero')
const frase = document.querySelector('.frases')
const botao = document.querySelector('.botao')
const link = "https://api.adviceslip.com/advice"



async function buscaFrases(){
   const response = await fetch(link);
   
   const {slip: {id,advice}} = await response.json();

   numero.innerText = id;
   frase.innerText = advice;


 
   
   
}

buscaFrases();

botao.addEventListener("click", buscaFrases)

