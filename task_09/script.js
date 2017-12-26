const key = 'e2a4d8b55c5d115b04b00a5b2b95c1c9'
const button = document.querySelector('.submit')
const input = document.querySelector('.input')
let city = '' 




button.addEventListener('click',()=>{  
    city += input.value
        input.value = ''
        
})



   
    