function pickoption(){
  let value = document.getElementById("dbengine").value;
  if(value==="sql"){
    document.getElementById("mysql").style.display = "none";
    document.getElementById("mongodb").style.display = "none";
  } else if (value==="mongodb"){
    document.getElementById("mysql").style.display = "none";
    document.getElementById("mongodb").style.display = "";
  }else if (value==="mysql"){
    document.getElementById("mysql").style.display = "";
    document.getElementById("mongodb").style.display = "none";
  }
}

