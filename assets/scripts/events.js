const button = document.querySelector("button");

const buttonClickHandler = () => {
  alert("Button was clicked!");
};

const anotherButtonClickHandler = () => {
  console.log("Button was clicked!");
};

// button.onclick = buttonClickHandler;

button.addEventListener("click", buttonClickHandler);
