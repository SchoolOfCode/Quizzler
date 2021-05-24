let gameScore = sessionStorage.getItem("gameScore");
console.log(gameScore);

let scoreDisplay = document.getElementById("score");
scoreDisplay.innerText = gameScore;

const return_homePage_btn = document.getElementById("return-home-btn");
return_homePage_btn.innerText = "Back to main page";
return_homePage_btn.addEventListener(
  "click",
  () => (window.location.href = "../Home/index.html")
);
