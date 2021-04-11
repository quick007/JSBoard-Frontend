const express = require("express");
const fs = require("fs");
const app = express();
var themedata;

app.set("view engine", "ejs");
app.listen(3000, ()=>{
  console.log("Website Loaded");
});
app.get("*", async (req, res) =>{
  themedata = JSON.parse(fs.readFileSync("./config.json", "utf8"));
  if(req.path.toLowerCase().endsWith(".css") || req.path.toLowerCase().endsWith(".js")) return res.sendFile(__dirname+"/views"+req.path);
  else if (!fs.existsSync("./views"+req.path) && !fs.existsSync("./views"+req.path+".ejs")) return res.render("404")
  else try { return res.render("."+req.path, {theme: themedata});}catch{}
})

app.use(function(req, res, next){
  res.status(404).render("404");
});