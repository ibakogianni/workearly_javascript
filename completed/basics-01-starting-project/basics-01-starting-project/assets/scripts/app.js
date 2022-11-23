const defaultResult=0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput(){
 return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResults, operationNumber, newResult){
    const logEntry ={
        operation: operationIdentifier,
        prevResults: prevResults,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

function calculateResult(calculationType){
    const enteredNumber = getUserInput();
    if (calculationType !== 'ADD' && calculationType !=='SUBSTRACT' && calculationType !== 'MULTIPLY' && calculationType !=='DIVIDE' || !enteredNumber){
        return;
    }
    const initialresult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD'){
        currentResult += enteredNumber ; 
        mathOperator = '+';
    } else if(calculationType === 'SUBSTRACT'){
        currentResult -= enteredNumber ; 
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY'){
        currentResult *=  enteredNumber ; 
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE'){
        currentResult /=  enteredNumber ; 
        mathOperator = '/';
    }
  
    createAndWriteLog(mathOperator, initialresult, enteredNumber);
    writeToLog(calculationType, initialresult, enteredNumber, currentResult);
}

function add(){
 calculateResult('ADD');
}

function substract(){
    calculateResult('SUBSTRACT');
   
}
    

function  multiply(){
    calculateResult('MULTIPLY');
}

function divide(){
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

