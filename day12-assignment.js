

  let callAjax=function(){
      let xhr =new XMLHttpRequest();
     
      xhr.onload=()=>{
          let json1 =JSON.parse(xhr.responseText);
        mydomlogic(json1);
        //console.log(json1);
      };
    
    xhr.open("GET","https://reqres.in/api/users?page=2");
  
    xhr.send();
     };

    

    let mydomlogic=function(json1){
        console.log(json1);
       let main=document.querySelector("#mainb");
        for(i=0;i<json1.data.length;i++){
            const item=json1.data[i];
            let c=main.children[0].cloneNode(true);
            c.innerHTML=item.first_name +' '+item.id;
            main.appendChild(c);
        }
     };