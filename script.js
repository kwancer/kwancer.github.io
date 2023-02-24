console.log("hello")
var popup = document.getElementsByClassName('popup')[0];
var closeBtn = document.getElementById('close-btn');
var content = document.getElementsByClassName("content")[0];



function updateTime(){
    var d = new Date();
    var n = d.toLocaleTimeString([], {
        hour12: false,
      });
    timeElement = document.getElementById("time")
    timeElement.innerHTML = n;
}


console.log(popup)

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  content.style.display = 'block';
  console.log("wowowowowow")
});

window.addEventListener('load', () => {
    popup.style.display = 'flex';
    content.style.display = 'none';
    console.log("wowowowowow")
});


setInterval(updateTime, 50);
