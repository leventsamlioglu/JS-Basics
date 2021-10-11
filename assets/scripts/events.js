const buttons = document.querySelectorAll("button");
console.log("buttons =>>>", buttons);

const buttonClickHandler = (event) => {
  event.target.disabled = true;
  console.log(event);
};

// const anotherButtonClickHandler = () => {
//   console.log("Button was clicked!");
// };

// button.onclick = buttonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// buttons.forEach((btn) => {
//   btn.addEventListener("click", buttonClickHandler);
// });

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

// button.addEventListener("click", anotherButtonClickHandler);

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", buttonClickHandler);
});

window.addEventListener("scroll", (event) => {
  console.log(event);
});
