const express = require("express");
const fs = require("fs");
const app = express();
var themedata;

app.set("view engine", "ejs");
app.listen(3000, ()=>{
  console.log("Website Loaded");
});
app.get("*", async (req, res) =>{
  if(req.path === "/favicon.ico") return res.send("404");
  themedata = JSON.parse(fs.readFileSync("./config.json", "utf8"));
  if(req.path.toLowerCase().endsWith(".css") || req.path.toLowerCase().endsWith(".js")) return res.sendFile(__dirname+"/views"+req.path);
  else try { return res.render("."+req.path, {theme: themedata});}catch{}
})