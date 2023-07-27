// Accordion
let currencyName = document.querySelectorAll('.label-currency')
let selectedCurrency = ''
let ul


for(let i=0; i<currencyName.length; i++){
    currencyName[i].addEventListener('click', (event)=>{
        selectedCurrency = event.target.getAttribute('for')
        selectedCurrency = '.' + selectedCurrency
        ul = document.querySelector(selectedCurrency)

        if(ul.getAttribute('data-open') === 'false'){
            for(let j=0; j<ul.children.length; j++){
                ul.children[j].style.display = 'block'
            }
            ul.setAttribute('data-open', 'true')
        }
        else if(ul.getAttribute('data-open') === 'true'){
            for(let j=0; j<ul.children.length; j++){
                ul.children[j].style.display = 'none'
                ul.setAttribute('data-open', 'false')
            }
        }
    })
}
// Search
let searchInput = document.querySelector('.search-input')
let listsCurrency = document.querySelectorAll('li')
let pressedKey


searchInput.addEventListener('keyup', ()=>{
    pressedKey = searchInput.value.toUpperCase()
    for(let m=0; m<listsCurrency.length; m++){
        if(listsCurrency[m].innerHTML.toUpperCase().indexOf(pressedKey) > -1){
            listsCurrency[m].style.display = 'block'
        }
        else{
            listsCurrency[m].style.display = 'none'
        }
    }
    if(pressedKey === ''){
        for(let m=0; m<listsCurrency.length; m++){
            listsCurrency[m].style.display = 'none'
        }
    }
})

