const main = document.querySelector('main')


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




const random = () => {
     
    let store = shuffle(cards)
         return store.map(x => {
           main.insertAdjacentHTML('beforeend',
               '<div class="flip-container">\
               <div class="flipper">\
               <div class="front"></div>\
               <div onclick="handleClick()" class="back '+x.img+'"></div>\
               </div>\
               </div>' 
               )    
            })           
}

random()
const handleClick = () => {
   
}



    



