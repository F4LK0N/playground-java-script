//### ARITHMETIC ###
console.log("OPERATORS - ARITHMETIC");

console.log("Common");
console.log(10+5);
console.log(10-5);
console.log(10*5);
console.log(10/5);

console.log("Modulus");
console.log(10%5);
console.log(10%3);

console.log("Exponentiation");
console.log(2**2);
console.log(2**3);
console.log(2**4);
console.log(2**5);
console.log(2**6);
console.log(2**7);
console.log(2**8);



//### ASSIGNMENT ###
console.log("OPERATORS - ASSIGNMENT");
let devOperatorsAssignment = 0;

devOperatorsAssignment = 10;
console.log(devOperatorsAssignment);

devOperatorsAssignment += 10;
console.log(devOperatorsAssignment);

devOperatorsAssignment -= 10;
console.log(devOperatorsAssignment);

devOperatorsAssignment *= 10;
console.log(devOperatorsAssignment);

devOperatorsAssignment /= 10;
console.log(devOperatorsAssignment);

devOperatorsAssignment %= 4;
console.log(devOperatorsAssignment);

devOperatorsAssignment **= 8;
console.log(devOperatorsAssignment);



//### COMPARISON ###
console.log("OPERATORS - COMPARISON");

console.log(10 == 10);
console.log(10 == '10');

console.log(10 === 10);
console.log(10 === '10');

console.log(10 != 10);
console.log(10 != '10');

console.log(10 !== 10);
console.log(10 !== '10');

console.log(10 > 10);
console.log(11 > 10);

console.log(10 >= 10);
console.log(11 >= 10);

console.log(10 < 10);
console.log(10 < 11);

console.log(10 <= 10);
console.log(10 <= 11);

console.log(true?11:22);
console.log(false?11:22);



//### COMPARISON STRINGS ###
//Strings are compared alphabetically
console.log("OPERATORS - COMPARISON STRINGS");

console.log('B' > 'B'); //false
console.log('B' > 'A'); //true
console.log('20' < '5'); //true



//### LOGICAL ###
console.log("OPERATORS - LOGICAL");
console.log(true  && true);  //true
console.log(true  && false); //false
console.log(false && false); //false

console.log(true  || true);  //true
console.log(true  || false); //true
console.log(false || false); //false

console.log(!true);  //false
console.log(!false); //true



//### TYPE ###
console.log("OPERATORS - TYPE");
let devTypeVariable;

devTypeVariable = 10;
console.log(typeof devTypeVariable); //number

devTypeVariable = 10.5;
console.log(typeof devTypeVariable); //number

devTypeVariable = 'Value';
console.log(typeof devTypeVariable); //string

devTypeVariable = [1,2,3];
console.log(typeof devTypeVariable); //object

devTypeVariable = {};
console.log(typeof devTypeVariable); //object



//### BITWISE ###
console.log("OPERATORS - BITWISE");
console.log(5 & 1); //0101 & 0001 = 0001
console.log(5 | 1); //0101 & 0001 = 0101
console.log(~5);    //~0101       = 1010
console.log(5 ^ 1); //0101 ^ 0001 = 0100
console.log(5 << 1);//0101 << 1   = 1010
console.log(5 >> 1);//0101 >> 1   = 0101

