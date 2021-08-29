let inputEl = document.getElementById("input-el")
const acBtn = document.getElementById("ac-btn")
const delBtn = document.getElementById("del-btn")
const oneBtn = document.getElementById("one-btn")
const twoBtn = document.getElementById("two-btn")
const threeBtn = document.getElementById("three-btn")
const fourBtn = document.getElementById("four-btn")
const fiveBtn = document.getElementById("five-btn")
const sixBtn = document.getElementById("six-btn")
const sevenBtn = document.getElementById("seven-btn")
const eightBtn = document.getElementById("eight-btn")
const nineBtn = document.getElementById("nine-btn")
const zeroBtn = document.getElementById("zero-btn")
const dotBtn = document.getElementById("dot-btn")
const equalBtn = document.getElementById("equal-btn")
const divideBtn = document.getElementById("divide-btn")
const multiplyBtn = document.getElementById("multiply-btn")
const plusBtn = document.getElementById("plus-btn")
const minusBtn = document.getElementById("minus-btn")
let operation = ""
let equalActive = false
let isAction = false

// buttons responsible for entering values

oneBtn.addEventListener("click", function() {
  if (equalActive) {
    inputEl.value = ""
    operation = ""
    equalActive = false
  }
  inputEl.value += 1
  operation += "1"
  isAction = false
})
twoBtn.addEventListener("click", function() {
  if (equalActive) {
    inputEl.value = ""
    operation = ""
    equalActive = false
  }
  inputEl.value += 2
  operation += "2"
  isAction = false
})
threeBtn.addEventListener("click", function() {
  if (equalActive) {
    inputEl.value = ""
    operation = ""
    equalActive = false
  }
  inputEl.value += 3
  operation += "3"
  isAction = false
})
fourBtn.addEventListener("click", function() {
  if (equalActive) {
    inputEl.value = ""
    operation = ""
    equalActive = false
  }
  inputEl.value += 4
  operation += "4"
  isAction = false
})
fiveBtn.addEventListener("click", function() {
  if (equalActive) {
    inputEl.value = ""
    operation = ""
    equalActive = false
  }
  inputEl.value += 5
  operation += "5"
  isAction = false
})
sixBtn.addEventListener("click", function() {
  if (equalActive) {
    inputEl.value = ""
    operation = ""
    equalActive = false
  }
  inputEl.value += 6
  operation += 6
  isAction = false
})
sevenBtn.addEventListener("click", function() {
  if (equalActive) {
    inputEl.value = ""
    operation = ""
    equalActive = false
  }
  inputEl.value += 7
  operation += "7"
  isAction = false
})
eightBtn.addEventListener("click", function() {
  if (equalActive) {
    inputEl.value = ""
    operation = ""
    equalActive = false
  }
  inputEl.value += 8
  operation += "8"
  isAction = false
})
nineBtn.addEventListener("click", function() {
  if (equalActive) {
    inputEl.value = ""
    operation = ""
    equalActive = false
  }
  inputEl.value += 9
  operation += "9"
  isAction = false
})
zeroBtn.addEventListener("click", function() {
  if (equalActive) {
    inputEl.value = ""
    operation = ""
    equalActive = false
  }
  inputEl.value += 0
  operation += "0"
  isAction = false
})
dotBtn.addEventListener("click", function() {
  if (equalActive) {
    inputEl.value = ""
    operation = ""
    equalActive = false
  }
  if (operation.charAt(0) == "" || operation.indexOf("+") || operation.indexOf("-") || operation.indexOf("*") || operation.indexOf("/")) {
    inputEl.value += "0."
  } else {
    inputEl.value += "."
  }
  operation += "."
  isAction = false
})





// buttons responsible for counting

plusBtn.addEventListener("click", function() {
  if (!isAction) {
    inputEl.value += "+"
    operation += "+"
    isAction = true
    equalActive = false
  }
})
minusBtn.addEventListener("click", function() {
  if (!isAction) {
    inputEl.value += "-"
    operation += "-"
    isAction = true
    equalActive = false
  }
})
multiplyBtn.addEventListener("click", function() {
    if (!isAction) {
      inputEl.value += "*"
      operation += "*"
      isAction = true
      equalActive = false
    }
})
divideBtn.addEventListener("click", function() {
    if (!isAction) {
    inputEl.value += "/"
    operation += "/"
    isAction = true
    equalActive = false
  }
})
acBtn.addEventListener("click", function() {
  inputEl.value = ""
  operation = ""
  isAction = true
  equalActive = false
})
delBtn.addEventListener("click", function() {
  input = inputEl.value
  input = input.slice(0,input.length-1)
  inputEl.value = input
  operation = operation.slice(0,operation.length-1)
  equalActive = false
  if (input) {
    isAction = false
  } else {
    isAction = true
  }
})



// button responsible for making result

equalBtn.addEventListener("click", function() {
  let equal = 0
  let num1 = ""
  let num2 = ""
  let pause = 0
  for (let i=0; i<operation.length; i++) {
    if (operation.charAt(i)!="+" && operation.charAt(i)!="-" && operation.charAt(i)!="*" && operation.charAt(i)!="/") {
      if (!num2) {
        num1 += operation.charAt(i)
        pause = i
      }
    } else {
      for (let i=pause+1; i<operation.length; i++) {
        if (operation.charAt(i)!="+" && operation.charAt(i)!="-" && operation.charAt(i)!="*" && operation.charAt(i)!="/") {
          num2 += operation.charAt(i)
          }
        }
    }
  } 
  num1 = Number(num1)
  num2 = Number(num2)
  console.log(num1, num2)
  if (operation.charAt(pause+1)=="+") {
    equal = num1 + num2
  } else if (operation.charAt(pause+1)=="-") {
    equal = num1 - num2
  } else if (operation.charAt(pause+1)=="*") {
    equal = num1 * num2
  } else {
    equal = num1 / num2
  }
  inputEl.value = equal
  operation = String(equal)
  isAction = false
  equalActive = true
})
