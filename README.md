[![Netlify Status](https://api.netlify.com/api/v1/badges/29dcab46-375d-41ae-bb99-abde34864faf/deploy-status)](https://app.netlify.com/sites/quizler8/deploys)

[LIVE WEBSITE](https://quizler8.netlify.app/)

*netflify not working since index.html is in group "Home"*

# w8_team-project-java-lamps
w8_team-project-java-lamps-wk-8-9 created by GitHub Classroom

##### Wednesday 23rd May

Last bugs to solve
Merge all braches and get index.html out of Home for Netlify hosting
Finish Canva slides

##### Tuesday 22nd May

Final touches and testing
End Page finalised
Suggested quizes finalised
Encoding of special caracters fixed
Fix issue with mixed questions which causes the quiz page to crash

##### Monday 21st May

Start of the merge in the main of the different functionalities
Solve some issues linked to the inconsistent number of questions for each category (level, game mode)

###### TO DO LIST - TOMORROW
- URGENT: Each person has to go through the 24 quiz categories and test all the different parameters. Please write down the max number of questions each category has, whether it has all the levels, both game modes etc. @Clarisse maybe you can share the screenshot you took ~ I (Tania) will start with the first 6 categories (array 0-5). Please say which one you will do to avoid duplicates
- CANVA slides to present our project: Sarah will create it but we should all contribute slides. We will need to provide  a) demo of the website b) things we learned c) challenges we face

###### Individual todos: Edit if anything else comes to mind
- @Sara M all of the above PLUS 1) media queries for the homepage so that is is responsive 2) test accessibility with lighthouse
- @Tania All of the above PLUS 1) help with styling (color and border radius of buttons) 2) fix Netflify or set up Github pages
- @Clarisse All of the above plus 1) fix the double appearance of questions 2) removing the weird quotes from questions
- @Toby Smith All of the above plus 1) revolve conflicts for your pull request ASAP so Clarisse can link your work to the questions page

##### Sunday 23rd May

Individula coding on each tasks

##### Saturday 22nd May

Hackthon for our full day session
Solved merge conflicts in the morning linked to the various branches off the main
Worked on our buttons functionality in the afternoon: how to link main.js to question.js and save the URL
Did some debugging on the getRandomQuiz Button

##### Friday 21st May

Everyone is working on their own parts of the code as defined by the issues and tasks on GitHub/Projects.

##### Thursday 20th May

- Agreed on the splitting of the tasks (will reflect on the Projects tab)
- Created a pseudo code file to help with the coding
- Finished setting up the base files for programming

##### Wednesday 19th May

- Color scheme chosen: https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=304FFE&secondary.color=FFD600
- Primary font: Roboto
- Secondary font: Lato
- Logo created using wix
- Name chose: Quizler


##### Tuesday 18th May

Ideas for the app:
Display 3 quizes on the home page that the player can just click on

API:
Display a dad joke during the game (maybe create a 5th button)

Nice quiz website:
https://kids.nationalgeographic.com/games/quizzes


All categories displayed
User get to chose quiz mode: multiple choice questions/boolean
User chose the difficulty
4 dropdowns menus next to each other in one section
Another section with premade quizes presented as tiles, sorted by difficulty
Display a picture for each quiz that is clickable


### TO DO for Wednesday 19th May
- Think of a name for the website
- Continue wireframing on Figma
- Select a color palette, agree color palette and add it to prototypes
- Select font
- Select logo idea
    - Eacgh person choses their favourite, shares it on Slack and here, we decide as a team early afternoon
- Start adding tasks to the Projects tab on Github to help planning

Meeting Wednesday 19th May at 4.30pm


##### Monday 17th May 

Make a game using multiple API and make it look nice!

## Understand the problem: part 1
Take time to understand who the user is and what their problem is.
- The user wants to have fun or test his knowledge by playing a quiz on a nice website. Potentially learn something too.
- We don't actually have to make a normal quiz, we could jazz it like for example pointless or everyone makes their own answers?

