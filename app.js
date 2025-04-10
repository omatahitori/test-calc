let num = 42
let firstName = 'Vladilen'
const isProgrammer = true

// firstName = 'Max'

// let $ = 'test'

// // alert(firstName)
// console.log('Test:', firstName)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)

// let num2 = num + 10 
// console.log(num, num2)

// num = num2 - num
// console.log(num, num2)

// let num3 = (num + 10) * 2 / 3 - 1

// console.log(num3)

// const fullName = firstName + ' Minin'
// console.log(fullName)

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')

let action = '+'


console.log(input1.value)

// console.log(resultElement.textContent)
// resultElement.textContent = 42

plusBtn.onclick = function () {
    action = '+'
    console.log(action)
}
minusBtn.onclick = function () {
    action = '-'
    console.log(action)
}
multiplyBtn.onclick = function () {
    action = '*'
    console.log(action)
}
divideBtn.onclick = function () {
    action = '/'
    console.log(action)
}

function ptintResult(result){
    if (result < 0){
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeWithAction(inp1, inp2, actionSymbol) {
   const num1 = Number(inp1.value)
   const num2 = Number(inp2.value)
   if (actionSymbol == '+'){
    return num1 + num2
   } 
   else if(actionSymbol == '-') {
    return num1 - num2
   } 
   else if(actionSymbol == '*') {
    return num1 * num2
   } 
   else if(actionSymbol == '/') {
    return num1 / num2
   }
}

submitBtn.onclick = function () {
    const result = computeWithAction(input1, input2, action)
    ptintResult(result)
}
    // if (action == '+'){
    //     const sum = Number(input1.value) + Number(input2.value)
    //     ptintResult(sum)
    // } else if (action == '-'){
    //     const sum = Number(input1.value) - Number(input2.value)
    //     ptintResult(sum)  
    // }
    





