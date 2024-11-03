const dropdown = document.getElementById('dropdown')

dropdown.addEventListener('mousedown', () => {
    console.log("dropdown opened")
})

dropdown.addEventListener('click', (event) => {
    const selection = event.target.attributes.value.value
    console.log(selection, 'clicked!!')
    console.log(" ")
})