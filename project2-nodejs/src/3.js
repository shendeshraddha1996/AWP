const Promise=require('bluebird');
const mysql=require('mysql');
const express=require('express');
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);
const app=express();

app.get('/',async(req,res)=>{
   
        try{
            const id=req.query.id;
            const username=req.query.username;
            const emailID=req.query.emailID;
            const password=req.query.password;
        const connection=mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'user'
        });
    
        await connection.connectAsync();
        let sql="insert into customer(id,username,emailID,password) values (?,?,?,?)";
        let result=await connection.queryAsync(sql,[id,username,emailID,password]);
        await connection.endAsync();
        //console.log(result);
        //return result;
        const json = { message: "Hurrrayyy, Record Added, Lets Celebrate!!" };
        res.json(json);
       }
        catch(err){
        console.log("error",err.message);
        }
   
});

app.listen(3000);
