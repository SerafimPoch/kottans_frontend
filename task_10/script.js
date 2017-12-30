const key       = 'e2a4d8b55c5d115b04b00a5b2b95c1c9'
const button    = document.querySelector('.submit')
const buttonC   = document.querySelector('.celc')
const buttonF   = document.querySelector('.faren')
let   input     = document.querySelector('.input')

let temp_1      = document.getElementById('temperature_1')
let temp_2      = document.getElementById('temperature_2')
let temp_3      = document.getElementById('temperature_3')
let temp_4      = document.getElementById('temperature_4')
let temp_5      = document.getElementById('temperature_5')


let loc_1       = document.getElementById('location_1')

let data_1      = document.getElementById('data_1')
let data_2      = document.getElementById('data_2') 
let data_3      = document.getElementById('data_3')
let data_4      = document.getElementById('data_4')
let data_5      = document.getElementById('data_5')
let data_6      = document.getElementById('data_6')
let data_7      = document.getElementById('data_7')
let data_8      = document.getElementById('data_8')

let icon        = document.getElementById('icon-main')
let icon_1      = document.getElementById('icon_1')
let icon_2      = document.getElementById('icon_2')
let icon_3      = document.getElementById('icon_3')
let icon_4      = document.getElementById('icon_4')
let icon_5      = document.getElementById('icon_5')
let icon_6      = document.getElementById('icon_6')
let icon_7      = document.getElementById('icon_7')
let icon_8      = document.getElementById('icon_8')

let humidity_1  = document.getElementById('humidity_1')

const options   = { weekday: 'long', day: 'numeric' }
   


const updateByZip = (zip) => {
    let url = 'http://api.openweathermap.org/data/2.5/forecast?'
        + 'zip=' + zip + '&APPID=' + key
    sendRequest(url) 
}

const Faren = (c) => Math.round(c * (9/5) - 459.67)

const Celc = (k) => Math.round(k - 273.15)

const sendRequest = (url) => {
    
    let link = fetch(url)
        .then(data => data.json())
            .then(data =>{
        let main = () => {
            let weather = {}
                let first   = data.list[1].dt_txt
                let second  = data.list[4].dt_txt
                let third   = data.list[10].dt_txt
                let fourth  = data.list[18].dt_txt
                let fifth   = data.list[26].dt_txt
                         weather.icon      = data.list[0].weather[0].id
                         weather.humidity  = data.list[0].main.humidity
                         weather.loc       = data.city.name
                         weather.data_1    = new Date(first).toLocaleString('ru', options)
                         weather.data_2    = new Date(second).toLocaleString('ru', options)
                         weather.data_3    = new Date(third).toLocaleString('ru', options)
                         weather.data_4    = new Date(fourth).toLocaleString('ru', options)
                         weather.data_5    = new Date(fifth).toLocaleString('ru', options)
                         weather.temp_1    = Celc(data.list[1].main.temp)
                         weather.temp_2    = Celc(data.list[4].main.temp)
                         weather.temp_3    = Celc(data.list[10].main.temp)
                         weather.temp_4    = Celc(data.list[18].main.temp)
                         weather.temp_5    = Celc(data.list[26].main.temp)
                    update(weather)
        }
            buttonF.addEventListener('click', ()=> {
                    let weather = {}
                        let first = data.list[1].dt_txt
                        let second = data.list[2].dt_txt
                    weather.icon      = data.list[0].weather[0].id
                    weather.humidity  = data.list[0].main.humidity
                    weather.loc       = data.city.name
                    weather.data_1    = new Date(first).toLocaleString('ru', options)
                    weather.data_2    = new Date(second).toLocaleString('ru', options)
                    weather.temp_1    = Faren(data.list[0].main.temp)
                    weather.temp_2    = Faren(data.list[1].main.temp)
                update(weather)
                })

            buttonC.addEventListener('click',()=>{
                    main()
            })

        main()

            })

}

const update = (weather) => {
    data_1.innerHTML      = weather.data_1
    data_2.innerHTML      = weather.data_2
    data_3.innerHTML      = weather.data_3
    data_4.innerHTML      = weather.data_4
    data_5.innerHTML      = weather.data_5
    data_6.innerHTML      = weather.data_6

    temp_1.innerHTML      = weather.temp_1
    temp_2.innerHTML      = weather.temp_2
    temp_3.innerHTML      = weather.temp_3
    temp_4.innerHTML      = weather.temp_4
    temp_5.innerHTML      = weather.temp_5

    loc_1.innerHTML       = weather.loc
    icon.src              = 'img/' + weather.icon + '.svg'
    humidity_1.innerHTML  = weather.humidity
    
}  

const showPosition = (position) => {
    updateByGeo(position.coords.latitude, position.coords.longitude)
}
 
const updateByGeo = (lat, lon) => {
    let url = 'http://api.openweathermap.org/data/2.5/forecast?'
    +
	"lat=" + lat +
	"&lon=" + lon +
	"&APPID=" + key
    sendRequest(url)  
}

    window.addEventListener('load', ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition)
        } else {
            let zip = prompt('Enter yur zip code')
            updateByZip(zip)
        }
    })












// data_1.innerHTML = new Date('2017-12-27 18:00:00').toLocaleString('en-US', options) // date on Api dt_txt





   
    