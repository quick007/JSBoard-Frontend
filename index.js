const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.listen(3000);
app.get("*", async (req, res) =>{
  if(req.path.toLowerCase().endsWith(".css") || req.path.toLowerCase().endsWith(".js")) return res.sendFile(__dirname+"/views"+req.path);
  else return res.render("."+req.path);
})