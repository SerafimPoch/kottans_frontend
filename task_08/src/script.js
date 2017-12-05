let main = document.querySelector('main')
let memoryValues = []
let memoryTile = []
let cardsFlipped = 0

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

const newBoard = () => { 
    cardsFlipped = 0
    let store = shuffle(cards)
          store.forEach(x => {
           main.insertAdjacentHTML('beforeend',
               '<div class="flip-container ">\
               <div onclick="handleClick(this,\''+x.img+'\')" class="flipper " id=' + x.id + ' >\
               <div  class="front"></div>\
               <div  class="back '+x.img+'"></div>\
               </div>\
               </div>' 
               )    
            })                     
}

const hide = () =>{
    let tile1 = document.getElementById(memoryTile[0])
    let tile2 = document.getElementById(memoryTile[1])
        tile1.className = 'flipper hide'
        tile2.className = 'flipper hide'
        memoryValues = []
        memoryTile = []
}

const newGener = () =>{
    alert("You win!")
        main.innerHTML = ''
        newBoard()
}

const flipBack = () =>{
    let tile3 = document.getElementById(memoryTile[0])
    let tile4 = document.getElementById(memoryTile[1])
        tile3.classList.remove('open')
        tile4.classList.remove('open')
        memoryValues = []
        memoryTile = []
}

const handleClick= (x,y) => {

    if(memoryValues.length < 2){
        x.classList.add('open')
            
    if(memoryValues.length == 0 ){
        memoryValues.push(y)
        memoryTile.push(x.id)
       
    } else if(memoryValues.length == 1) {
        memoryValues.push(y)
        memoryTile.push(x.id)
        
        if(memoryValues[0] == memoryValues[1]  ){
            cardsFlipped += 2

            setTimeout(hide,800)

        if(cardsFlipped == cards.length){
               
            setTimeout(newGener,1200)
        }
        } else {
            
            setTimeout(flipBack,800)
        }

    } 
    }   
}

    newBoard()







    



