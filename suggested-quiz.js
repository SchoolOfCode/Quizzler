async function getImage(topic) {
  let image = await fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${topic}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9ec856775cmsh18791d11e3541e2p1eeaf3jsn760b3c3d7241",
      "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
    },
  });
  myImage = await image.json();
  const newImage = document.createElement("img");
  newImage.src = myImage.value[0].thumbnailUrl;
  document.body.appendChild(newImage);
  console.log(myImage);
}
// getImage("Entertainment");
function playQuiz() {
  console.log("Playing a quiz!");
}
document.querySelector(".suggested-quiz").addEventListener("click", playQuiz);
function displaySuggestedQuizzes() {}

function displayQuiz() {
  let quizzesSuggestionSection = document.querySelector(".suggested-quizzes");
  let quizDiv = document.createElement("div");
  quizDiv.addEventListener("click", playQuiz);
  quizDiv.classList.add("suggested-quiz");
  quizzesSuggestionSection.appendChild(quizDiv);

  let quizImage = document.createElement("img");
  quizImage.src = "testPhoto.jpg";
  quizDiv.appendChild(quizImage);

  const quizHeader = document.createElement("h2");
  quizHeader.innerText = "Type of Quiz";
  quizDiv.appendChild(quizHeader);
}
