function deleteChar() {
    display.value = display.value.substring(0, display.value.length - 1)
}

function evalu() {
    display.value = eval(display.value)
}

function fe() {
    display.value = Number(display.value).toExponential();
}

function exp() {
    display.value = Math.exp(display.value);
}
function factorial() {
    var i, n, j;
    j = 1;
    n = display.value;
    for (i = 1; i <= n; i++) {
        j = j * i;
    }
    i = i - 1;
    display.value = j;
}
function restrictAlphabets(e) {
    var x = e.which || e.keycode;
    if ((x >= 48 && x <= 57))
        return true;
    else
        return false;
}
var memvalue = [];

function memory(id) {

    switch (id) {
        case "MS":
            memvalue.unshift(Number(display.value));
            break;
        case "MC":
            memvalue = [];
            break;
        case "M+":
            if (memvalue[0])
                display.value = Number(display.value) + memvalue[0];
            break;
        case "M-":
            if (memvalue[0])
                display.value = memvalue[0] - Number(display.value);
            break;
        case "MR":
            if (memvalue[0])
                display.value += memvalue[0];
            break;
    }
    document.getElementById("memory").innerHTML = (memvalue.length === 0 ? "empty memory" : memvalue[0]);
}

var togglev = true;

function update() {

    if (togglev) {
        document.getElementById("x2").innerText = "x^3";
        document.getElementById("sqrt").innerText = "3√x";
        document.getElementById("xraisey").innerText = "y√x";
        document.getElementById("10x").innerText = "2^x";
        document.getElementById("log").innerText = "log yx";
        document.getElementById("logn").innerText = "e^x";
        document.getElementById("2nd").style.color = "black";
        document.getElementById("2nd").style.backgroundColor = "#a0b8ff";
        togglev = !togglev;
    }
    else {
        document.getElementById("x2").innerText = "x^2";
        document.getElementById("sqrt").innerText = "2√x";
        document.getElementById("xraisey").innerText = "x^y";
        document.getElementById("10x").innerText = "10^x";
        document.getElementById("log").innerText = "log";
        document.getElementById("logn").innerText = "ln";
        document.getElementById("2nd").style.color = "black";
        document.getElementById("2nd").style.backgroundColor = "white";
        togglev = !togglev;
    }
}

function power() {
    if (togglev) {
        display.value = Math.pow(display.value, 2);
    }
    else {
        display.value = Math.pow(display.value, 3);

    }
}
function root() {
    if (togglev) {
        display.value = Math.sqrt(display.value) * 2;
    }
    else {
        display.value = Math.sqrt(display.value) * 3;

    }
}

function ex() {
    if (togglev) {
        display.value += '**'
    }
    else {
        display.value += '**'
    }
}

function x10() {
    if (togglev) {
        display.value = Math.pow(10, display.value);
    }
    else {
        display.value = Math.pow(2, display.value);
    }
}

function loge() {
    if (togglev) {
        display.value = Math.log(display.value);
    }
    else {
        display.value = Math.log(display.value);
    }
}

function nlog() {
    if (togglev) {
        display.value = Math.log(display.value);
    }
    else {
        display.value = 2.718281828 ** display.value;
    }
}


var radtodeg = true;

function deg() {
    if (radtodeg) {
        document.getElementById("change").innerText = "DEG";
        document.getElementById("change").style.color = "black";
        document.getElementById("change").style.backgroundColor = "#a0b8ff";

        radtodeg = !radtodeg
    }
    else {
        document.getElementById("change").innerText = "RAD";
        document.getElementById("change").style.color = "black";
        document.getElementById("change").style.backgroundColor = "white";
        radtodeg = !radtodeg
    }
}

function sine() {
    if (radtodeg) {
        display.value = Math.sin(display.value);
    }
    else {
        display.value = (display.value) * (Math.PI / 180);
        display.value = Math.sin(display.value);
    }
}

function cosec() {
    if (radtodeg) {
        display.value = Math.cos(display.value);
    }
    else {
        display.value = (display.value) * (Math.PI / 180);
        display.value = Math.cos(display.value);
    }
}
function tane() {
    if (radtodeg) {
        display.value = Math.tan(display.value);
    }
    else {
        display.value = (display.value) * (Math.PI / 180);
        display.value = Math.tan(display.value);
    }
}