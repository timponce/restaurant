const content = document.getElementById('content');

export function loadContact () {

    const main = document.createElement('div');
    main.id = 'main';
    content.insertBefore(main, document.querySelector('footer'));

};