//### DECLARATION ###
//Always declare variables.

//Only use var if you MUST support old browsers.
var devVarVariable = "";

//Always use const if the value should not be changed.
//Always use const if the type should not be changed (Arrays and Objects).
const devConstant = "";

//Only use let if you can't use const.
let devLetVariable = "";



//### ONE STATEMENT, MANY VARIABLES ###
//You can declare many variables in one statement:
let devPerson = "John Doe", devCarName = "Volvo", devPrice = 200;

//A declaration can span multiple lines:
let devPerson2 = "John Doe",
devCarName2 = "Volvo",
devPrice2 = 200;



//### VALUE ###
let devNotInitializedVariable; // == undefined
//const devNotInitializedConstant; //Uncaught SyntaxError: missing = in const declaration


//### REDECLARE ###
var devVarVariableInitialized = "Initial Value";
var devVarVariableInitialized; // == "Initial Value"

let devLetVariableInitialized = "Initial Value";
//let devLetVariableInitialized; //Uncaught SyntaxError: redeclaration of let devLetVariableInitialized



//### ARITHMETIC ###
let devArithmetic;
devArithmetic = 5 + 3 + 2;   // == 10
devArithmetic = '5' + 3 + 2  // == '532'
devArithmetic = 5 + 3 + '2'  // == '82'
devArithmetic = (5 + 3) * 2; // == 16



//### LET ###
//The let keyword was introduced in ES6 (2015).
//Variables defined with let can not be redeclared.
//Variables defined with let must be declared before use.
//Variables defined with let have block scope.



//### CONST ###
//The const keyword was introduced in ES6 (2015).
//Variables defined with const cannot be Redeclared.
//Variables defined with const cannot be Reassigned.
//Variables defined with const have Block Scope.

//=== ARRAYS ===
// You can create a constant array:
const devConstCars = ["Saab", "Volvo", "BMW"];
// You can change an element:
devConstCars[0] = "Toyota";
// You can add an element:
devConstCars.push("Audi");
// You can NOT reassign the array:
//devConstCars = ["Toyota", "Volvo", "Audi"]; //Uncaught TypeError: invalid assignment to const

//=== OBJECTS ===
// You can create a const object:
const devConstObjCar = {type:"Fiat", model:"500", color:"white"};
// You can change a property:
devConstObjCar.color = "red";
// You can add a property:
devConstObjCar.owner = "Johnson";
// You can NOT reassign the object:
//devConstObjCar = {type:"Volvo", model:"EX60", color:"red"}; //Uncaught TypeError: invalid assignment to const
