let pokemons = JSON.parse(localStorage.getItem('pokemons')) || []

let input = document.getElementById('input-pokemon')
let btn = document.getElementById('btn-pokemon')
let lista = document.getElementById('lista')

btn.addEventListener('click', function(){
    if(input.value){
        pokemons.push(input.value)
        localStorage.setItem('pokemons', JSON.stringify(pokemons))
        input.value = ""

        lista.innerHTML = ''

        createCard(pokemons)

        
    }else{
        alert("Insira um pokemon")
    }

})

document.addEventListener('DOMContentLoaded', ()=>{
    let pokemons = JSON.parse(localStorage.getItem('pokemons')) || []

    createCard(pokemons)

    

})



function createCard(pokemons){

    pokemons.forEach(pokemon => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.json())
        .then(res => {
            card = document.createElement('div')
            card.classList.add('card-mostra')

            img = document.createElement('img')
            card.appendChild(img)
            img.src = res.sprites.front_default

            h1 = document.createElement('h1')
            h1.innerHTML = res.name
            card.appendChild(h1)

            lista.appendChild(card)
            
        })

    })

}