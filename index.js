const express = require("express");
const fs = require("fs");
const app = express();
app.set("view engine", "ejs");
app.listen(3000, ()=>{
  console.log("Website Loaded");
});
app.get("*", async (req, res) =>{
  if(req.path.toLowerCase().endsWith(".css") || req.path.toLowerCase().endsWith(".js")) return res.sendFile(__dirname+"/views"+req.path);
  else try { return res.render("."+req.path);}catch{}
})