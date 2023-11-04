const results = ['hello', 'lion', 'nellore', 'javascript', 'react', 'frontend', 'friendship', 'cricket', 'india', 'siblings', 'html'];

const inputBox = document.getElementById('input');
const resultBox = document.querySelector('.result-box');

inputBox.addEventListener('input', () => {
    const input = inputBox.value;
    if (input.length) {
        const filteredResults = results.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        display(filteredResults);
    } else {
        clearResults();
    }
});

inputBox.addEventListener('keydown', () => {
    // Use keydown event to handle special keys (e.g., Esc) if needed.
    // For regular typing, the input event is used.
});

function display(result) {
    const content = result.map((list) => {
        return '<li>' + list + '</li>';
    });
    resultBox.innerHTML = "<ul>" + content.join('') + "</ul";
}

function clearResults() {
    resultBox.innerHTML = '';
}
