console.log("testing tania's branch");

// base this on user input 
let numOfQuestions = 10;
let category = 9;
let difficulty = "easy";
let type = "multiple";
let url = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`;

console.log(url);

async function testAPI() {
  let request = await fetch(url);
  let data = request.json();
  console.log(data);
}

testAPI();

