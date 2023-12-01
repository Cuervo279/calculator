let display = document.getElementById("calc_display");

function erase() {
    display.value = "";
}

function add(num) {
    display.value += num;
}

function operator(op){
    num1 = display.value;
    opr = op;
    display.value = "";
}

function calculate() {
    num2 = display.value;
    display.value = eval(num1 + opr + num2);
}




















/* function add(num) {
    display.value = display.value + parseFloat(num);
}


function erase() {
    display.value = "";
}

function operator(op) {
    opr.value = op;
    display.value = "";
}

function calculate() {
    display.value = num1 + opr + num2;
}
*/