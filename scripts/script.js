//A busca pelos dados na api deve ser de forma assíncrona, utilizando async
async function getAdvice() {
  //constante resposta que guarda os dados vindos da api
  const resp = await fetch("https://api.adviceslip.com/advice");

  const data = await resp.json();

  //console.log(data.slip.advice);

  document.querySelector("#phrase").innerText = data.slip.advice;
  //Caminho para acessar o valor do objeto
}

//getAdvice();

//Capturo o botão em uma variável
const btnGetAdvice = document.querySelector("#get-advice");


//Adiciono o evento de click ao botão e chamo a função que traz o evento após o ato de clicar
btnGetAdvice.addEventListener("click", function () {
    getAdvice();
  });