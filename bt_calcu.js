// const zero = document.querySelector("#zero");
// const one = document.querySelector("#one");
// const two = document.querySelector("#two");
// const three = document.querySelector("#three");
// const four = document.querySelector("#four");
// const five = document.querySelector("#five");
// const six = document.querySelector("#six");
// const seven = document.querySelector("#seven");
// const eight = document.querySelector("#eight");
// const nine = document.querySelector("#nine");
// const plus = document.querySelector("#plus");
// const minus = document.querySelector("#minus");
// const multiply = document.querySelector("#multiply");
// const divide = document.querySelector("#divide");
// const equal = document.querySelector("#equal");
// const del = document.querySelector("#del");
const display = document.querySelector("#display");
let currenresult = "";

// zero.addEventListener("click", () => {
//   currenresult += "0";
//   display.innerHTML = currenresult;
// });
// one.addEventListener("click", () => {
//   currenresult += "1";
//   display.innerHTML = currenresult;
// });
// two.addEventListener("click", () => {
//   currenresult += "2";
//   display.innerHTML = currenresult;
// });
// three.addEventListener("click", () => {
//   currenresult += "3";
//   display.innerHTML = currenresult;
// });
// four.addEventListener("click", () => {
//   currenresult += "4";
//   display.innerHTML = currenresult;
// });
// five.addEventListener("click", () => {
//   currenresult += "5";
//   display.innerHTML = currenresult;
// });
// six.addEventListener("click", () => {
//   currenresult += "6";
//   display.innerHTML = currenresult;
// });
// seven.addEventListener("click", () => {
//   currenresult += "7";
//   display.innerHTML = currenresult;
// });
// eight.addEventListener("click", () => {
//   currenresult += "8";
//   display.innerHTML = currenresult;
// });
// nine.addEventListener("click", () => {
//   currenresult += "9";
//   display.innerHTML = currenresult;
// });
// plus.addEventListener("click", () => {
//   currenresult += "+";
//   display.innerHTML = currenresult;
// });
// minus.addEventListener("click", () => {
//   currenresult += "-";
//   display.innerHTML = currenresult;
// });
// divide.addEventListener("click", () => {
//   currenresult += "/";
//   display.innerHTML = currenresult;
// });
// multiply.addEventListener("click", () => {
//   currenresult += "*";
//   display.innerHTML = currenresult;
// });
// equal.addEventListener("click", () => {
//   const result = eval(currenresult);
//   display.innerHTML = String(result);
// });
// del.addEventListener("click", () => {
//   currenresult = "";
//   display.innerHTML = currenresult;
// });

// const array = [
//   zero,
//   one,
//   two,
//   three,
//   four,
//   five,
//   six,
//   seven,
//   eight,
//   nine,
//   plus,
//   minus,
//   multiply,
//   divide,
//   equal,
//   display,
//   del,
// ];

const DuyVipro = document.querySelectorAll(".button");
const array = [];
DuyVipro.forEach((Element) => {
  array.push(Element);
});

array.forEach((Element) => {
  Element.addEventListener("click", (event) => {
    switch (true) {
      case event.target.value != "=":
        if (event.target.value === "del") {
          currenresult = "";
        } else {
          currenresult += `${event.target.value}`;
        }
        display.innerHTML = currenresult;
        break;

      default:
        const result = eval(currenresult);
        display.innerHTML = String(result);
        break;
    }
  });
});
