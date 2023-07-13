const beginner = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Madrid'],
        answer: 'Paris'
    },
    {
        question: 'What does HTML stand for?',
        options: ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hypertext Markup Language'],
        answer: 'Hypertext Markup Language'
    },
    {
        question: 'Which of the following is NOT a programming language?',
        options: ['Java', 'HTML', 'Python'],
        answer: 'HTML'
    },
    {
        question: 'What symbol is used to access elements in an array in JavaScript?',
        options: ['Curly braces', 'Square brackets', 'Parentheses'],
        answer: 'Square brackets'
    },
    {
        question: 'What does CSS stand for?',
        options: ['Cascading Style Sheets', 'Colorful Style Sheets', 'Computer Style Sheets'],
        answer: 'Cascading Style Sheets'
    },
    {
        question: 'What is the file extension for a JavaScript file?',
        options: ['.html', '.js', '.css'],
        answer: '.js'
    },
    {
        question: 'Which of the following is used to style web pages?',
        options: ['JavaScript', 'HTML', 'CSS'],
        answer: 'CSS'
    },
    {
        question: 'What does IDE stand for?',
        options: ['Integrated Development Environment', 'Interactive Development Environment', 'Integrated Developer Environment'],
        answer: 'Integrated Development Environment'
    },
    {
        question: 'What is the result of 5 + "3" in JavaScript?',
        options: ['8', '53', 'Error'],
        answer: '53'
    },
    {
        question: 'Which of the following is a loop in JavaScript?',
        options: ['if', 'for', 'switch'],
        answer: 'for'
    }
];


const intermediate = [
    {
        question: 'What is the purpose of a constructor in Java?',
        options: ['To initialize an object', 'To destroy an object', 'To define a class'],
        answer: 'To initialize an object'
    },
    {
        question: 'Which of the following data structures is based on the LIFO (Last In, First Out) principle?',
        options: ['Queue', 'Stack', 'Heap'],
        answer: 'Stack'
    },
    {
        question: 'What is the time complexity of binary search in a sorted array?',
        options: ['O(1)', 'O(n)', 'O(log n)'],
        answer: 'O(log n)'
    },
    {
        question: 'What does CSS stand for?',
        options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets'],
        answer: 'Cascading Style Sheets'
    },
    {
        question: 'Which of the following is NOT a relational database management system (RDBMS)?',
        options: ['MySQL', 'MongoDB', 'Oracle'],
        answer: 'MongoDB'
    },
    {
        question: 'What does MVC stand for?',
        options: ['Model View Controller', 'Model Validation Configuration', 'Managed View Control'],
        answer: 'Model View Controller'
    },
    {
        question: 'Which programming language is NOT statically typed?',
        options: ['Java', 'JavaScript', 'C++'],
        answer: 'JavaScript'
    },
    {
        question: 'What is the result of 3 + 2 + "7" in JavaScript?',
        options: ['57', '12', '37'],
        answer: '57'
    },
    {
        question: 'What is the default port number for HTTP?',
        options: ['80', '443', '8080'],
        answer: '80'
    },
    {
        question: 'Which of the following is an agile software development methodology?',
        options: ['Waterfall', 'Scrum', 'Spiral'],
        answer: 'Scrum'
    }
];


const wizard = [
    {
        question: 'Which design pattern is used to separate object construction from its representation?',
        options: ['Singleton', 'Builder', 'Prototype'],
        answer: 'Builder'
    },
    {
        question: 'What is the time complexity of a binary heap operations like insertion and deletion?',
        options: ['O(1)', 'O(log n)', 'O(n)'],
        answer: 'O(log n)'
    },
    {
        question: 'Which of the following is a functional programming language?',
        options: ['Java', 'Python', 'Haskell'],
        answer: 'Haskell'
    },
    {
        question: 'Which encryption algorithm is commonly used for secure communication over the Internet?',
        options: ['AES', 'DES', 'RSA'],
        answer: 'RSA'
    },
    {
        question: 'What is the purpose of the SOLID principles in software development?',
        options: ['To write bug-free code', 'To improve code readability', 'To design robust and maintainable software'],
        answer: 'To design robust and maintainable software'
    },
    {
        question: 'Which of the following is NOT a characteristic of microservices architecture?',
        options: ['Loose coupling', 'Monolithic structure', 'Independent deployment'],
        answer: 'Monolithic structure'
    },
    {
        question: 'Which sorting algorithm has the best average-case time complexity?',
        options: ['Bubble Sort', 'Merge Sort', 'Selection Sort'],
        answer: 'Merge Sort'
    },
    {
        question: 'What is the purpose of a closure in JavaScript?',
        options: ['To protect sensitive data', 'To optimize code execution', 'To preserve access to variables'],
        answer: 'To preserve access to variables'
    },
    {
        question: 'What is the difference between unit testing and integration testing?',
        options: ['Unit testing verifies individual components', 'Integration testing verifies interactions between components', 'Both are the same'],
        answer: 'Integration testing verifies interactions between components'
    },
    {
        question: 'Which of the following tools is commonly used for version control in software development?',
        options: ['Git', 'Docker', 'Jenkins'],
        answer: 'Git'
    }
];


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


for (let i = 0; i < 10; i++) {
    shuffle(beginner[i].options)
    shuffle(intermediate[i].options)
    shuffle(wizard[i].options)

}
const getIndexes = (len) => {

    let chosenIndexes = [];

    for (let i = 0; i < len; i) {
        const randomIndex = Math.floor(Math.random() * len);
        if (!chosenIndexes.includes(randomIndex)) {
            chosenIndexes.push(randomIndex)
            i++
        }
    }
    return chosenIndexes;
};


export const getQuestions = (lev, len) => {
    const numArr = getIndexes(len);
    const level = lev.toLowerCase();

    if (level === 'beginner') {
        const quizQuestions = numArr.map((index) => beginner[index])
        return quizQuestions;
    }
    else if (level === 'intermediate') {
        const quizQuestions = numArr.map((index) => intermediate[index])
        return quizQuestions;
    }
    else if (level === 'wizard') {
        const quizQuestions = numArr.map((index) => wizard[index])
        return quizQuestions;
    }
    else {
        alert('There is an error, please refresh.')
    }

}





