function details() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  let gender = prompt("What is your gender");

  if (gender === "female") {
    alert("Welcome to the Glitz and Glam " + name + "!!✨");
  } else {
    alert(name + ", unfortunately this is not for you!😖");
  }
}

let shopButton = document.querySelector("button");
shopButton.addEventListener("click", details);
