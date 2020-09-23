
const display = document.querySelector('#display')
const total = document.querySelector('#totalplus')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')

console.log(display.innerHTML) // prints the text inside the tags
console.log(billInput.value) // prints the value entered into the input

billInput.value = 50

function calculateTip() {
    const billValue = billInput.value
    const tipValue = tipInput.value
    const peopleValue = peopleInput.value
  
    const tipAmount = billValue * tipValue / 100 / peopleValue

    display.innerHTML = tipAmount.toFixed(2)
}

function calculateTotal() {
    const billValue = billInput.value
    const tipValue = tipInput.value
    const peopleValue = peopleInput.value
    const tipAmount = billValue * tipValue / 100

    var billS = billValue
    var bill = parseFloat(billS)
    var tipS = tipAmount
    var tip = parseFloat(tipS)
    
    const totalAmount = (bill + tip) / peopleValue

    total.innerHTML = totalAmount.toFixed(2)
}

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)
billInput.addEventListener('input', calculateTotal)
tipInput.addEventListener('input', calculateTotal)
peopleInput.addEventListener('input', calculateTotal)


calculateTip()
calculateTotal()
