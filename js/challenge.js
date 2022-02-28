// Timer readout
let counter = document.getElementById("counter");
let seconds = 0;

document.addEventListener("DOMContentLoaded", function () {
  minusBtn = document.getElementById("minus");
  plusBtn = document.getElementById("plus");
  heartBtn = document.getElementById("heart");
  pauseBtn = document.getElementById("pause");

  pauseStatus = false;

  minusBtn.addEventListener("click", e => {
    seconds -= 1;
    counter.innerHTML = seconds;
  });

  plusBtn.addEventListener("click", e => {
    seconds += 1;
    counter.innerHTML = seconds;
  });

  heartBtn.addEventListener("click", e => {});

  pauseBtn.addEventListener("click", e => {
    if (pauseStatus == false) {
      pauseStatus = true;
      minusBtn.disabled = true;
      plusBtn.disabled = true;
      heartBtn.disabled = true;
    } else {
      pauseStatus = false;
      minusBtn.disabled = false;
      plusBtn.disabled = false;
      heartBtn.disabled = false;
    }
  });

  timer();

  // document.getElementById("minus").addEventListener("click"),
  //   () => console.log((seconds -= 1));
});

function timer() {
  counter.innerHTML = seconds;
  seconds += 1;

  setTimeout("timer()", 1000);
}
