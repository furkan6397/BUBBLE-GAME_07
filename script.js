//game//
var timer = 60;
var score = 0;
var rnn = 0;
function getscore() {
  score += 10;
  document.querySelector("#Scoreval").textContent = score;
}
function getht() {
  rnn = Math.floor(Math.random() * 10);
  document.querySelector("#HITS").textContent = rnn;
}
function makebubble() {
  var malik = "";
  for (var i = 1; i < 100; i++) {
    var mk = Math.floor(Math.random() * 10);
    malik += `<div id="buble5">${mk}</div>`;
  }
  document.querySelector("#penalbot").innerHTML = malik;
}
function runTimer() {
  var timers = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer12").textContent = timer;
    } else {
      clearInterval(timers);
      document.querySelector("#penalbot").innerHTML = `<h1> GAME OVER</h1>`;
    }
  }, 1000);
}
document.querySelector("#penalbot").addEventListener("click", function (dtl) {
  var clicknum = Number(dtl.target.textContent);
  if (clicknum == rnn) {
    getscore();
    makebubble();
    getht();
  }
});
runTimer();
makebubble();
getht();
getscore();
