const inputcep = document.getElementById("inputcep");
const result = document.querySelector(".result");
const cepSpan = document.querySelector("#cep");
const logradouroSpan = document.querySelector("#logradouro");
const complementoSpan = document.querySelector("#complemento");
const bairroSpan = document.querySelector("#bairro");
const localidadeSpan = document.querySelector("#localidade");
const ufSpan = document.querySelector("#uf");
const ibgeSpan = document.querySelector("#ibge");
const reloadButton = document.getElementById("reloadButton")
const states = document.getElementById("states")
const infoCep = document.getElementById('info-cep')
const statesContainer = document.getElementById("states-container")
const imageError = document.getElementById("img-states-error")
const imageOk = document.getElementById("img-states-ok")
const resultData = document.getElementById("result-data")





const getValue = () => {
  let inputValue = inputcep.value
  if(inputValue.length !== 8) {
    states.innerHTML = "CEP NÃO ENCONTRADO"
    states.style.color = "red"
    infoCep.innerHTML = "Hmm. Não encontramos seu cep!  Utilize apenas números."
    imageOk.style.display = "none"
    imageError.style.display = "block"
    resultData.style.display = "none"
  } 
    buscaCep(inputValue);
    result.style.display = "flex";
    result.style.alignItems = "center";
    result.style.justifyContent = "center";
    result.style.flexDirection = "column";
  }
  
  const buscaCep = (inputValue) => {
    fetch(`https://viacep.com.br/ws/${inputValue}/json/`)
    .then((response) => response.json())
    .then((data) => {
      cepSpan.innerHTML = data.cep;
      logradouroSpan.innerHTML = data.logradouro;
      complementoSpan.innerHTML = data.complemento;
      bairroSpan.innerHTML = data.bairro;
      localidadeSpan.innerHTML = data.localidade;
      ufSpan.innerHTML = data.uf;
      ibgeSpan.innerHTML = data.ibge;
      imageOk.style.display = "block"
      imageError.style.display = "none"
    })
    .catch((err) => console.log(err));
};

reloadButton.addEventListener("click", reloadPage)

function reloadPage() {
    location.reload()
}
