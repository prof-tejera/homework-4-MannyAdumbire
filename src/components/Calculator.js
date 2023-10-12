import { useState } from "react";
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */
  const [calc, setCalc] = useState({ operator: '', current: '', tally: '', display: '0' });

  /** TODO: what happens when I click a number? */
  const handleNumberClick = (e) => {
    setCalc(prevState => {
      return { current: calc.current + e.target.textContent, operator: prevState.operator, tally: prevState.tally, display: calc.current + e.target.textContent };
    });

  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = (e) => {

    // Get the operator.
    let clickedOp = '';
    switch (e.target.textContent) {
      case "+":
        clickedOp = '+';
        break;
      case "/":
        clickedOp = '/';
        break;
      case "x":
        clickedOp = '*';
        break;
      case "-":
        clickedOp = '-';
        break;
      case "=":
        clickedOp = "=";
        break;
      case "clear":
        clickedOp = "clear";
        break;
      default:
        break;
    }
    setCalc(prevState => {
      if (clickedOp === 'clear') {
        return { current: '', operator: '', tally: 0, display: '0' };
      }
      if (clickedOp === '=') {
        const newTally = calculateTally(prevState.operator, calc.tally, calc.current) || calc.current || calc.tally;
        return { current: '', operator: '', tally: newTally, display: newTally };
      }
      // If there is a current value, and an operator, and a tally, then calculate the new tally.
      if (calc.current && clickedOp && calc.tally) {
        // Evaluate the current value and the tally.
        const newTally = calculateTally(clickedOp, calc.tally, calc.current) || calc.current || calc.tally;
        return { current: '', operator: clickedOp, tally: newTally, display: newTally };
      }
      else if (calc.current && clickedOp) {
        return { current: '', operator: clickedOp, tally: calc.current, display: prevState.current };
      }
      // Default to the previous state.
      return { current: prevState.current, operator: clickedOp, tally: prevState.tally, display: 0 };
    });
  };

  // Calculate the tally using string values of operator and operands.
  function calculateTally(operator, current, tally) {
    // Convert the string values to numbers.
    current = parseFloat(current);
    tally = parseFloat(tally);
    if (!operator || !current || !tally) return current;
    switch (operator) {
      case '+':
        return current + tally;
      case '-':
        return current - tally;
      case '*':
        return current * tally;
      case '/':
        if (tally !== 0) {
          return current / tally;
        } else {
          return 0;
        }
      default:
        return current;
    }
  }


  return (
    <div>
      <Screen value={calc.display} />
      <div style={{ display: "flex", width: 'max-content', margin: '0 auto' }}>
        <div style={{ display: "flex", flex: 5, justifyContent:"space-around", width: "10rem", flexFlow: 'row wrap', flexDirection: 'row', margin: '0 auto' }}>
          <Number key='key-1' value={1} onClick={handleNumberClick} />
          <Number key='key-2' value={2} onClick={handleNumberClick} />
          <Number key='key-3' value={3} onClick={handleNumberClick} />
          <Number key='key-4' value={4} onClick={handleNumberClick} />
          <Number key='key-5' value={5} onClick={handleNumberClick} />
          <Number key='key-6' value={6} onClick={handleNumberClick} />
          <Number key='key-7' value={7} onClick={handleNumberClick} />
          <Number key='key-8' value={8} onClick={handleNumberClick} />
          <Number key='key-9' value={9} onClick={handleNumberClick} />
          <Number key='key-0' value={0} onClick={handleNumberClick} />
        </div>
        <div style={{ paddingLeft: 10 }}>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
          <Operation value="clear" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