What is the underlying value this application should provide?
- Get some fun facts or useful bits of knowledge while enjoying themselves
- See how you score compared to the rest of the players (% of players got this right)

What are the foundations? 
- To be asked questions and have to answer them somehow
    - This could be multiple choice, or text, or true or false, or something else
    - To be able to choose the topic, and how hard each question is
    - See what the correct answer is and if you answered coorectly
    - A score to be tracked
    - Username
    - Game modes: Multiple choice questions, true or false.
- If the user has an easy and enjoyable experience, by answering quiz questions

Extra Ideas that we could add?
- Could extend this so if there are multiple people, each person writes an answer and they all have to guess what the correct one is
- You can favourite a category or a quiz
- Keep track of the quizzes you have already completed
- Quiz about code: HTML, CSS, JS
- Game mode: timer 
- Game mode: sudden death

Are there different stakeholders? 
- Our team, SOC, users

What are the existing solutions?
- Kahoot: interactive quiz that you build yourself. Professionals and schools mostly
- Beano: fun quizzes on TV, YT or pop culture. Younger (teens) users
- Buzzfeed quizzes: binge on quizzes
- Lovattspuzzles: trivia quiz to test your knowledge (general knowledge, dictionary, entertainment, history, food&drink, geography, science&nature
- Triviaplaza: 12 different categories of test + general knowledge
- Spellquiz

What is bad/good about them?
- Some of them aren’t dedicated to quizzes, it’s just one type of content they offer.
- Triviaplaza: question placement not consistent, lots of quizzes to chose from: would be nice to have a top 10 per category or filters (most difficult, most popular, etc), red/green animation for wrong/right stays on a bit too long, nice to get a grade and see the average score but no ranking
- Lovattspuzzles: scoring system nor clear, nice to have the ranking at the end of the test
- Kahoot: needs to be prepped before hand, need to install app to play, can’t play on your own to test your knowledge. Interactive as replies come in, they appear on the screen

How will success be measured?
By seeing if the foundations are met
Variety, stability, the website does what its supposed to.


What are the most important things to the user?
- Ease of use and intuive design, functionality, reliability.

## Planning and designing: part 1
A large part of this time should be spent on research:

Find some inspiration for designing and branding your platform.
Create low-fidelity wireframes/sketches of the user experience, and really think through what makes a good, smooth, and easy user experience.

Plan what data is needed in your application, and what models are needed to represent that data.
- Username
- Score
- Best score for the player
- Best score of all time
- Save player’s answer
- We need to get quiz data: topics, questions, choices and correct answers

Specify what requests you will make to your API:
- POST user (username, password, email address)
- Send topic choice
- Get question and choices
- Send user’s answer
- Get if it’s right or wrong
- Update score

What should it look like?
- Should have a light mode and a dark mode
- Should adjust no matter the screen size

What is the theme / feel / color scheme
Coolors
Color Palette Generator
Color Mind
Adobe Color

What assets will you need?
- Logo
- Font

What will the user be able to do?
- Input username and create password
- Choose topic
- Choose answer to question
- Choose game mode

What will you show the user?
- Home page: brief intro, selection of topics, top 5-10 quizzes, best scores
- Login/register page or continue as guest
- Quiz page: question and choices, display score, display question number
- About/FAQ

How will you get the data into your application?
- API for the quiz questions and answers
- Our own API to store usernames, passwords and scores



### TO DO for Tuesday 18th May:
- Play with API
- Look at quiz websites for inspiration and pick one as a guide
- Sign up on Figma
- Read the article and decide about MVP features

Inspiration: 
https://www.beano.com/categories/quizzes (Pros: modern and impactful design / Cons: very teenager/YA oriented by the look of it)
https://spellquiz.com (Pros: simple design, intuitive for the user; clear if you get it right or wrong / Cons: a little bit boring; no options)


Nice to have:
- You can favourite a category or a quiz
- Keep track of the quizzes you have already completed
- Allow a second player?
- Quiz about code: HTML, CSS, JS
- Game mode: timer 
- Game mode: sudden death
