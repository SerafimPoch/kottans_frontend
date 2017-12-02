let main = document.querySelector('main')

let memory_values = []
let memory_tile = []
let cards_flipped = 0

const cards = [
    {id:1,  img:'cats_0'},
    {id:2,  img:'cats_1'},
    {id:3,  img:'cats_2'},
    {id:4,  img:'cats_3'},
    {id:5,  img:'cats_4'},
    {id:6,  img:'cats_5'},
    {id:7,  img:'cats_0'},
    {id:8,  img:'cats_1'},
    {id:9,  img:'cats_2'},
    {id:10, img:'cats_3'},
    {id:11, img:'cats_4'},
    {id:12, img:'cats_5'}
]

const shuffle = (a) => a.sort(()=> 0.5 - Math.random())

const new_board = () => { 
    cards_flipped = 0
    let store = shuffle(cards)
          store.forEach(x => {
           main.insertAdjacentHTML('beforeend',
               '<div class="flip-container ">\
               <div onclick="handleClick(this,\''+x.img+'\')" class="flipper " id=' + x.id + ' >\
               <div  class="front"></div>\
               <div class="back '+x.img+'"></div>\
               </div>\
               </div>' 
               )    
            })                     
}

const hide = () =>{
    let tile1 = document.getElementById(memory_tile[0])
    let tile2 = document.getElementById(memory_tile[1])
        tile1.className = 'flipper hide'
        tile2.className = 'flipper hide'
        memory_values = []
        memory_tile = []
}

const newGener = () =>{
    alert("You win!")
        main.innerHTML = ''
            new_board()
}

const flip_back = () =>{
    let tile_1 = document.getElementById(memory_tile[0])
    let tile_2 = document.getElementById(memory_tile[1])
        tile_1.classList.remove('open')
        tile_2.classList.remove('open')
        memory_values = []
        memory_tile = []
}

const handleClick= (x,y) => {

    if(memory_values.length < 2){
        x.classList.add('open')
            
    if(memory_values.length == 0){
        memory_values.push(y)
        memory_tile.push(x.id)
       
    } else if(memory_values.length == 1) {
        memory_values.push(y)
        memory_tile.push(x.id)
        
        if(memory_values[0] == memory_values[1]){
            cards_flipped += 2

            setTimeout(hide,800)

        if(cards_flipped == cards.length){
               
            setTimeout(newGener,1200)
        }
        } else {
            
            setTimeout(flip_back,800)
        }

    } 
    }   
}

    new_board()







    



