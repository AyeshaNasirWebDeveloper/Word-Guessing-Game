const words = [
    {
        word: "apple",
        hint: "Fruit with a red or green skin"
    },
    {
        word: "banana",
        hint: "Yellow fruit with a curved shape"
    },
    {
        word: "orange",
        hint: "Citrus fruit with a bright orange color"
    },
    {
        word: "grape",
        hint: "Small round fruit that grows in clusters"
    },
    {
        word: "melon",
        hint: "Large fruit with a juicy flesh and seeds"
    },
    {
        word: "lemon",
        hint: "Sour yellow fruit used in cooking and drinks"
    },
    {
        word: "pear",
        hint: "Fruit with a sweet taste and a narrow top"
    },
    {
        word: "peach",
        hint: "Fuzzy fruit with a juicy, sweet flesh"
    },
    {
        word: "plum",
        hint: "Small round fruit with a smooth skin"
    },
    {
        word: "cherry",
        hint: "Small red or black fruit with a stone inside"
    },
    {
        word: "strawberry",
        hint: "Small red fruit with seeds on the surface"
    },
    {
        word: "blueberry",
        hint: "Small round fruit that is blue in color"
    },
    {
        word: "kiwi",
        hint: "Small green fruit with brown fuzzy skin"
    },
    {
        word: "pineapple",
        hint: "Tropical fruit with a spiky skin and sweet flesh"
    },
    {
        word: "watermelon",
        hint: "Large fruit with juicy red flesh and black seeds"
    },
    {
        word: "avocado",
        hint: "Green fruit with a large pit inside"
    },
    {
        word: "mango",
        hint: "Tropical fruit with a sweet and juicy flesh"
    },
    {
        word: "coconut",
        hint: "Large brown fruit with a hard shell and white flesh inside"
    },
    {
        word: "raspberry",
        hint: "Small red fruit with a tangy taste"
    },
    {
        word: "blackberry",
        hint: "Small dark fruit with many small seeds"
    },
    {
        word: "peanut",
        hint: "Small brown nut that grows underground"
    },
    {
        word: "almond",
        hint: "Nut with a hard shell and a soft inner kernel"
    },
    {
        word: "walnut",
        hint: "Hard-shelled nut with a wrinkled appearance"
    },
    {
        word: "cashew",
        hint: "Nut with a kidney shape and a sweet flavor"
    },
    {
        word: "pecan",
        hint: "Nut with a thin shell and a rich buttery flavor"
    },
    {
        word: "pistachio",
        hint: "Small green nut with a hard shell"
    },
    {
        word: "hazelnut",
        hint: "Small round nut with a brown shell"
    },
    {
        word: "macadamia",
        hint: "Round creamy-white nut with a hard shell"
    },
    {
        word: "chestnut",
        hint: "Brown nut with a shiny shell and a sweet taste"
    },
    {
        word: "acorn",
        hint: "Nut produced by oak trees, often eaten by squirrels"
    },
    {
        word: "pepper",
        hint: "Spice that adds heat and flavor to food"
    },
    {
        word: "cinnamon",
        hint: "Spice with a sweet and warm flavor"
    },
    {
        word: "ginger",
        hint: "Root with a spicy flavor used in cooking and baking"
    },
    {
        word: "garlic",
        hint: "Bulb with a pungent flavor used in cooking"
    },
    {
        word: "onion",
        hint: "Vegetable with layers and a strong flavor"
    },
    {
        word: "tomato",
        hint: "Red fruit with juicy flesh and seeds inside"
    },
    {
        word: "potato",
        hint: "Vegetable with a starchy tuberous root"
    },
    {
        word: "carrot",
        hint: "Orange vegetable with a crunchy texture"
    },
    {
        word: "lettuce",
        hint: "Leafy green vegetable used in salads"
    },
    {
        word: "cucumber",
        hint: "Green vegetable with a cool, crisp texture"
    },
    {
        word: "broccoli",
        hint: "Green vegetable with a dense cluster of small flower buds"
    },
    {
        word: "spinach",
        hint: "Leafy green vegetable often used in salads and cooking"
    },
    {
        word: "kale",
        hint: "Leafy green vegetable with a slightly bitter flavor"
    },
    {
        word: "asparagus",
        hint: "Green or white vegetable with long spears"
    },
    {
        word: "eggplant",
        hint: "Purple vegetable with a glossy skin"
    },
    {
        word: "zucchini",
        hint: "Green summer squash with a mild flavor"
    },
    {
        word: "pumpkin",
        hint: "Large round orange fruit used in cooking and decoration"
    },
    {
        word: "radish",
        hint: "Small red or white root vegetable with a peppery flavor"
    },
    {
        word: "bell pepper",
        hint: "Large vegetable with a sweet flavor and crisp texture"
    },
    {
        word: "cabbage",
        hint: "Leafy green or purple vegetable with tightly packed leaves"
    },
];

