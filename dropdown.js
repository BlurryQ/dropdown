const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
    const selected = document.querySelector('.selected')
    const menu = document.querySelector('.menu')

    dropdown.addEventListener('click', (e) => {
        menu.classList.toggle('menu-open')

        menuLis = document.querySelectorAll('.menu li')
        menuLis.forEach(li => {
            li.addEventListener('click', (e) => {

                const selection = e.target.innerText
                console.log(selection, 'clicked!!')
                console.log(" ")
                selected.innerText = selection
                menu.classList.toggle('menu-open')

                menuLis.forEach(lis => {
                    lis.classList.remove('active')
                })
                li.classList.toggle('active')
            })
        })
    })

})



