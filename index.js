let input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let inputValue = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X") {
      buttonText = "*";
      inputValue += buttonText;
      input.value = inputValue;
    } else if (buttonText == "C") {
      inputValue = "";
      input.value = inputValue;
    } else if (buttonText == "=") {
      input.value = eval(inputValue);
    } else {
      inputValue += buttonText;
      input.value = inputValue;
    }
  });
}

const sun = document.querySelector(".bi-brightness-high");
const moon = document.querySelector(".bi-moon");
const body = document.querySelector("body");
const calculator = document.querySelector(".calculator");

moon.addEventListener("click", () => {
  body.style.backgroundColor = "#000";
  moon.style.display = "none";
  sun.style.display = "block";
  calculator.classList.add("dark");
  calculator.classList.remove("shadow-lg");
  buttons.forEach((button) => {
    button.classList.remove("shadow");
  });
});
sun.addEventListener("click", () => {
  body.style.backgroundColor = "#fff";
  sun.style.display = "none";
  moon.style.display = "block";
  calculator.classList.remove("dark");
  calculator.classList.add("shadow-lg");
  buttons.forEach((button) => {
    button.classList.add("shadow");
  });
});
