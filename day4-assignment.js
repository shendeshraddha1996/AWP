function end(){
    alert("AWSOME");
}

let counter=1;
function increment(){
  
   let count= document.querySelector("#counterid");
   counter=counter+1;
   count.innerHTML=counter;
  
}

function decrement(){
    let count=document.querySelector("#counterid");
    counter=counter-1;
    count.innerHTML=counter;
   
}










