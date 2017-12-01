let main = document.querySelector('main')
const flipper = document.querySelector('.flipper')
const front   = document.querySelector('.front')




const cards = [
    {id:1,  img:'cats_0'},
    {id:2,  img:'cats_1'},
    {id:3,  img:'cats_2'},
    {id:4,  img:'cats_3'},
    {id:5,  img:'cats_4'},
    {id:6,  img:'cats_5'},
    {id:7,  img:'cats_0'},
    {id:8,  img:'cats_1'},
    {id:10, img:'cats_2'},
    {id:11, img:'cats_3'},
    {id:12, img:'cats_4'},
    {id:13, img:'cats_5'}
]

const shuffle = (a) => a.sort(()=> 0.5 - Math.random())




const new_board = () => { 
    cards_flipped = 0;
    let store = shuffle(cards)
         return store.map(x => {
           main.insertAdjacentHTML('beforeend',
               '<div class="flip-container ">\
               <div onclick="handleClick(this,\''+x.img+'\')" class="flipper " id=' + x.img + ' >\
               <div  class="front"></div>\
               <div class="back '+x.img+'"></div>\
               </div>\
               </div>' 
               )    
            })                     
}

let memory_values = []
let memory_tile = []
let cards_flipped = 0

const handleClick= (x,y) => {

    if(memory_values.length < 2){
        x.classList.add('open')

    if(memory_values.length == 0){
        memory_values.push(y)
        memory_tile.push(x.id)

    } else if(memory_values.length == 1) {
        memory_values.push(y)
        memory_tile.push(x.id)

        if(memory_values[0] === memory_values[1]){
            cards_flipped += 2
            var tile1 = document.getElementById(memory_values[0]);
            var tile2 = document.getElementById(memory_values[1]);
                memory_values = []
                memory_tile = []
        if(cards_flipped == cards.length){
            alert("Board cleared... generating new board")
             main.innerHTML = ''
             new_board()
        }
        } else {
            function flip_back(){
                let tile_1 = document.getElementById(memory_values[0])
                let tile_2 = document.getElementById(memory_values[1])
                    tile_1.classList.remove('open')
                    tile_1.classList.add('hide')
                    tile_2.classList.remove('open')
                    tile_2.classList.add('hide')
                
            }
            flip_back()
        }

    } 
    }
    
    
}


console.log(memory_values)
console.log(memory_tile)
console.log(cards_flipped)


new_board()







    



