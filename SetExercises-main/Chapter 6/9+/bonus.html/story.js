function revealMess() {
    document.getElementById("hidden message").style.display = 'block';
}

function countDown() {
    var currentVal = document.getElementById("CountDownButton").innerHTML;
    var newVal = currentVal - 1;
    document,getElementById("countDownButton").innerHTML = newVal;
}

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);