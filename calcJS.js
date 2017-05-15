
var Num1,Num2,Operetion;
var action = "+";
//функция вывода кнопок на экран
function getValue(id) {
    var res = document.getElementById(id).value - 0;
    if (!isNaN(res))
        return res;
    alert("В элементе " + id + " не численное значение!!!");
}

function PutNum(inputValue) {
    document.getElementById("display").value = (document.getElementById("display").value + inputValue)-0;

}
//функция для "+"
function operetionPlus() {
    Num1 = getValue("display");
    document.getElementById("display").value =0;
   action = "+";
}
//функция для "-"
function subtraction() {
    Num1 = getValue("display");
    document.getElementById("display").value =0;
    action = "-";
}
//функция для "*"
function operetionMultipli() {
    Num1 = getValue("display");
    document.getElementById("display").value = 0;
    action = "*";
}
//функция для "/"
function division() {
    Num1= getValue("display");
    document.getElementById("display").value =0;
    action = "/";
}

//функция для равно
function equally() {
    Num2 = getValue("display");
        switch(action) {
            case "+":
                Operetion =Num1+ Num2;
                break;
            case "-":
                Operetion = Num1 - Num2;
                break;
            case "*":
                Operetion= Num1 * Num2;
                break;
            case "/":
                if (Num2 == 0) {
                    alert("На 0 делить нельзя !");
                }
                else {
                    Operetion = Num1 / Num2;
                }
                break;
        }
        document.getElementById("display").value = Operetion;
}


//функция для "."
function buttondot() {
    if(document.calculator.display.value.indexOf(".")===-1 && document.calculator.display.value.length>=1 ){
    document.calculator.display.value +=".";}
}

//функция для "с"
function buttonclear() {
    document.calculator.display.value ="";

}
//функция для "+/-"
function buttonminusplus() {
    document.calculator.display.value = 0-document.calculator.display.value;
}

window.onload = function () {

    for (var i = 0; i < 10; i++) {
        (function (inputValue) {
            document.getElementById("input_" + inputValue).onclick = function () {
                PutNum(inputValue);
            }
        })(i);
    }
    document.getElementById("plus").addEventListener("click", operetionPlus);
    document.getElementById("equally").addEventListener("click", equally);
    document.getElementById("sub").addEventListener("click", subtraction);
    document.getElementById("mult").addEventListener("click", operetionMultipli);
    document.getElementById("div").addEventListener("click", division);
    document.getElementById("c").addEventListener("click", buttonclear);
    document.getElementById("minusplus").addEventListener("click", buttonminusplus);
    document.getElementById("dot").addEventListener("click", buttondot);
};