let weathercheck =()=>{

   let city=$('#cityid').val();
    let url="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=0d36647b25703c9cdc5720d4a912ac94&q="+city;
    $.ajax(url).done((data)=>{
        $("#childiv").children().first().html("CITY : "+data.name);
        $("#childiv").children().first().next().html("Temperature : " +data.main.temp+" degree");
        $("#childiv").children().first().next().next().html("Weather : "+data.weather[0].main);
        $("#childiv").children().last().html("Humidity : "+data.main.humidity);
    });



};