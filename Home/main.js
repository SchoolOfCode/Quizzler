// variables
let numOfQuestions = 10;
let category = 9;
let difficulty = "easy";
let gameMode = "multiple";
const categoryArray = [];

// // //  CATEGORY  // // //
const category_dropdown = document.getElementById("category-dropdown");
category_dropdown.length = 0;
category_dropdown.selectedIndex = 0;

let defaultOption = document.createElement("option");
// defaultOption.disabled = true; // makes it an optgroup!
defaultOption.label = "TOPIC";
category_dropdown.add(defaultOption);

async function fetchCategory() {
  let request = await fetch("https://opentdb.com/api_category.php"); //categories
  let data = await request.json();
  return data;
}

function loadCategories(data) {
  let category = data.trivia_categories;
  for (let i = 0; i < category.length; i++) {
    let option = document.createElement("option");
    option.text = category[i].name;
    option.value = category[i].id;
    categoryArray.push(category[i].id);
    category_dropdown.add(option);
  }
}
fetchCategory()
.then((data) => loadCategories(data))
.catch((err) => console.log(err));
// fetchCategory().then(loadCategories).catch((err => console.log(err))); this works too :)

function setCategoryValue() {
  let e = document.getElementById("category-dropdown");
  category = e.options[e.selectedIndex].value;
  console.log(category);
}
category_dropdown.addEventListener("change", setCategoryValue);

// // // TRUE/FALSE or MULTIPLE // // // // // //
function setGameModeValue() {
  let e = document.getElementById("gamemode-dropdown");
  gameMode = e.options[e.selectedIndex].value; // category id passed on to url
  console.log(gameMode);
}

const gameMode_dropdown = document.getElementById("gamemode-dropdown");
gameMode_dropdown.addEventListener("change", setGameModeValue);

// // // NUMBER OF QUESTIONS // // // // // //
function setNumOfQuestions() {
  let e = document.getElementById("num-questions");
  numOfQuestions = e.value;
  // if (numOfQuestions < 10 || numOfQuestions > 50) {
  //   alert("Number of questions must be between 10 and 50");  annoying
  // }
  console.log(numOfQuestions);
}
const num_questions = document.getElementById("num-questions");
num_questions.addEventListener("input", setNumOfQuestions);

// // // SET DIFFICULTY // // // // // //
function setDifficulty() {
  let e = document.getElementById("difficulty-dropdown");
  difficulty = e.value;
  console.log(difficulty);
}
const difficulty_dropdown = document.getElementById("difficulty-dropdown");
difficulty_dropdown.addEventListener("change", setDifficulty);

async function fetchQuiz() {
  let quizUrl = `?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&gameMode=${gameMode}`;
  console.log(quizUrl);
  if (gameMode === "boolean") {
    window.location.href = "../Boolean/boolean.html" + quizUrl;
  } else {
    window.location.href = "../Question/question.html" + quizUrl;
  }
}
const generate_quiz_btn = document.getElementById("generate-quiz-btn");
generate_quiz_btn.addEventListener("click", fetchQuiz);

async function getRandomQuiz() {
  console.log(categoryArray);
  const difficultyArray = ["easy", "medium", "difficult"];
  difficulty = difficultyArray[Math.floor(Math.random() * difficultyArray.length)];
  
  const gameModeArray = ["multiple", "boolean"];
  gameMode = gameModeArray[Math.floor(Math.random() * gameModeArray.length)];
  
  numOfQuestions = Math.floor(Math.random() * (50 - 10 + 1)) + 10; // between 10 and 50
  
  category = categoryArray[Math.floor(Math.random() * categoryArray.length)];
  console.log(category);
  let quizUrl = `?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&gameMode=${gameMode}`;
  console.log(quizUrl);

  if (gameMode === "boolean") {
    window.location.href = "../Boolean/boolean.html" + quizUrl;
  } else {
    window.location.href = "../Question/question.html" + quizUrl;
  }
}

const generate_random_btn = document.getElementById("random-quiz-btn");
generate_random_btn.addEventListener("click", getRandomQuiz);

console.log()