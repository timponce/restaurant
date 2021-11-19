const content = document.getElementById('content');

export function loadContact () {

    const main = document.createElement('div');
    main.id = 'main';
    content.insertBefore(main, document.querySelector('footer'))

    const iconArray = [
        ['mail', 'mailto:mail@mail.com', 'img/icons8-mail.svg'],
        ['instagram', 'https://instagram.com', 'img/icons8-instagram.svg'],
        ['twitter', 'https://twitter.com', '/img/icons8-twitter.svg'],
    ]

    const createIcons = (() => {
        for (let i = 0; i < iconArray.length; i++) {
        const iconLink = document.createElement('a');
        iconLink.classList.add('icon');
        iconLink.id = iconArray[i][0];
        iconLink.href = iconArray[i][1];
        main.appendChild(iconLink);
        const icon = document.createElement('img');
        icon.src = iconArray[i][2];
        iconLink.appendChild(icon);
        }
    })();

    const createAddress = (() => {
        const address = document.createElement('div');
        address.id = 'address';
        address.innerText = '460 Main St, Venice, CA, 90291';
        main.appendChild(address);
    })();

    const createMap = (() => {
        const map = document.createElement('img');
        map.id = 'map';
        map.src = 'img/churro-map.png';
        main.appendChild(map);
    })();

};