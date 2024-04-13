const API_KEY = "db587b0cd002554369c56af8c9075391";

function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} C`
    document.body.appendChild(newPara);
}

async function fetchWeatherDetails(){
   try{
    let city= "Kolkata";
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    console.log(data);
    renderWeatherInfo(data);
   }
   catch(err){
    //handle error
   }
}


function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No Geolocation Support");
    }
}

function showPosition(position){
    let lat= position.coords.latitude;
    let longi= position.coords.longitude;

    console.log(lat);
    console.log(longi);
}

