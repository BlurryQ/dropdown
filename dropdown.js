const root = document.body
root.classList.add('light')


const closeMenuOnESC = (menu, select) => {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            menu.classList.remove('menu-open')   
            select.classList.remove('select-clicked')
        }
    })
}

const openMenu = (menu, select, caret) => {
    menu.classList.toggle('menu-open')
    select.classList.toggle('select-clicked')
    caret.classList.toggle('caret-rotate')
}

const selects = document.querySelectorAll('.select')

selects.forEach((select, i) => {
    const menus = document.querySelectorAll('.menu')
    
    closeMenuOnESC(menus[i], selects[i])
    
    const caret = selects[i].querySelector('.caret')
    select.addEventListener('click', (e) => {
        openMenu(menus[i], selects[i], caret)

        // if not inside our element close menu
        root.addEventListener('click', (e) => {
            console.dir(e.target)
            if (e.target.classList[0] !== 'select' || e.target.classList[0] !== 'select') {
                console.dir(e.target.classList[0])
                menus[i].classList.remove('menu-open')
            }
        })
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





