window.onload = function() {
    let btnEnviar = document.getElementById('btnEnviar');

    btnEnviar.onclick = enviarForm;
}

function enviarForm() {
    let nomeAdotante = document.getElementById('nomeAdotante').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let rgAdotante = document.getElementById('rgAdotante').value;
    let cpfAdotante = document.getElementById('cpfAdotante').value;
    let telefone = document.getElementById('telefone').value;
    let endereco = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cep = document.getElementById('cep').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let email = document.getElementById('email').value;
    
    let pergunta1 = document.getElementById('pergunta1').value;
    let pergunta2 = document.getElementById('pergunta2').value;
    let pergunta3 = document.getElementById('pergunta3').value;
    let pergunta4 = document.getElementById('pergunta4').value;
    let pergunta5 = document.getElementById('pergunta5').value;
    let pergunta6 = document.getElementById('pergunta6').value;
    let pergunta7 = document.getElementById('pergunta7').value;
    let pergunta8 = document.getElementById('pergunta8').value;
    let pergunta9 = document.getElementById('pergunta9').value;
    

    if ((nomeAdotante === '' || dataNascimento === '' || rgAdotante === '' || cpfAdotante === '' || telefone === '' || endereco === '' || numero === '' || bairro === '' || cep === '' || cidade === '' || estado === '' || email === '') || (pergunta1 === '' || pergunta2 === '' || pergunta3 === '' || pergunta4 === '' || pergunta5 === '' || pergunta6 === '' || pergunta7 === '' || pergunta8 === '' || pergunta9 === '')) {
        alert('Preencha todos os campos corretamente');
    }
    else {
        alert('Seu formulário foi enviado para o banco de análise da ONG. Agradecemos o seu interesse!');
        window.location.href = `${window.location.origin}/src/telas/buscaAnimal/index.html`;
    }
}