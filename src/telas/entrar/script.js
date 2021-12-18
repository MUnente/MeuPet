window.onload = function() {
    let btnEntrar = document.getElementById('btnEntrar');
    let btnContinuar = document.getElementById('btnContinuar');

    btnEntrar.onclick = entrar;
    btnContinuar.onclick = cadastrar;

    function entrar() {
        let email = document.getElementById('emailLogin').value;
        let senha = document.getElementById('password').value;

        if (email === '' || senha === '')
            alert('Preencha todos os campos corretamente');
        else
            alert('Usuário logado');
        }
        
    function cadastrar() {
        let nome = document.getElementById('nome').value;
        let email = document.getElementById('emailCadastrar').value;
        if (nome === '' || email === '')
        alert('Preencha todos os campos corretamente');
        else
            window.location.href = `${window.location.origin}/src/telas/cadastrar/index.html`;
    }
}