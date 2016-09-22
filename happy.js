'use strict'
/*
 * 1.- Separar los numeros
 * 2.- Elevar al cuadrado
 * 3.- Sumarlos
 * 4-. if 1 else guardar
 * */


function separate(number) {
    var output = [];
    var sNumber = number.toString();

    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
    }

    return output;
}

function powNumbers(number) {
    var i;

    for (i = 0; i < number.length; i++) {
        number[i] = Math.pow(number[i], 2);
    }

    return number;

}

function sumNumbers(number) {
    var i, total = 0;
    for (i = 0; i < number.length; i++) {
        total += number[i];
    }
    return total;
}

function happyNumber(number) {
    if (number == 1) {
        console.log(history);
        console.log(true);
    } else {
        history.push(number);
        execution(number);
    }

}

var history = [];

function execution(number) {
    var separatedNumber, powedNumber, sumedNumber, result;
    separatedNumber = separate(number);
    powedNumber = powNumbers(separatedNumber);
    sumedNumber = sumNumbers(powedNumber);
    happyNumber(sumedNumber);
}

execution(239);

module.exports = {
    happy: happyNumber,
    separate: separate,
    powNumbers: powNumbers,
    sumNumbers: sumNumbers,
    happNumber: happyNumber
};