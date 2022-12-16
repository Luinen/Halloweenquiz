const quiz = [
    {quest: 'Which day is Halloween in 2022?',
    ans:
    [ {ans1: 'Monday, 31 October', isCorrect: true},
    {ans2: 'Sunday, 30 October', isCorrect: false},
    {ans3: 'Tuesday, 01 November', isCorrect: false},
    {ans4: 'Wednesday, 02 November',isCorrect: false}]       
    },
    {quest: 'What is the name of the pot witches use to cook up their potions?',
    ans:
    [ {ans1: 'Magic cooking pot', isCorrect: false},
    {ans2: 'Cauldron', isCorrect: true},
    {ans3: 'Black pot', isCorrect: false},
    {ans4: 'Wok',isCorrect: false}]
    },
    {quest: 'Where does the term "jack o\'lantern" come from?',
    ans:
    [{ans1: 'from a Swedish village', isCorrect: false},
    {ans2: 'from an Irish folktale', isCorrect: true},
    {ans3: 'from an Icelandic lake', isCorrect: false},
    {ans4: 'None of them', isCorrect: false}]
    }, 
    {quest: 'When was Halloween first celebrated in the United States?',
    ans:
    [{ans1: '1778', isCorrect: false},
    {ans2: '1840', isCorrect: true},
    {ans3: '1914', isCorrect: false},
    {ans4: '1960', isCorrect: false}]
    },
    {quest: 'Why did people start dressing up in Halloween costumes?',
    ans:
    [{ans1: 'because it is fun', isCorrect: false},
    {ans2: 'to disguise themselves when the spirits come', isCorrect: true},
    {ans3: 'to see the otherworld', isCorrect: false},
    {ans4: 'to repel spirits that they believed came back to Earth', isCorrect: false}]
    }
    ];

var i=0;
function getNewQuestion(i) {
  const question = document.getElementById('question');
  question.innerText= quiz[i].quest
}
getNewQuestion(i)