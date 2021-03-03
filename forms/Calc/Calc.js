yourNum1=parseInt(prompt("Please enter your first number"))
yourNum2=parseInt(prompt("Please enter your second number"))

function Calculate(num1, num2){
sum=num1+num2
return sum}

summedNumbers=Calculate(yourNum1,yourNum2)
console.log(`The sum of ${yourNum1} and ${yourNum2} is ${summedNumbers}.`)