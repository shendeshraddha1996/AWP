
window.addEventListener('load',()=>{
let xhr=new XMLHttpRequest();
xhr.onload=()=>{
         let json1=JSON.parse(xhr.responseText);
        xyz(json1);
    };
    const url=`https://reqres.in/api/users?page=2`;
    xhr.open("GET",url);
    xhr.send();
});



let xyz=function(json1){
    var pbc=document.querySelector("#parentblock");
    for(let i=0;i<json1.data.length;i++){
        const item=json1.data[i];
       console.log(json1.data);
        let neweleemt=pbc.children[0].cloneNode(true);
        neweleemt.style.display="flex";
      // neweleemt.children[0].src= item.avatar ;
      //neweleemt.children[0].children[0].innerHTML="id "+ item.id+"<br>";
       //neweleemt.children[0].children[1].innerHTML=item.first_name +" "+item.last_name;

       neweleemt.children[0].innerHTML="<img src="+ item.avatar +"></img>" +"id: " + item.id + "<br>" + "NAME: " + item.first_name+" "+item.last_name;

        pbc.appendChild(neweleemt);
    }   
}





