function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function combination(n, k) {
    if (k > n) {
        return 0;
    }
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function permutation(n, k) {
    if (k > n) {
        return 0;
    }
    return factorial(n) / factorial(n - k);
}

document.getElementById('calculateComPermButton').addEventListener('click', () => {
    const n = parseInt(document.getElementById('n').value);
    const k = parseInt(document.getElementById('k').value);

    if (isNaN(n) || isNaN(k) || n < 0 || k < 0) {
        alert('Silakan masukkan nilai n dan k yang valid (>= 0).');
        return;
    }

    const comb = combination(n, k);
    const perm = permutation(n, k);
    document.getElementById('comPermResult').innerText = `C(${n}, ${k}) = ${comb}, P(${n}, ${k}) = ${perm}`;
});

document.getElementById('calculateBirthdayButton').addEventListener('click', () => {
    const numPeople = parseInt(document.getElementById('numPeople').value);

    if (isNaN(numPeople) || numPeople < 0) {
        alert('Silakan masukkan jumlah orang yang valid (>= 0).');
        return;
    }

    const probability = calculateBirthdayProblemProbability(numPeople);
    document.getElementById('birthdayResult').innerText = `${(probability * 100).toFixed(2)}%`;
});


function calculateBirthdayProblemProbability(numPeople) {
    if (numPeople <= 1) {
        return 0.0;
    }

    let probability = 1.0;
    for (let i = 0; i < numPeople; i++) {
        probability *= (365.0 - i) / 365.0;
    }

    return 1.0 - probability;
}

document.getElementById('calculateCoinButton').addEventListener('click', () => {
    const numThrows = parseInt(document.getElementById('numThrows').value);
    const side = parseInt(document.getElementById('coinSide').value);

    if (isNaN(numThrows) || numThrows <= 0) {
        alert('Masukkan jumlah pelemparan yang valid (> 0).');
        return;
    }

    if (isNaN(side) || (side !== 0 && side !== 1)) {
        alert('Masukkan sisi koin yang valid (0 untuk kepala, 1 untuk ekor).');
        return;
    }

    const totalOutcomes = Math.pow(2, numThrows);
    let desiredOutcome = 0;

    for (let i = 0; i < totalOutcomes; i++) {
        if (getSideCount(i) === side) {
            desiredOutcome++;
        }
    }

    const probability = desiredOutcome / totalOutcomes;
    document.getElementById('coinResult').innerText = `Total kemungkinan hasil (|S|) = ${totalOutcomes}\nJumlah hasil yang sesuai dengan sisi yang dicari = ${desiredOutcome}\nProbabilitas = ${(probability * 100).toFixed(2)}%`;
});

function getSideCount(number) {
    let count = 0;
    while (number > 0) {
        if (number % 2 === 1) {
            count++;
        }
        number = Math.floor(number / 2);
    }
    return count;
}

function monteCarloPi(iterations) {
    let insideCircle = 0;
    let totalPoints = iterations;

    for (let i = 0; i < iterations; i++) {
        let x = Math.random() * 2 - 1;
        let y = Math.random() * 2 - 1;
        if (x * x + y * y <= 1) {
            insideCircle++;
        }
    }

    let piEstimate = 4.0 * insideCircle / totalPoints;
    return piEstimate;
}

document.getElementById('calculatePiButton').addEventListener('click', () => {
    const iterations = parseInt(document.getElementById('iterations').value);

    if (isNaN(iterations) || iterations <= 0) {
        alert('Masukkan jumlah iterasi yang valid (> 0).');
        return;
    }

    const piEstimate = monteCarloPi(iterations);
    document.getElementById('piResult').innerText = `Estimasi nilai Pi: ${piEstimate}`;
});

function main() {
    let iterations = 10000;
    let piEstimate = monteCarloPi(iterations);
    console.log("Estimasi nilai Pi: " + piEstimate);
}


main();
