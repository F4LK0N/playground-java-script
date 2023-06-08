function devFunctionName(parameter1, parameter2=10) {
    let localScopeVar=5;
    console.log("Inside Function");
    return 10;
}

devFunctionName(1);

let devFunctionReference = devFunctionName;
devFunctionReference(2);
