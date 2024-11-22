const addDropdownListeners = () => {
    const closeMenuOnESC = (menu, select, caret) => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                menu.classList.remove('menu-open');
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
            }
        });
    };

    const closeMenuOnClickOutside = () => {
        document.body.addEventListener('click', (e) => {
            document.querySelectorAll('.menu').forEach(menu => {
                const select = menu.previousElementSibling;
                const caret = select.querySelector('.caret');
                if (!select.contains(e.target)) {
                    menu.classList.remove('menu-open');
                    select.classList.remove('select-clicked');
                    caret.classList.remove('caret-rotate');
                }
            });
        });
    };

    const openMenu = (menu, select, caret) => {
        menu.classList.toggle('menu-open');
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
    };

    const selects = document.querySelectorAll('.select');
    selects.forEach((select) => {
        const menu = select.nextElementSibling;
        const caret = select.querySelector('.caret');
        const selected = select.querySelector('.selected');
        const menuLis = menu.querySelectorAll('li');

        closeMenuOnESC(menu, select, caret);

        select.addEventListener('click', () => {
            openMenu(menu, select, caret);
        });

        menuLis.forEach(li => {
            li.addEventListener('click', (e) => {
                selected.innerText = e.target.innerText;
                menuLis.forEach(l => l.classList.remove('active'));
                li.classList.add('active');
                menu.classList.remove('menu-open');
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
            });
        });
    });

    closeMenuOnClickOutside();
};

addDropdownListeners();
