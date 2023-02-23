console.log("hello")


function updateTime(){
    var d = new Date();
    var n = d.toLocaleTimeString([], {
        hour12: false,
      });
    timeElement = document.getElementById("time")
    timeElement.innerHTML = n;
    
}

setInterval(updateTime, 50);

