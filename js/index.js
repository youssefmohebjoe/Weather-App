let searchInput=document.querySelector('input');
let searchBtn=document.querySelector('.search-button button');


async function getTemp(x) {
    try {
        let response = await  fetch(`https://api.weatherapi.com/v1/forecast.json?key=d362fd1e5fec4d28bf6101253242506&days=3&q=${x}`, {
            cache: "default",
        });
        let data = await response.json();
        console.log(data);
        displayTemp(data)
    }
    catch (error) {
        
        }
}
// getTemp();
const days=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
const months=[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ]


searchInput.addEventListener('input' , function () {
  getTemp(searchInput.value)
})
function displayTemp(response){
    let cartona = ``
    for(let i=0;i<response.forecast.forecastday.length;i++){
        let date = new Date(response.forecast.forecastday[i].date)     
        if(i==0){
            cartona+=`
            <div class="card my-5 col-md-3" id="">
                    <div class="card-heading d-flex justify-content-between">
                        <h3>${days[date.getDay()]}</h3>
                        <h3>${date.getDate()}${months[date.getMonth()]}</h3>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${response.location.name}</h5>
                        <div class="degree">${response.forecast.forecastday[i].day.maxtemp_c} <sup>o</sup> C</div><br>
                        <div class="shape"><img src = ${response.forecast.forecastday[i].day.condition.icon} width="80px" alt="/>/div>
                        <div class="fa-fade condition text-info">${response.forecast.forecastday[i].day.condition.text}</div><br>
                        <div class="info">
                            <i class="fa-solid fa-umbrella fa-shake" style="color: #bfc1c8;"></i><span>20%</span>
                            <i class="fa-solid fa-wind fa-shake" style="color: #bfc1c8;"></i><span>18km/h</span>
                            <i class="fa-solid fa-compass fa-shake" style="color: #bfc1c8;"></i><span>East</span>
                        </div>
                    </div>
                </div>
            `
        }
        else{
            cartona+=`
            <div class="card middle my-5 col-md-3">
                        <div class="card-heading d-flex justify-content-between">
                        <h3>${days[date.getDay()]}</h3>
                        <h3>${date.getDate()}${months[date.getMonth()]}</h3>
                    </div>
                        <div class="card-mid-body text-center">
                            <img class="fa-bounce" src=${response.forecast.forecastday[i].day.condition.icon} alt="condition image">
                            <div class="day-temp">${response.forecast.forecastday[i].day.maxtemp_c}</div>
                            <div class="night-temp">${response.forecast.forecastday[i].day.mintemp_c}</div><br>
                            <div class="fa-fade condition text-info">${response.forecast.forecastday[i].day.condition.text}</div><br>
                        </div>
                    </div>
            `
        }

    }
    document.querySelector('#rowData').innerHTML = cartona;
}
async function hhh(){
    try {
        let response = await  fetch(`https://api.weatherapi.com/v1/forecast.json?key=d362fd1e5fec4d28bf6101253242506&days=3&q=giza`, {
            cache: "default",
        });
        let data = await response.json();
        console.log(data);
       
    }
    catch (error) {
        
        }
}

hhh()