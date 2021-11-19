const content = document.getElementById('content');

export function loadMenu () {

    const main = document.createElement('div');
    main.id = 'main';
    content.insertBefore(main, document.querySelector('footer'));

    const menuItems = [
        ['Churro', '3'],
        ['Toppings', ''],
        ['Coffee', '3'],
        ['Hot Chocolate', '3']
    ];

    const menuSubItems = [
        ['whipped cream', '0'],
        ['cherries', '1'],
        ['toasted nuts', '2'],
        ['chocolate', '2'],
        ['ice cream', '3']
    ];

    const createMenuItem = (() => {
        for (let i = 0; i < menuItems.length; i++) {
            let menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            let item = document.createElement('span');
            item.innerText = menuItems[i][0];
            let price = document.createElement('span');
            price.innerText = menuItems[i][1];
            main.appendChild(menuItem);
            menuItem.appendChild(item);
            menuItem.appendChild(price);
            if (i === 1) {
                const createMenuSubItem = (() => {
                    for (let i = 0; i < menuSubItems.length; i++) {
                        let menuSubItem = document.createElement('div');
                        menuSubItem.classList.add('menu-sub-item');
                        let subItem = document.createElement('span');
                        subItem.innerText = menuSubItems[i][0];
                        let subPrice = document.createElement('span');
                        subPrice.innerText = menuSubItems[i][1];
                        main.appendChild(menuSubItem);
                        menuSubItem.appendChild(subItem);
                        menuSubItem.appendChild(subPrice);
                    }
                })();
            }
        }
    })();

};