const array=require("./main.js")
const http=require("http")
//console.log(a.list);
http.createServer((req,res)=>{
const x=JSON.stringify(array.list);
 res.end(x)
//const a="hello world"
//res.end(a);
}).listen(5600);