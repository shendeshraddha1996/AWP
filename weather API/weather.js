function weathercheck(){
   // let city="pune";
   
   let city=document.querySelector("#cityid").value;
    let xhr=new XMLHttpRequest();
    const url="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=0d36647b25703c9cdc5720d4a912ac94&q="+city;
    xhr.open("get",url);
    xhr.onload=()=>{
        const refjson=JSON.parse(xhr.responseText);
       // console.log(refjson.weather[0].main);
        mydomlogic(refjson);
      
    }
    xhr.send();
  
}


let mydomlogic=function(refjson){
let item=refjson;
console.log(item.main);
 let parent=document.querySelector("#parentblock");
 let newelement=parent.children[0];
 newelement.style.display="flex";
//newelement.children[0].innerHTML="CITY : "+item.name+"<br>"  +"Temperature : " +item.main.temp +" degree"+"<br>"
                                  // +"Weather : "+item.weather[0].main+"<br>Humidity : "+item.main.humidity ;
newelement.children[0].children[0].innerHTML="CITY : "+item.name ;
newelement.children[0].children[1].innerHTML="Temperature : " +item.main.temp+" degree";
newelement.children[0].children[2].innerHTML="Weather : "+item.weather[0].main;
newelement.children[0].children[3].innerHTML="Humidity : "+item.main.humidity ;
parent.appendChild(newelement);
document.querySelector("#cityid").value=" ";
//newelement.children[0].innerHTML=" ";

};