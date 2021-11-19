const content = document.getElementById('content');

import { loadContact } from './contact.js';
import { loadMenu } from './menu.js';

export function loadHeader () {

    const header = document.createElement('header');
    const headerLeft = document.createElement('div');
    headerLeft.id = 'header-left';
    const iconLink = document.createElement('a');
    iconLink.href = '#';
    const icon = document.createElement('img');
    icon.src = 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/50/000000/external-churros-fast-food-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png';
    icon.alt = 'Churro icon';
    const restNameLink = document.createElement('a');
    restNameLink.href = '#';
    const restName = document.createElement('h1');
    restName.innerText = "Churros";
    const headerRight = document.createElement('div');
    headerRight.id = 'header-right';

    const navText = ['Home', 'Menu', 'Contact'];

    const createNavLinks = (() => {
        for (let i = 0; i < navText.length; i++) {
            let nav = document.createElement('a');
            nav.href = "#";
            nav.classList.add('nav-link');
            nav.innerText = navText[i];
            headerRight.appendChild(nav);
            nav.addEventListener('click', e => {
                const target = e.target.innerText;
                document.getElementById('main').remove();
                if (target === 'Home') {
                    loadMain();
                } else if (target === 'Menu') {
                    loadMenu();
                } else if (target === 'Contact') {
                    loadContact();
                }
            });
        }
    })();

    content.appendChild(header);
    header.appendChild(headerLeft);
    headerLeft.appendChild(icon);
    iconLink.appendChild(icon);
    headerLeft.appendChild(restName);
    restNameLink.appendChild(restName);
    headerLeft.appendChild(iconLink);
    headerLeft.appendChild(restNameLink);
    header.appendChild(headerRight);
};

export function loadFooter () {

    const footer = document.createElement('footer');
    const signature = document.createElement('span');
    signature.textContent = 'Made by Tim Ponce';
    const gitHubLink = document.createElement('a');
    gitHubLink.href = 'https://github.com/timponce';
    const gitHubIcon = document.createElement('img');
    gitHubIcon.src = 'img/GitHub-Mark-32px.png';
    gitHubIcon.alt = 'GitHub logo (Octocat)';

    content.appendChild(footer);
    footer.appendChild(signature);
    footer.appendChild(gitHubLink);
    footer.appendChild(gitHubIcon);
        
    };

export function loadMain () {

    const main = document.createElement('div');
    main.id = 'main';
    main.classList.add('main-home');
    const mainImg = document.createElement('img');
    mainImg.id = 'main-img';
    mainImg.src = 'img/quino-al-OQzxo_NcrEY-unsplash.jpg';
    mainImg.alt = 'Man making churros';
    const mainText = document.createElement('div');
    mainText.id = 'main-text';
    mainText.innerHTML = 'Fresh churros & <br> coffee daily';

    content.insertBefore(main, document.querySelector('footer'));  
    main.appendChild(mainImg);
    main.appendChild(mainText);

};