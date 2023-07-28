const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const API_KEY = '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';

//Header - Authorization: Bearer OPENAI_API_KEY

const prompt = [`Create ${totalQuestions[0]} multiple choice questions with 3 potential answers for ${knowledgeLevel[2]} software developers. Return this as an array of objects, with each object key the question and the value an array of potential answers`,];


axios.post(API_ENDPOINT, {
    prompt: prompt,
}, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
})
    .then(response => {
        // Handle API response
        const data = response.data;
        console.log(data.choices[0].text);
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
    });