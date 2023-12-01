document.getElementById("time").innerHTML = moment().format("LTS")

function time(){
  
document.getElementById("time").innerHTML = moment().format("LTS")
}

setInterval(time , 1000)
