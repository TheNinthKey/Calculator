class Calculator {
    constructor(inputDisplay, outputDisplay) {
        this.inputDisplay = input;
        this.outputDisplay = output;
        this.inputHistory = [];
    }

    clearAllHistory() {
        this.inputHistory = [];
        this.updateInputDisplay();
        this.updateOutputDisplay("0");
    }

    backspace() {}

    changePercentToDecimal() {}

    insertNumber(value) {
        if (this.getLastInputType() === "number") {
            this.appendToLastInput(value);
        } else if (this.getLastInputType() === "operator" || this.getLastInputType() === null) {
            this.addNewInput(value, "number");
        }
    }

    insertOperation (value) {}

    negateNumber() {}

    insertDecimalPoint() {}

    generateResult() {}

    // Helper Functions
    getLastInputType() {
        return (this.inputHistory.length === 0) ? null : this.inputHistory[this.inputHistory.length - 1].type;
    }
    
    getAllInputValues() {
        return this.inputHistory.map(entry => entry.value);
    }

    updateInputDisplay() {
        this.inputDisplay.value = this.getAllInputValues().join(" ");
    }

    updateOutputDisplay(value) {
        this.outputDisplay.value = Number(value).toLocaleString();
    }

} // End Calculator Class Definition

// Create bindings to access DOM elements
const inputDisplay = document.querySelector('#history');
const outputDisplay = document.querySelector('#result');

const allClearButton = document.querySelector('[data-all-clear]');
const backspaceButton = document.querySelector('[data-backspace]');
const percentButton = document.querySelector("[data-percent]");
const operationButtons = document.querySelector('[data-operator]');
const numberButtons = document.querySelector('[data-number]');
const negationButton = document.querySelector("[data-negation]")
const decimalButton = document.querySelector("[data-decimal]");
const equalButton = document.querySelector("[data-equals]");

// Create a new Calculator
const calculator = new Calculator(inputDisplay, outputDisplay);

// Add event handlers to buttons
allClearButton.addEventListener('click', () => {
    calculator.clearAllHistory();
});

backspaceButton.addEventListener('click', () => {
    calculator.backspace();
});

percentButton.addEventListener('click', () => {
    calculator.changePercentToDecimal();
});

operationButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        let {target} = event;
        calculator.insertOperation(target.dataset.operator);
    })
});

numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        let {target} = event;
        calculator.insertOperation(target.dataset.number);
    })
});

negationButton.addEventListener('click', () => {
    calculator.negateNumber();
});

decimalButton.addEventListener('click', () => {
    calculator.insertDecimalPoint();
});

equalsButton.addEventListener('click', () => {
    calculator.generateResult();
});




