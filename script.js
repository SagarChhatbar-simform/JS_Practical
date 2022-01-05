function deleteChar() {
	display.value = display.value.substring(0, display.value.length - 1)
}

function evalu(){
    display.value = eval(display.value)
}

function sine(){
    display.value = Math.sin(display.value)
}

function cosec(){
    display.value = Math.cos(display.value)
}
function tane(){
    display.value = Math.tan(display.value)
}

function exp(){
    display.value = Math.exp(display.value);
}
function factorial(){
    var i,n,j;
    j=1;
    n = display.value;
    for(i=1;i<=n;i++){
    j=j*i;
    }
    i = i-1;
    display.value = j;
}
function restrictAlphabets(e){
    var x = e.which || e.keycode;
    if((x>=48 && x<=57))
        return true;
    else
        return false;
}