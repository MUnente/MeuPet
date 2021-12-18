window.onload = function() {
    let btnCadastrar = document.getElementById('btnCadastrar');

    btnCadastrar.onclick = cadastrar;
}

function cadastrar() {
    let nomeOng = document.getElementById('nomeOng').value;
    let dataFundacao = document.getElementById('dataFundacao').value;
    let cpfResponsavel = document.getElementById('cpfResponsavel').value;
    let rgResponsavel = document.getElementById('rgResponsavel').value;
    let telefone = document.getElementById('telefone').value;
    let endereco = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cep = document.getElementById('cep').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let confirmeSenha = document.getElementById('confirmeSenha').value;

    if (nomeOng === '' || dataFundacao === '' || cpfResponsavel === '' || rgResponsavel === '' || telefone === '' || endereco === '' || numero === '' || bairro === '' || cep === '' || cidade === '' || estado === '' || email === '' || senha === '' || confirmeSenha === '') {
        alert('Preencha todos os campos corretamente');
    }
    else {
        if (senha !== confirmeSenha) {
            alert('As senhas não são compatíveis');
        }
        else {
            alert('Usuário cadastrado com sucesso');
            window.location.href = `${window.location.origin}/src/telas/home/index.html`;
        }
    }
}