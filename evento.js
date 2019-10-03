window.onload = function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
  });
  });
};




function calendario() {
  var str = "Free Web Building Tutorials!";
  var result = str.link("https://www.w3schools.com");
}

function INSCRICAO(){

  var nome = null,email,senha,curso;

  nome = prompt ("Qual é o seu nome?");
    email = prompt ("Qual é o seu email?");
      senha = prompt ("Qual é sua senha?");
        curso = prompt ("Informe seu Curso ou Palestra que deseja se inscrever?");

        if(nome == ""){

        }else {
          alert(nome+ "  Obrigado pela confiança de nossos projetos");
          alert("INSCRIÇÃO EFETUADO COM SUCESSO!");
        }

}
