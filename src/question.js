function createBeginnerQuestions() {
    const questions = [];

    // Question 1
    const question1 = "What is the correct file extension for a JavaScript file?";
    const answers1 = [".js", ".html", ".css"];
    const correctAnswer1 = ".js";
    questions.push({ question: question1, answers: answers1, answer: correctAnswer1 });

    // Question 2
    const question2 = "Which programming language is used for building web pages?";
    const answers2 = ["HTML", "Java", "Python"];
    const correctAnswer2 = "HTML";
    questions.push({ question: question2, answers: answers2, answer: correctAnswer2 });

    // Question 3
    const question3 = "Which of the following is a version control system?";
    const answers3 = ["Git", "Gulp", "Grunt"];
    const correctAnswer3 = "Git";
    questions.push({ question: question3, answers: answers3, answer: correctAnswer3 });

    // Question 4
    const question4 = "Which CSS property is used to change the text color?";
    const answers4 = ["color", "font-size", "background-color"];
    const correctAnswer4 = "color";
    questions.push({ question: question4, answers: answers4, answer: correctAnswer4 });

    // Question 5
    const question5 = "What does HTML stand for?";
    const answers5 = [
        "HyperText Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language"
    ];
    const correctAnswer5 = "HyperText Markup Language";
    questions.push({ question: question5, answers: answers5, answer: correctAnswer5 });

    // Question 6
    const question6 = "Which operator is used for strict equality comparison in JavaScript?";
    const answers6 = ["===", "==", "!="];
    const correctAnswer6 = "===";
    questions.push({ question: question6, answers: answers6, answer: correctAnswer6 });

    // Question 7
    const question7 = "Which function is used to print output in JavaScript?";
    const answers7 = ["console.log()", "alert()", "document.write()"];
    const correctAnswer7 = "console.log()";
    questions.push({ question: question7, answers: answers7, answer: correctAnswer7 });

    // Question 8
    const question8 = "Which data type is used to represent true/false values in JavaScript?";
    const answers8 = ["Boolean", "String", "Number"];
    const correctAnswer8 = "Boolean";
    questions.push({ question: question8, answers: answers8, answer: correctAnswer8 });

    // Question 9
    const question9 = "Which loop is used to iterate over elements in an array in JavaScript?";
    const answers9 = ["for", "while", "do-while"];
    const correctAnswer9 = "for";
    questions.push({ question: question9, answers: answers9, answer: correctAnswer9 });

    // Question 10
    const question10 = "What is the correct syntax for a function declaration in JavaScript?";
    const answers10 = [
        "function myFunction() {}",
        "myFunction = function() {}",
        "() => {}"
    ];
    const correctAnswer10 = "function myFunction() {}";
    questions.push({ question: question10, answers: answers10, answer: correctAnswer10 });

    return questions;
}


function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const beginnerQuestions = createBeginnerQuestions();


for (let i = 1; i < 11; i++) {
    shuffle(`beginnerQuestions${[i]}.answers${i}`)
    //shuffle(beginnerQuestions);
}

console.log(`beginnerQuestions${[1]}.answers${1}`)
console.log(beginnerQuestions);