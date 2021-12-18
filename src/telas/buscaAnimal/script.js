const url = 'http://localhost:3001/dogs';

loadAnimais(url);

function loadAnimais(baseUrl) {
    fetch (baseUrl, {method: 'GET'}
    ).then(function(response) {
        return response.json();
    }).then(function(dogs) {
        for (let data of dogs)
            criarCard(data);
    });
}

function criarCard(cardInfo) {
    console.log(cardInfo);
    let items = document.getElementById('items');
    let card = document.createElement('div');
    let img = document.createElement('img');
    let divInfo = document.createElement('div');
    let spanNome = document.createElement('span');
    let spanIdade = document.createElement('span');
    let divDescricao = document.createElement('div');
    let spanDesc = document.createElement('span');
    let divAdotar = document.createElement('div');
    let btnAdotar = document.createElement('div');

    card.classList.add('card');
    img.setAttribute('src', cardInfo.img);
    img.setAttribute('alt', cardInfo.name);
    divInfo.classList.add('info');
    spanNome.classList.add('nome');
    spanNome.innerHTML = cardInfo.name;
    spanIdade.classList.add('idade');
    spanIdade.innerHTML = cardInfo.age;
    divDescricao.classList.add('descricao');
    spanDesc.classList.add('txtDescricao');
    spanDesc.innerHTML = cardInfo.description;
    divAdotar.classList.add('adotar');
    btnAdotar.classList.add('btnAdotar');
    btnAdotar.id = cardInfo.id;
    btnAdotar.innerHTML = 'Adotar';

    divAdotar.appendChild(btnAdotar);
    divDescricao.appendChild(spanDesc);
    divInfo.appendChild(spanNome);
    divInfo.appendChild(spanIdade);
    card.appendChild(img);
    card.appendChild(divInfo);
    card.appendChild(divDescricao);
    card.appendChild(divAdotar);
    items.appendChild(card);

    btnAdotar.onclick = redirecionar;
}

function redirecionar() {
    window.location.href = `${window.location.origin}/src/telas/formAdocao/index.html`;
}