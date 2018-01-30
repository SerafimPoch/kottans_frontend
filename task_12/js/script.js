const clock = () => {
    let time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();

const harold = (standIn) => {
    return standIn < 10 ? 
                standIn = '0' + standIn
                        :
                standIn
          }
document.querySelector('#time').innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
    
}
setInterval(clock, 1000);