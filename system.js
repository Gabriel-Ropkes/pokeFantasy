let nome = document.querySelector("#nome");
let usuario = document.querySelector("#usuario");
let senha = document.querySelector("#senha");
let confirmSenha = document.querySelector("#confirmSenha");

let labelNome = document.querySelector("#labelNome");
let labelUsuario = document.querySelector("#labelUsuario");
let labelSenha = document.querySelector("#labelSenha");
let labelConfirmSenha = document.querySelector("#labelConfirmSenha");

let validNome = false;
let validUsuario = false;
let validSenha = false;
let validConfirmSenha = false;
localStorage.setItem("validNome", "false");
localStorage.setItem("validUsuario", "false");
localStorage.setItem("validSenha", "false");
localStorage.setItem("validConfirmSenha", "false");

let btnMostrar = document.querySelector("#verSenha");
let btnConfirm = document.querySelector("#verConfirmSenha");
let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess"); 
variaveis
//cadastramento
function cadastrar() {
  let DBvalidNome = localStorage.getItem("validNome");
  let DBvalidUsuario = localStorage.getItem("validUsuario");
  let DBvalidSenha = localStorage.getItem("validSenha");
  let DBvalidConfirmSenha = localStorage.getItem("validConfirmSenha");

  if (
    (DBvalidNome == "true") &
    (DBvalidUsuario == "true") &
    (DBvalidSenha == "true") &
    (DBvalidConfirmSenha == "nocadastro")
  ) {
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    listaUser.push({
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value,
      saldoCad: 1.0,
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));
    msgSuccess.setAttribute("style", "display: block");
    msgSuccess.innerHTML = "<strong>Cadastrando usuário...</strong>";
    msgError.setAttribute("style", "display: none");
    msgError.innerHTML = "Nenhum erro encontrado";
    setTimeout(() => {
      window.location.href = "https://pingobras.glitch.me/login";
    }, 7000);
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>";

    msgSuccess.innerHTML = "Nenhum erro encontrado";
    msgSuccess.setAttribute("style", "display: none");
  }
}
//mostrar senhas
btnMostrar.addEventListener("click", () => {
  let inputSenha = document.querySelector("#senha");
  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
    inputSenha.placeholder = "123456";
  } else {
    inputSenha.setAttribute("type", "password");
    inputSenha.placeholder = "**";
  }
});

btnConfirm.addEventListener("click", () => {
  let inputConfirmSenha = document.querySelector("#confirmSenha");
  if (inputConfirmSenha.getAttribute("type") == "password") {
    inputConfirmSenha.setAttribute("type", "text");
    inputConfirmSenha.placeholder = "123456";
  } else {
    inputConfirmSenha.setAttribute("type", "password");
    inputConfirmSenha.placeholder = "**";
  }
});
const buttonAutenticar = document.querySelector('#autenticador')
  const listaUserObj = localStorage.getItem("listaUser");
  const finder = JSON.parse(listaUserObj)
  const btnVerSenhaL = document.getElementById("verSenhaLogin")
  let senha = document.getElementById('senha')
  let usuario = document.getElementById('usuario')
  let msgError = document.getElementById('msgError')
  let msgSuccess = document.getElementById('msgSuccess')
  let userValid = {nome: '',user: '',senha: '',saldo: ''}
  let listaUser = JSON.parse(localStorage.getItem('listaUser'))
  console.log("usuario esperado: " + userValid)
  console.log("lista esperada: " + listaUser) 
  if(!listaUser) {//verificando erros com o banco de dados
  console.log("Não e possivel logar não há usuarios cadastrados localmente!");
}else{
  if(listaUser == "null"|| listaUser == null){
  console.log("Não e possivel logar não há usuarios cadastrados localmente!");
  msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Não e possivel logar não há usuarios cadastrados localmente!'
    msgSuccess.setAttribute('style', 'display: none')
}else{
    listaUser.forEach((item) => {//procurando dados do usuario cadastrado 
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
     //definindo usuario valido
      userValid = {nome: item.nomeCad,user: item.userCad,senha: item.senhaCad,saldo: item.saldoCad}
    }})
}
} 
if(usuario.value == "" && senha.value == "") {//corrige erro de usuario entrar sem senha e sem usuario
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou Senha não podem ser vazios'
    msgSuccess.setAttribute('style', 'display: none')
  }else{
    if(usuario.value == "admin" && senha.value == "admin"){
    setTimeout(wait,7000);
    function wait() {window.location.href = "https://seusite.com.br/admin%22%7D
  msgError.setAttribute('style', 'display: none')
    msgSuccess.innerHTML = 'Validando acesso...'
    msgSuccess.setAttribute('style', 'display: block')
}else{
if(usuario.value == userValid.user && senha.value == userValid.senha||usuario.value == userValid2.user && senha.value == userValid2.senha){
    setTimeout(wait,7000);
    function wait() {window.location.href = 'https://seusite.com.br/user%27%7D

    let clientID = Math.random().toString(9).substr(16)
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom+"ValidDB:"+clientID
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
    localStorage.setItem('userLogado', JSON.stringify(userValid2))
    console.log("LOGIN> token User setado!")

    msgError.setAttribute('style', 'display: none')
    msgSuccess.innerHTML = 'Validando acesso...'
    msgSuccess.setAttribute('style', 'display: block')
}else{
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou Senha Incorretos'
    msgSuccess.setAttribute('style', 'display: none')}
  }}//fim elses


}//fim do autenticar