// const clock = document.getElementById('clock');
// const clockWidth = clock.clientWidth;
const secondHand = document.getElementById('second');
const minuteHand = document.getElementById('minute');
const hourHand = document.getElementById('hour');
let currentRotation = 0;

secondHand.style.transformOrigin = "bottom";
minuteHand.style.transformOrigin = "bottom";
hourHand.style.transformOrigin = "bottom";

setInterval(function() {
  console.log('tick');
  currentRotation++;
  secondHand.style.transform = `rotate(${currentRotation}deg)`;
  minuteHand.style.transform = `rotate(${currentRotation / 60}deg)`;
  hourHand.style.transform = `rotate(${currentRotation / 360}deg)`;
}, 10);

/*

trying to a

*/

// for (let i = 0; i < 12; i++) {
//   // debugger;
//   const num = document.createElement('div');
//   num.innerText = i + 1;
//   num.classList.add('num');
//   // num.style.transform = "translate(30deg)";
//   num.setAttribute('id', i);
//   if (i < 6) {
//     num.style.top = `${((i + 1) * clockWidth / 6) - 30}px`;
//   } else {
//     num.style.top = `${clockWidth - ((i - 6) * clockWidth / 6)}px`;
//   }

//   if ((i >= 0 && i <= 3)) {
//     num.style.left = `${clockWidth - ((clockWidth / 6) * (3 - i - 1))}px`;
//   }
//   // debugger;
//   clock.appendChild(num);
// }

