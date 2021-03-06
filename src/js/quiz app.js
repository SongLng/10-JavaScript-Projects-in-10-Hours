const quizData = [
  {
    question: 'How old are U?',
    a: '10',
    b: '26',
    c: '36',
    d: '33',
    correct: 'c',
  },
  {
    question: 'What is the best programming language?',
    a: 'Java',
    b: 'JS',
    c: 'C++',
    d: 'Python',
    corretc: 'b',
  },
  {
    question: 'Who is a president of US?',
    a: 'Sergio Pieshko',
    b: 'Joe Biden',
    c: 'Donald Trump',
    d: 'Obi Van Kenobi',
    correct: 'b',
  },
  {
    question: 'What does HTML stands for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Heclicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JS launched',
    a: '1995',
    b: '2019',
    c: '2018',
    d: 'none of the above',
    correct: 'd',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
