
function button1() {
    document.calculator.display.value +="1";
}
function button2() {
    document.calculator.display.value +="2";
}
function button3() {
    document.calculator.display.value +="3";
}
function button4() {
    document.calculator.display.value +="4";
}
function button5() {
    document.calculator.display.value +="5";
}
function button6() {
    document.calculator.display.value +="6";
}
function button7() {
    document.calculator.display.value +="7";
}
function button8() {
    document.calculator.display.value +="8";
}
function button9() {
    document.calculator.display.value +="9";
}
function button0() {
    document.calculator.display.value +="0";
}
function buttonplus() {
    document.calculator.display.value +="+";
}
function buttonminus() {
    document.calculator.display.value +="-";
}
function buttondivision() {
    document.calculator.display.value +="/";
}
function buttonmultiply() {
    document.calculator.display.value +="*";
}
function buttondot() {
    document.calculator.display.value +=".";
}
function buttonclear() {
    document.calculator.display.value ="";
}
function buttonminusplus() {
    document.calculator.display.value = 0-document.calculator.display.value;
}
function buttonequally() {
    var equally= eval(document.calculator.display.value)
    document.calculator.display.value = equally;
}