let selectedWord, word, hint, guessedWord, remainingChances, timeLeft, timer;

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    word = selectedWord.word.toLowerCase();
    hint = selectedWord.hint;
    guessedWord = Array(word.length).fill('_');
    remainingChances = 5;
    timeLeft = 60;

    document.write(`
        <div class="main">
            <h1>Word Guessing Game</h1>
            <p id="hint">Hint: ${hint}</p>
            <div id="wordDisplay">${guessedWord.join(' ')}</div>
            <input type="text" id="guessInput" placeholder="Enter your guess" maxlength="1">
            <button id="guessButton" onclick="makeGuess()">Guess</button>
            <p id="message"></p>
            <p id="timer">Time left: <span id="timeLeft">${timeLeft}</span></p>
            <p id="chances">Chances left: <span id="remainingChances">${remainingChances}</span></p>
            <button id="nextButton" style="display:none;" onclick="window.location.reload()">Next</button>
        </div>
    `);

    guessInput = document.getElementById('guessInput');
    guessButton = document.getElementById('guessButton');
    wordDisplay = document.getElementById('wordDisplay');
    messageDisplay = document.getElementById('message');
    timeLeftDisplay = document.getElementById('timeLeft');
    remainingChancesDisplay = document.getElementById('remainingChances');
    nextButton = document.getElementById('nextButton');

    guessInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            guessButton.click();
        }
    });

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timeLeftDisplay.textContent = timeLeft;
        } else {
            clearInterval(timer);
            guessInput.disabled = true;
            guessButton.disabled = true;
            messageDisplay.textContent = `Time's up! The word was "${word}".`;
            nextButton.style.display = 'block';
        }
    }, 1000);
}

function makeGuess() {
    const guess = guessInput.value.toLowerCase();
    if (guess && guess.length === 1) {
        let correctGuess = false;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess && guessedWord[i] === '_') {
                guessedWord[i] = guess;
                correctGuess = true;
            }
        }

        if (correctGuess) {
            wordDisplay.textContent = guessedWord.join(' ');
            if (!guessedWord.includes('_')) {
                clearInterval(timer);
                guessInput.disabled = true;
                guessButton.disabled = true;
                messageDisplay.textContent = `Congratulations!
                 You've guessed the word "${word}".`;
                nextButton.style.display = 'block';
                tryAgainButton.style.display = 'block';
            }
        } else {
            messageDisplay.textContent = `Incorrect guess! ${guess}`;
            remainingChances--;
            remainingChancesDisplay.textContent = remainingChances;
            if (remainingChances === 0) {
                clearInterval(timer);
                guessInput.disabled = true;
                guessButton.disabled = true;
                messageDisplay.textContent = `Out of chances! The word was "${word.toUpperCase()}".`;
                nextButton.style.display = 'block';
            }
        }
    } else {
        messageDisplay.textContent = 'Please enter a single letter.';
    }
    guessInput.value = '';
}

function tryAgain() {
    clearInterval(timer);
    document.body.innerHTML = '';
    startGame();
}

startGame();
