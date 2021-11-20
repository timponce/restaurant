const content = document.getElementById('content');

export function loadContact () {

    const main = document.createElement('div');
    main.id = 'main';
    main.classList.add('hidden');
    content.insertBefore(main, document.querySelector('footer'))

    const info = document.createElement('div');
    info.id = 'info';
    main.appendChild(info);

    const createAddress = (() => {
        const addressContainer = document.createElement('div');
        addressContainer.id = 'address-container';
        info.appendChild(addressContainer);
        const visit = document.createElement('span');
        visit.classList.add('container-heading');
        visit.innerText = 'VISIT';
        addressContainer.appendChild(visit);

        const address = document.createElement('span');
        address.id = 'address';
        address.innerHTML = '460 Main St, Venice,<br>CA, 90291';
        addressContainer.appendChild(address);
    })();

    const iconArray = [
        ['instagram', 'https://instagram.com', 'img/icons8-instagram.svg'],
        ['twitter', 'https://twitter.com', '/img/icons8-twitter.svg'],
        ['mail', 'mailto:mail@mail.com', 'img/icons8-mail.svg']
    ]

    const createIcons = (() => {
        const connectContainer = document.createElement('div');
        connectContainer.id = 'connect-container';
        info.appendChild(connectContainer);
        const connect = document.createElement('span');
        connect.classList.add('container-heading');
        connect.innerText = 'CONNECT';
        connectContainer.appendChild(connect);

        const iconContainer = document.createElement('div');
        iconContainer.id = 'icon-container';
        connectContainer.appendChild(iconContainer);

        for (let i = 0; i < iconArray.length; i++) {
        const iconLink = document.createElement('a');
        iconLink.classList.add('icon');
        iconLink.id = iconArray[i][0];
        iconLink.href = iconArray[i][1];
        iconContainer.appendChild(iconLink);
        const icon = document.createElement('img');
        icon.src = iconArray[i][2];
        iconLink.appendChild(icon);
        }
    })();

    const createMap = (() => {
        const mapContainer = document.createElement('div');
        mapContainer.id = 'map-container';
        mapContainer.classList.add('rtl');
        mapContainer.classList.add('hidden');
        main.appendChild(mapContainer);
        const map = document.createElement('img');
        map.id = 'map';
        map.src = 'img/churro-map.png';
        mapContainer.appendChild(map);
    })();

};