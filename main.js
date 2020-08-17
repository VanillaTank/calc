var bntPlus = document.getElementById('plus');
var btnMinus = document.getElementById('minus');
var btnMyltiply = document.getElementById('multiply');
var btnDevide = document.getElementById('devide');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');



 
bntPlus.addEventListener('click', function() {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var result = number1 + number2;
    window.alert(result);
})
btnMinus.addEventListener('click', function() {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var result = number1 - number2;
    window.alert(result);
})
btnMyltiply.addEventListener('click', function() {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var result = number1 * number2;
    window.alert(result);
})
btnDevide.addEventListener('click', function() {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var result = number1 / number2;
    window.alert(result);
})

