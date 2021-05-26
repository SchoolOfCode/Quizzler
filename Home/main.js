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
defaultOption.label = "TOPIC";
category_dropdown.add(defaultOption);

async function fetchCategory() {
  let request = await fetch("https://opentdb.com/api_category.php"); //categories
  let data = await request.json();
  return data;
}

function cleanCategory(category) {
  return (
    category.id !== 13 &&
    category.id !== 19 &&
    category.id !== 24 &&
    category.id !== 25 &&
    category.id !== 26 &&
    category.id !== 30
  );
}
function loadCategories(data) {
  let category = data.trivia_categories;
  category = category.filter(cleanCategory);
  for (let i = 0; i < category.length; i++) {
    let option = document.createElement("option");
    option.text = category[i].name;
    option.value = category[i].id;
    categoryArray.push(category[i].id);
    category_dropdown.add(option);
  }
  generateQuizzes();
}
fetchCategory()
  .then((data) => loadCategories(data))
  .catch((err) => console.log(err));

function setCategoryValue() {
  let e = document.getElementById("category-dropdown");
  category = e.options[e.selectedIndex].value;
  if (category == 29) {
    // comic category disables boolean
    console.log("boolean disabled");
    document.getElementById("bool").disabled = true;
  }
}
category_dropdown.addEventListener("change", setCategoryValue);

// // // TRUE/FALSE or MULTIPLE // // // // // //
function setGameModeValue() {
  let e = document.getElementById("gamemode-dropdown");
  gameMode = e.options[e.selectedIndex].value; // category id passed on to url
  if (gameMode === "boolean") {
    document.getElementById("difficulty-dropdown").disabled = true;
    console.log("difficulty disabled");
  }
  console.log(gameMode);
}

const gameMode_dropdown = document.getElementById("gamemode-dropdown");
gameMode_dropdown.addEventListener("change", setGameModeValue);

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
  console.log("fetchQuiz original URL is:", quizUrl);

  if (gameMode === "boolean") {
    quizUrl = `?amount=${numOfQuestions}&category=${category}&gameMode=${gameMode}`;
    console.log("generatedQuiz boolean URL is:", quizUrl);

    window.location.href = "../Boolean/boolean.html" + quizUrl;
  } else {
    window.location.href = "../Question/question.html" + quizUrl;
  }
}
const generate_quiz_btn = document.getElementById("generate-quiz-btn");
generate_quiz_btn.addEventListener("click", fetchQuiz);

async function getRandomQuiz() {
  console.log(categoryArray);

  category = categoryArray[Math.floor(Math.random() * categoryArray.length)];
  console.log("category ID:", category);

  let quizUrl = `?amount=${numOfQuestions}&category=${category}&gameMode=${gameMode}`;
  console.log("quizURL:", quizUrl);

  if (gameMode === "boolean") {
    window.location.href = "../Boolean/boolean.html" + quizUrl;
  } else {
    window.location.href = "../Question/question.html" + quizUrl;
  }
}

const generate_random_btn = document.getElementById("random-quiz-btn");
generate_random_btn.addEventListener("click", getRandomQuiz);
