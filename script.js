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

const getValue = () => {
  const inputValue = inputcep.value;
  buscaCep(inputValue);
  result.style.display = "flex";
  result.style.aligitems = "center";
  result.style.justiyContent = "center"
  result.style.flexDirection = "column"
};

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
    })
    .catch((err) => console.log(err));
};

reloadButton.addEventListener("click", reloadPage)

function reloadPage() {
    location.reload()
}

