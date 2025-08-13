// source https://www.youtube.com/watch?v=j59qQ7YWLxw

// store information for previous and current operands in a class
class Calculator{
    // constructor takes all inputs and functions for the calculator
    // we need to know where to place our display text
    constructor(previousOperandTextElement, curretOperandTextElement){
        // gives us a way to set these text elements inside of our calculator class
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement

        // we want to call this function at the very beginning to set the to the default values as soon as we create a new calculator
        this.clear()
    }

    //what can our calculator class can come perform
    // clearing function

    // what kind of properties does our calculator need to store? 
    // previous operand, current operation and the operation that they've selected

    // remove all the values
    clear(){
        // default currentOperand and previousOperand to an empty string
        this.currentOperand = ''
        this.previousOperand = ''

        // because they don't have any operation selected since we cleared things
        this.operation = undefined

        

    }

    delete(){
        // chop off the last value of the string (beginning, 1 from the end) 
        // or chopping off the last digit
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }

    // essentially what's going to happen every single time a user clicks on a number to add to the screen
    // we need to actually pass the number the user selected
    appendNumber(number){
        // we don't want multiple (.) 
        // && is an and to say not more than one and check if we don't already have a (.) will stop our function from executing any further
        if (number === '.' && this.currentOperand.includes('.')) return
        // change current operand to equal that number
        // append number function - passed to the end with a +
        // convert it to a stringjust in case its a number
        this.currentOperand = this.currentOperand.toString() + number.toString()
        

    }

    // what happens when user clicks an operation (Eg * or +)
    // also needs to take the particular operation that the user selected
    // needs fancier math
    chooseOperation(operation){
        // chek-in to make sure theres a # before operation aka if empty do nothing
        if (this.currentOperand === '') return
        // second 'if' for if theres a running coputation
        if (this.previousOperand !== '') {
            // will compute variables as we need
            this.compute()
        }
        // set the opration this.operation = to operation we passed in
        this.operation = operation
        // the next one = to the previous operand; were done with the last one now recylcle and use this one
        this.previousOperand = this.currentOperand
        // wipe out the new curent operand, clearing out that value
        this.currentOperand = ''
    }

    // take values inside of our calculator and compute a single value for what we need to display on the calculator
    compute() {
        // create the computation variable
        let computation
        // convert string to a number
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        // check if there is something there first, is there a prev or current val = cancel function completely
        if (isNaN(prev) || isNaN(current)) return
        // switch statement = a chain of 'if' statments on a single object
        switch (this.operation){
            // keyword case for the if statements, what this .operation should = 
            // if theres a '+' we want to execute the code inside of this case
            // so if operation = '+' execute this code:
            case '+':
                computation = prev + current
                // break = don't follow the other case statements
                // leave the switch statement completely
                break
            // so if operation = '-' execute this code:
            case '-':
                computation = prev - current
                // break = don't follow the other case statements
                // leave the switch statement completely
                break
            // so if operation = '*' execute this code:
            case '*':
                computation = prev * current
                // break = don't follow the other case statements
                // leave the switch statement completely
                break
            // so if operation = '÷' execute this code:
            case '÷':
                computation = prev / current
                // break = don't follow the other case statements
                // leave the switch statement completely
                break
            // define an 'else' statement defined as a default
            // anytime none of these values get executed
            // return - do nothing because theres probably an invalid operation and we don't want to deal with it
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this. previousOperand = ''

    }

    // helper function
    getDisplayNumber(number){
        // added fix to strait forward method
        // get the string so we can split it on the decimal chara
        // we may be getting a number OR a string
        const stringNumber = number.toString()
        // integer numbers - before the '.' split the string and turn it into an array
        // first part is integer the second is decimal
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        // second is decimal
        const decimalDigits = stringNumber.split('.')[1]
        // intorducer display separately
        let integerDisplay
        // if not a number = nothing or just a '.'
        if (isNaN(integerDigits)){
            integerDisplay = ''
        // if there is a number before the '.'
        } else {
            // insert number, with fancy ',' but don't allow another '.'
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        // is there a '.' and has some # after it
        if (decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        } else {
            // no decimal digits
            return integerDisplay
        }
             

        
        // UNNEEDED CODE
        // strait forward version then he'll tell us the problems with it
        // our number is a string and we want to convert if to a number first
        // const floatNumber = parseFloat(number)
        // if it is NOT a number return '' because we don';'t know how to format that
        // if (isNaN(floatNumber)) return ''
        // return as a display value in english, gives the ',' feature
        // return floatNumber.toLocaleString('en')
        // problem arises when you want to use a '.' first it wont show up til another number is selected. the '.' is not a number
        // to fix we have to split the number into 'integer' (before the '.') and decimal (after the '.')
    } 

    // update our display
    updateDisplay(){
        // set the text of this currentOperand
        this.currentOperandTextElement.innerText = 
            this.getDisplayNumber(this.currentOperand)
        // if operation is NOT equal to null
        if (this.operation != null) {
        // display previousOperand
            this.previousOperandTextElement.innerText = 
            // concatenation of both prev operand and our operation
            // eg 67 +
                `${this.getDisplayNumber(this.previousOperand)} ${this.getDisplayNumber(this.operation)}`

        } else {
            // if the operation does not exist clear the area
            this.previousOperandTextElement.innerText = ''
        }

    }

}



// 
// querySelectorAll selects ALL wlwments that meet a certain string '' inside [ ]
// select all buttons - great for multiples
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')

// selecting only 1 button use .queryselector 
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-Clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

// now that we know WHAT our calculator can do defined by our functions and all the variables it can hold
// now hook up all of our different variables down here and make them operate on our calculator object

// first thing: create a calculator
// new Calculator is how you define classes
// pass everything from our constructor into it
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// number buttons
numberButtons.forEach(button => {
    // add an event listener - whenever we click on button we want to add a number
    button.addEventListener('click', () => {
        // 'append' whatever is inside that button
        calculator.appendNumber(button.innerText)
        // constantly update current/previous display values
        calculator.updateDisplay()
    })
})

// operation buttons
// same as number but change appendNumber = chooseOperation
operationButtons.forEach(button => {
    // add an event listener - whenever we click on button we want to add a number
    button.addEventListener('click', () => {
        // 'append' whatever is inside that button
        calculator.chooseOperation(button.innerText)
        // constantly update current/previous display values
        calculator.updateDisplay()
    })
})

// compute
equalsButton.addEventListener('click', button => {
    // try to get the computer value, calls the compute function
    calculator.compute()
    // update the display
    calculator.updateDisplay()
})

// All-clear
allClearButton.addEventListener('click', button => {
    // try to get the computer value, calls the compute function
    calculator.clear()
    // update the display
    calculator.updateDisplay()
})

// compute
deleteButton.addEventListener('click', button => {
    // try to get the computer value, calls the compute function
    calculator.delete()
    // update the display
    calculator.updateDisplay()
})
