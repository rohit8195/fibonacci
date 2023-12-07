function generateFibonacci() {
    const termsInput = document.getElementById('terms');
    const resultParagraph = document.getElementById('result');
    
    const terms = parseInt(termsInput.value);

    if (isNaN(terms) || terms < 1) {
        alert('Please enter a valid number of terms greater than 0.');
        return;
    }

    let fibonacciSeries = [0, 1];

    for (let i = 2; i < terms; i++) {
        fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
    }

    resultParagraph.textContent = `Fibonacci Series (${terms} terms): ${fibonacciSeries.join(', ')}`;
}

  
