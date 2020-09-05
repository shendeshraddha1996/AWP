const express=require('express');
const app=express();
app.get("/search", (req, res) => {
   const id = req.query.id;
   const username = req.query.username;
  
    const json = { id: 1, title: "shraddha" };
    res.json(json);
  });
app.listen(3000);
