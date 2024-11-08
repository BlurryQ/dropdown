const selects = document.querySelectorAll('.select')

selects.forEach((select, i) => {
    const menus = document.querySelectorAll('.menu')

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            menus[i].classList.remove('menu-open')   
            selects[i].classList.remove('select-clicked')
        }
    })

    const caret = selects[i].querySelector('.caret')
    select.addEventListener('click', (e) => {
        menus[i].classList.toggle('menu-open')
        selects[i].classList.toggle('select-clicked')
        caret.classList.toggle('caret-rotate')

        // if not inside our element close menu
    })

    const selected = selects[i].querySelector('.selected')
    const menuLis = menus[i].querySelectorAll('li')
    menuLis.forEach(li => {
        li.addEventListener('click', (e) => {
            const selection = e.target.innerText
            selected.innerText = selection
            caret.classList.toggle('caret-rotate')
            menus[i].classList.remove('menu-open')
            selects[i].classList.remove('select-clicked')
            menuLis.forEach(lis => {
                lis.classList.remove('active')
            })
            li.classList.toggle('active')
        })
    })
})





