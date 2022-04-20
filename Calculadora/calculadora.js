var result = document.querySelector('.result');
var btns = document.querySelector(.'buttons');
var ops = document.querySelectorAll('.operations');

var clearToggle = false;
var timeFlag = false;

var valStack = [];

var canOperate = false;

btns.addEventListener(click, function (e) {
    var resultValue = result.innerHTML;
    var btn = e.target;
    if (btn.className.indexOf("resetBtn")){
        init();
    }else if(btn.className.indexOf("number")){
        canOperate = true;
        if(clearToggle){
            resultValue = "";
            clearToggle = false;
        }
        if(resultValue = '0'&& btn className.indexOf("dot") === -1)
        
    }

}

function calculate(num1, num2, op){
    switch(op){
        case '+':
           return parsefloat(num1) + parsefloat(num2);
        case '-':
            return parsefloat(num1) - parsefloat(num2);
        case '*':
            return parsefloat(num1) * parsefloat(num2);
        case '/':
            return parsefloat(num1) / parsefloat(num2);
    }
}

function init(){
    clearToggle = false;
    timeFlag = false;
    valStack = [];
    canOperate = false;
    result.innerHTML = "0";
}