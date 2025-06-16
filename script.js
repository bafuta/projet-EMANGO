const question = [
    {
        question: "quel est le nom du pays ?",
        img: "brazil.png",
        name: "brazil"
    },
    {
        question: "quel est le nom du pays ?",
        img: "brazil.png",
        name: "brazil"
    },
    {
        question: "quel est le nom du pays ?",
        img: "brazil.png",
        name: "brazil"
    },
    {
        question: "quel est le nom du pays ?",
        img: "brazil.png",
        name: "brazil"
    },
    {
        question: "quel est le nom du pays ?",
        img: "brazil.png",
        name: "brazil"
    },
];


let currentquestion = 0;
let score = 0;

const quizzimg = document.querySelector('#quizz-image');
const quizzquestion = document.querySelector('#quizz-question');
const inputresultat = document.querySelector('#resultat');
const btnNext = document.querySelector('#next');
const resultatfinal = document.querySelector('#resultatfinal');

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i +1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
}
 const shuffledquestions = shuffle(question);
 quizzimg.src = `./src/${shuffledquestions[currentquestion].img}`;
 quizzquestion.textContent = shuffledquestions[currentquestion].question;