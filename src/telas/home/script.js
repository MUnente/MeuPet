const url = 'http://localhost:3001/ongs';

loadOngs(url);

function loadOngs(baseUrl) {
    fetch (baseUrl, {method: 'GET'}
    ).then(function(response) {
        return response.json();
    }).then(function(ongs) {
        for (let data of ongs)
            criarCard(data);
    });
}

function criarCard(cardInfo) {
    let content = document.getElementById('ongsContent');
    let card = document.createElement('div');
    let anchor = document.createElement('a');
    let img = document.createElement('img');

    card.classList.add('card');
    anchor.setAttribute('href', cardInfo.contato.site);
    anchor.setAttribute('target', '_blank');
    img.setAttribute('src', cardInfo.img);
    img.setAttribute('alt', cardInfo.name);

    anchor.appendChild(img);
    card.appendChild(anchor);
    content.appendChild(card);
}