
//функция вывода кнопок на экран
function inputBotton(num) { //функция будет считывать value кнопки
     var p = document.calculator.display.value;
    if (p> 0) { //если на дисплей что то выводилось ранее
        meaning  = p.toString() + num.toString(); //то переменной присваиваем результат строки "то что на дисплее + значение кнопки"
        meaning  = Number(meaning); //превращаем строку в число  и выводим на дисплей результат
        document.calculator.display.value = meaning;
    } else {
        document.calculator.display.value = num;
    }
}
//будет считывать операцию из value кнопкия
function calculating(Signs) {
   var rez = Number(document.getElementById('numberMemory').value); //для удобства введем дополнительную переменную и присвоим ей значение числа в памяти

    if (document.calculator.operation.value == 0) { //Если в память не записаны операции
        document.getElementById('numberMemory').value = document.calculator.display.value; //то просто записываем число на дисплее в блок памяти
    } else { //если же что то есть
        if (document.getElementById('operation').value == '+') { // то проверяем что за операция записана
            document.getElementById('numberMemory').value = rez + Number(document.calculator.display.value); //и производим эту операцию с числом в памяти и числом на дисплее
        }
        if (document.getElementById('operation').value =='-') {
            document.getElementById('numberMemory').value = rez - Number(document.calculator.display.value);
        }
        if (document.getElementById('operation').value == '*') {
            document.getElementById('numberMemory').value = rez * Number(document.calculator.display.value);
        }
        if (document.getElementById('operation').value =='/') {
            document.getElementById('numberMemory').value = rez / Number(document.calculator.display.value);
        }
    }
    var newOperation = Signs.toString(); //записываем в память новую операцию
    document.getElementById('operation').value = newOperation;
    document.calculator.display.value = 0; //обнуляем число на дисплее
}
//функция для равно
function buttonequally() {

    if (document.calculator.operation.value == 0) { //если в памяти не записаны операции
        var  p = document.calculator.display.value; // то просто записываем число с дисплея в переменную
    } else { // а если что то есть
        if (document.getElementById('operation').value == '+') { //то проверяем что за операция в памяти
            p = Number(document.getElementById('numberMemory').value) + Number( document.calculator.display.value); //и производим эту операцию с числом в памяти и числом на дисплее
        }
        if (document.getElementById('operation').value =='-') {
            p = Number(document.getElementById('numberMemory').value) - Number( document.calculator.display.value);
        }
        if (document.getElementById('operation').value == '*') {
            p = Number(document.getElementById('numberMemory').value) * Number( document.calculator.display.value);
        }
        if (document.getElementById('operation').value == '/') {
            if(Number(document.calculator.display.value)===0){
                alert("На 0 делить нельзя !!!!")
                p=0;
            }else {
                p = Number(document.getElementById('numberMemory').value) / Number( document.calculator.display.value);
            }
        }
    }
    document.calculator.display.value = p; //возвращаем результат на дисплей
    document.getElementById('operation').value = 0;//очищаем поле operation
    document.getElementById('numberMemory').value = 0;//очищаем поле numberMemory
}
//функция для "."
function buttondot() {
    if(document.calculator.display.value.indexOf(".")===-1 && document.calculator.display.value.length>=1 ){
    document.calculator.display.value +=".";}
}
//функция для "с"
function buttonclear() {
    document.calculator.display.value =0;
    document.calculator.operation.value =0;
    document.calculator.numberMemory.value =0;
}
//функция для "+/-"
function buttonminusplus() {
    document.calculator.display.value = 0-document.calculator.display.value;
}
