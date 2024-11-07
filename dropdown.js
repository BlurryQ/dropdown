const selects = document.querySelectorAll('.select')

selects.forEach(select => {
    const selected = document.querySelector('.selected')
    const menu = document.querySelector('.menu')

    select.addEventListener('click', (e) => {
        menu.classList.toggle('menu-open')

        // if not inside our element close menu
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            menu.classList.remove('menu-open')   
        }
    })

    menuLis = document.querySelectorAll('.menu li')
    menuLis.forEach(li => {
        li.addEventListener('click', (e) => {
            const selection = e.target.innerText
            console.log(selection, 'clicked!!')
            console.log(" ")
            selected.innerText = selection
            menu.classList.remove('menu-open')
            menuLis.forEach(lis => {
                lis.classList.remove('active')
            })
            li.classList.toggle('active')
        })
    })
})





