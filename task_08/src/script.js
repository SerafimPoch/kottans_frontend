const main    = document.querySelector('main')
const flipper = document.querySelector('.flipper')
const flip_container = document.querySelector('.flip-container')
const front   = document.querySelector('.front')
const cats_0 = document.querySelector('.cat_0')

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
    let store = shuffle(cards)
         return store.map(x => {
           main.insertAdjacentHTML('beforeend',
               '<div class="flip-container">\
               <div class="flipper">\
               <div onclick="handleClick(this,\''+x.img+'\')" class="front"></div>\
               <div class="back '+x.img+'"></div>\
               </div>\
               </div>' 
               )    
            })        
                 
}

const handleClick= (x,y) => {
   x.classList.add(y)
}

new_board()









    



