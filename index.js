show_db = {
  "a": "India_Cricket",
  "b": "IPL",
}

ques_db = {
  "India_Cricket": [{
    question: `Which is first Indian cricket tournament ?
    (a) Pepsi 
    (b) Bombay Triangular
    (c) Bombay
    `,
    answer: "b",
  },
  {
    question: `Indian played first test match against ________ .?
    (a) Africa
    (b) England
    (c) Pakisthan
    `,
    answer: "b",
  },
  {
    question: `Indian played their First ODI Match against _______.?
    (a) Pakisthan
    (b) SriLankha
    (c) England
    `,
    answer: "c",
  },
  {
    question: `Indian played their First T20 Match against _______.?
    (a) South Africa
    (b) England
    (c) Australia
    `,
    answer: "a",
  },
  {
    question: `Who was first ODI captain of Indian cricket team ?
    (a) Dhoni
    (b) Ajit Wadekar
    (c) virat
    `,
    answer: "b",
  },
  ],
  "IPL": [{
    question: `Which Australian has the best bowling figures in the IPL?
    (a) Faulkner
    (b) Tye
    (c) Adam Zampa
    `,
    answer: "c",
  },
  {
    question: `Which player holds the record for the fastest fifty in IPL?
    (a) K L Rahul
    (b) Virat
    (c) Abd
    `,
    answer: "b",
  },
  {
    question: `Which among these players has the joint-most ducks in IPL history alongside Harbhajan Singh?
    (a) jadeja
    (b) Parthiv patel
    (c) virat
    `,
    answer: "b",
  },
  {
    question: `Which pacer has bowled the highest number of dot balls in the IPL?
    (a) Siraj
    (b) Bumra
    (c) Bhuvaneshwar Kumar
    `,
    answer: "c",
  },
  {
    question: `Which batsman has scored the most number of hundreds in the IPL?
    (a) Virat
    (b) Chris Gayle
    (c) ABd
    `,
    answer: "b",
  },
  ]
}

var chalk = require("chalk");
var readLineSync = require("readline-sync");

var score = 0;
var name, fscore;
var team_choice;

function intro() {
  console.log(chalk.bgBlue(`First Things First:
  1. Choose Anyone option
  2. Followed by 5 questions each
  3. Each correct answer gets you 2 points
  4. Enter only 'a', 'b' or 'c' to make choice`));
  name = readLineSync.question("\nWhat is Your Name?\n");
  team_choice = readLineSync.question(`\nWhich of the following team do you like the most?
  (a) India_Cricket
  (b) IPL
  Your choice: `);
  team_name = show_db[team_choice];
  console.log(chalk.bgYellow(`\n\nGreat, let's begin ${name}!\n`));

}

function quiz() {
  ques_db[team_name].map((q, idx) => {
    console.log(chalk.bgYellow(`Question ${idx + 1}: `));
    console.log(q.question);
    var ans = readLineSync.question("Your answer: ");
    if (ans === q.answer) {
      console.log(chalk.green("\nYay, Correct Answer! You scored 2 points."))
      score += 2;
      console.log(chalk.bgBlue(`Current score: ${score}`));
      console.log("––––––––––\n\n");
    }
    else {
      console.log(chalk.red("\nUh Oh, Wrong Answer! You scored 0 points."));
      console.log(chalk.bgBlue(`Current score: ${score}`));
      console.log("––––––––––\n\n");
    }
  });
  if (score < 10) {
    fscore = `0${score}`;
  }
  else {
    fscore = "10";
  }
  footer = `
––––––––––––––––––––––––––––––––––––––––––
      Thank You for taking the quiz.      
        Your final score is ${fscore}/10.        
––––––––––––––––––––––––––––––––––––––––--
`;
}

header = `
––––––––––––
Welcome user
––––––––––––
`;

console.log(chalk.bgYellow(header));
intro();
quiz();
console.log(chalk.bgYellow(footer));
