const Promise=require("bluebird");
var mysql=require("mysql");
    Promise.promisifyAll(require("mysql/lib/Connection").prototype);
    Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_configuration={
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'user'
}

const readdata=async()=>{
    try{
        
        const connection=mysql.createConnection(DB_configuration);
        await connection.connectAsync();

      let sql="select * from customer";
      let output=await connection.queryAsync(sql);
        console.log("success");
       
        await connection.endAsync();

        console.log(output);
       return output ;
    }catch(err){
        console.log("erre",err.message);
    }
}

readdata();