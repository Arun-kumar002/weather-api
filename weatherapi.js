const app_key="eb3898f59648758ae03f6eb59ba99c59";
let cityname=document.querySelector("#cityname");
let temp=document.querySelector("#temp")

//base url get from web guide weather and forecast and api call link 
// live weather and forcast  and  current weather apidoc  below api call link present

let input=document.querySelector("input");
input.addEventListener("keyup",e=>{
    let value=e.target.value;
    if(e.key==="Enter"){
        getewatherReport(value);
    }
    

});

// async function getewatherReport(city){
//     let baseurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${app_key}`;
//     let data=await fetch(baseurl);
//     let format=await data.json(); //instead doing individual go for loops

//     cityname.innerHTML=city;
//     temp.innerHTML=`${Math.floor(format.main.temp-273.15)}&deg;c`;
   
    
// }
//another way
let main=document.querySelector("#content")
async function getewatherReport(city){
    let baseurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${app_key}`;
    let data=await fetch(baseurl);
    let format=await data.json();
    let weatherData=format.weather;
    let out="";
    for(let weather of weatherData){
        out+=`
        <h1 class='cityname'>${format.name}</h1>
        <h2 class='temp'>${Math.round(format.main.temp-273.15)}&deg;C </h2>
        <footer >
        <div class="icon">
        <img src="http://openweathermap.org/img/w/${weather.icon}.png"/>
        ${weather.description}</div>
        <div id='main'>${weather.main}</div>
       
        </footer>
        `;
        main.innerHTML=out;
       let input=document.querySelector("#input");
       input.value="";
       console.log(input);

    }


}

async function getcurrentposition(){
    window.navigator.geolocation.getCurrentPosition(async({coords}) => {
        let lat=coords.latitude;
        let long=coords.longitude;
        console.log(lat);
        console.log(long);
        
        let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${app_key}`;
        let data=await window.fetch(url);
        let res=await data.json();
        main.innerHTML=`<h1 class='cityname'>${res.name}</h1>
        <h2 class='temp'>${Math.round(res.main.temp-273.15)}&deg;C</h2>
        
        `;
        
    



  

    })
}
window.addEventListener("DOMContentLoaded",getcurrentposition)





//  <div id='desc'>${weather.description}</div>