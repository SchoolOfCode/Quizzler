let gameScore = sessionStorage.getItem("gameScore");
console.log(gameScore);

let scoreDisplay = document.getElementById("score");
scoreDisplay.innerText = gameScore;

const return_homePage_btn = document.getElementById("return-home-btn");
return_homePage_btn.innerText = "Back to main page";
return_homePage_btn.addEventListener("click", () => (window.location.href = "../Home/index.html"));

async function createDadJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  const jokes = await response.json();
  const dadJokeSection = document.querySelector(".dad-jokes");
  let dadJoke = document.createElement("h2");
  dadJokeSection.appendChild(dadJoke);
  dadJoke.innerText = jokes.joke;
}
createDadJoke();
