const quiz = [
  {
    quest: 'Which day is Halloween in 2022?',
    ans:
      [{ ans1: 'Monday, 31 October', isCorrect: true },
      { ans2: 'Sunday, 30 October', isCorrect: false },
      { ans3: 'Tuesday, 01 November', isCorrect: false },
      { ans4: 'Wednesday, 02 November', isCorrect: false }]
  },
  {
    quest: 'What is the name of the pot witches use to cook up their potions?',
    ans:
      [{ ans1: 'Magic cooking pot', isCorrect: false },
      { ans2: 'Cauldron', isCorrect: true },
      { ans3: 'Black pot', isCorrect: false },
      { ans4: 'Wok', isCorrect: false }]
  },
  {
    quest: 'Where does the term "jack o\'lantern" come from?',
    ans:
      [{ ans1: 'from a Swedish village', isCorrect: false },
      { ans2: 'from an Irish folktale', isCorrect: true },
      { ans3: 'from an Icelandic lake', isCorrect: false },
      { ans4: 'None of them', isCorrect: false }]
  },
  {
    quest: 'When was Halloween first celebrated in the United States?',
    ans:
      [{ ans1: '1778', isCorrect: false },
      { ans2: '1840', isCorrect: true },
      { ans3: '1914', isCorrect: false },
      { ans4: '1960', isCorrect: false }]
  },
  {
    quest: 'Why did people start dressing up in Halloween costumes?',
    ans:
      [{ ans1: 'because it is fun', isCorrect: false },
      { ans2: 'to disguise themselves when the spirits come', isCorrect: true },
      { ans3: 'to see the otherworld', isCorrect: false },
      { ans4: 'to repel spirits that they believed came back to Earth', isCorrect: false }]
  },
  {
    quest: 'What vegetable is part of a tradition on the night before Halloween?',
    ans:
      [{ ans1: 'Pepper', isCorrect: false },
      { ans2: 'Cucumber', isCorrect: false },
      { ans3: 'Cabbage(Kale)', isCorrect: true },
      { ans4: 'Pumpkin', isCorrect: false }]
  },
  {
    quest: 'Why do some people wear clothes inside out on Halloween?',
    ans:
      [{ ans1: 'to see a witch at midnight', isCorrect: true },
      { ans2: 'to transform into an animal', isCorrect: false },
      { ans3: 'to save the planet', isCorrect: false },
      { ans4: 'to make a deal with the devil', isCorrect: false }]
  },
  {
    quest: 'What is the most commercially successful horror movie of all time?',
    ans:
      [{ ans1: 'Paranormal Activity', isCorrect: false },
      { ans2: 'Deliver Us from Evil', isCorrect: false },
      { ans3: 'Alien', isCorrect: false },
      { ans4: 'It', isCorrect: true }]
  },
  {
    quest: 'What was used before pumpkins to make jack o\'lanterns?',
    ans:
      [{ ans1: 'Watermelon', isCorrect: false },
      { ans2: 'Beetroots', isCorrect: false },
      { ans3: 'Onions', isCorrect: false },
      { ans4: 'Potatoes', isCorrect: true }]
  },
  {
    quest: 'What does the black cat symbolize?',
    ans:
      [{ ans1: 'Power and strength', isCorrect: false },
      { ans2: 'Life and death', isCorrect: false },
      { ans3: 'Mystery and secrecy', isCorrect: true },
      { ans4: 'Freedom and vanity', isCorrect: false }]
  }
];

var clicked = "";
var clickedBtn = "";
var myScore = 0;
var i = 0;
function getNewQuestion(i) {
  const question = document.getElementById('question');
  question.innerText = quiz[i].quest;

  const answer1 = document.getElementById('ans1');
  const answer2 = document.getElementById('ans2');
  const answer3 = document.getElementById('ans3');
  const answer4 = document.getElementById('ans4');

  answer1.innerText = quiz[i].ans[0].ans1;
  answer2.innerText = quiz[i].ans[1].ans2;
  answer3.innerText = quiz[i].ans[2].ans3;
  answer4.innerText = quiz[i].ans[3].ans4;

  const ans1Correctness = quiz[i].ans[0].isCorrect;
  const ans2Correctness = quiz[i].ans[1].isCorrect;
  const ans3Correctness = quiz[i].ans[2].isCorrect;
  const ans4Correctness = quiz[i].ans[3].isCorrect;

  answer1.addEventListener('click', () => {
    answer1.style.border = '3px solid black';
    answer2.style.border = 'none';
    answer3.style.border = 'none';
    answer4.style.border = 'none';
    clicked = ans1Correctness;
    clickedBtn = answer1;
  }
  );
  answer2.addEventListener('click', () => {
    answer2.style.border = '3px solid black';
    answer1.style.border = 'none';
    answer3.style.border = 'none';
    answer4.style.border = 'none';
    clicked = ans2Correctness;
    clickedBtn = answer2;
  }
  );
  answer3.addEventListener('click', () => {
    answer3.style.border = '3px solid black';
    answer2.style.border = 'none';
    answer1.style.border = 'none';
    answer4.style.border = 'none';
    clicked = ans3Correctness;
    clickedBtn = answer3;
  }
  );
  answer4.addEventListener('click', () => {
    answer4.style.border = '3px solid black';
    answer2.style.border = 'none';
    answer3.style.border = 'none';
    answer1.style.border = 'none';
    clicked = ans4Correctness;
    clickedBtn = answer4;
  }
  );
}

const check = document.getElementsByClassName('check')[0];
check.addEventListener('click', () => {
  if (clicked) {
    check.style.background = 'green';
    clickedBtn.style.background = 'green';
    myScore += 5;
    let currentScore = document.getElementById('currentScore');
    currentScore.innerText = myScore;
  }
  else {
    check.style.background = 'red';
    clickedBtn.style.background = 'red';
    myScore -= 1;
    let currentScore = document.getElementById('currentScore');
    currentScore.innerText = myScore;
  }
  setAnswerButtons(true);
}
);

getNewQuestion(i);

function getNextQuestion() {
  const next = document.getElementsByClassName('next')[0];
  next.addEventListener('click', () => {
    resetButtonsStyles();
    setAnswerButtons(false);
    if (i < 9) {
      i++;
    }
    getNewQuestion(i);
  }
  );
}
getNextQuestion();

function setAnswerButtons(condition) {
  const answer1 = document.getElementById('ans1');
  const answer2 = document.getElementById('ans2');
  const answer3 = document.getElementById('ans3');
  const answer4 = document.getElementById('ans4');
  const check = document.getElementsByClassName('check')[0];
  if (condition) {
    answer1.disabled = true;
    answer2.disabled = true;
    answer3.disabled = true;
    answer4.disabled = true;
    check.disabled = true;
  }
  else {
    answer1.disabled = false;
    answer2.disabled = false;
    answer3.disabled = false;
    answer4.disabled = false;
    check.disabled = false;
  }
}

function resetButtonsStyles() {
  const answer1 = document.getElementById('ans1');
  const answer2 = document.getElementById('ans2');
  const answer3 = document.getElementById('ans3');
  const answer4 = document.getElementById('ans4');
  const check = document.getElementsByClassName('check')[0];
  answer1.style.background = '#9415b0';
  answer2.style.background = '#9415b0';
  answer3.style.background = '#9415b0';
  answer4.style.background = '#9415b0';
  check.style.background = '#9415b0';
  answer1.style.border = 'none';
  answer2.style.border = 'none';
  answer3.style.border = 'none';
  answer4.style.border = 'none';
}