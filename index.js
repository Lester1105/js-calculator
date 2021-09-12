let result = 0;
let operations=['divide','multiply','subtract','add']
let workingOperation='';
    function updateDisplay(input){
      let display= document.getElementById('display');
      let secondDisplay= document.getElementById('secondDisplay');

      if(display.innerHTML==='0'&& operations.indexOf(input)===-1){

        if(input==='decimal'){
          display.innerHTML='0.';
        }else{
        display.innerHTML=input;
      }
      }else if(operations.indexOf(input)>=0){

       if(workingOperation==='') {
         workingOperation = input;
         result=display.innerHTML;
         display.innerHTML=0;
       }else{
         result=calculate(result,display.innerHTML,workingOperation)
         secondDisplay.innerHTML=result;
         display.innerHTML=0;
         workingOperation=input;
       }

      }else if(input==='equals'){
display.innerHTML=calculate(result,display.innerHTML,workingOperation)
result=display.innerHTML;
workingOperation='';
      }else if(input==='decimal'){
        if(display.innerHTML.indexOf('.')===-1){
          display.innerHTML+='.';
        }
      }
      else{
      display.innerHTML +=input;
    }
    }
    function calculate(firstNum,secondNum,thirdNum){
      let resultFinal;
      let firstNumber=parseFloat(firstNum);
      let secondNumber=parseFloat(secondNum);
      switch(thirdNum){

        case 'add':
          resultFinal= firstNumber + secondNumber;
          break;
          case 'subtract':
          resultFinal= firstNumber - secondNumber;
          break;
          case 'multiply':
          resultFinal= firstNumber * secondNumber;
          break;
          case 'divide':
          resultFinal= firstNumber / secondNumber;
          break;
        default:
          
      }
      return resultFinal.toString();
    }
    function clearDisplay(){
      let display= document.getElementById('display');
      let secondDisplay= document.getElementById('secondDisplay');
      display.innerHTML=0;
    }