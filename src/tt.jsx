import Button from "./components/button";
import { useState } from "react";
function MainWork() {
  const deleteStyle = {
    backgroundColor: 'rgb(236, 160, 160)',
    color: 'black',
  };
  const [result, useResult] = useState(0);
  const [count, useCount] = useState(0);


  const handlebuttons = (param) => {

    console.log(result, param)
    if (result == "0") {
      useResult(Number(param));
      console.log('from z: ', param);
    }
    else {
      useResult(result + param);
      if (param === "+" || param === "-" || param === "x" || param === "/") {
      }
    }
  };
  const handleresult = () => {
    console.log('from result: ', result);

    let l = result.length;
    console.log('l: ', l);
    let j = 0;
    let lis = []
    let res;
    let i =0;
    lis[j]='';
    while (i < l) {
      if (result[i] === "x" || result[i] === "+" || result[i] === "-" || result[i] === "/") {
        switch (result[i]) {
          case '+':
            res = Number(lis[j]) + Number(lis[j + 1]);
            break;
          case 'x':
            res = Number(lis[j]) * Number(lis[j + 1]);
            break;
          case '-':
            res = Number(lis[j]) -  Number(lis[j + 1]);
            break;
          case '/':
            res = Number(lis[j]) / Number(lis[j + 1]);
            break;

          default:
            break;
        }
        i++;
        j++;
        lis[j]='';

      }
      lis[j] =  lis[j]+result[i];
      console.log('lis[',j,']: ', lis[j]);
      i++;
    }
    useResult(res)
  }
  return (
    <>
      <div className="mainContainer">
        <div className="viewContainer">
          <p>{result}</p>
        </div>
        <div className="MainButtonsContainer">
          <div className="buttonsContainer">
            <Button textButton="C" onClick={() => useResult(0)} />
            <Button textButton="+/-" onClick={(e) => handlebuttons(e.target.innerText)} />
            <Button textButton="%" onClick={(e) => handlebuttons(e.target.innerText)} />
            <Button style={deleteStyle} textButton="<-" />
          </div>
          <div className="buttonsContainer">
            <Button textButton="7" onClick={(e) => handlebuttons(Number(e.target.innerText))} />
            <Button textButton="8" onClick={(e) => handlebuttons(Number(e.target.innerText))} />
            <Button textButton="9" onClick={(e) => handlebuttons(Number(e.target.innerText))} />
            <Button style={deleteStyle} textButton="x" onClick={(e) => handlebuttons(e.target.innerText)} />
          </div>
          <div className="buttonsContainer">
            <Button textButton="4" onClick={(e) => handlebuttons(e.target.innerText)} />
            <Button textButton="5" onClick={(e) => handlebuttons(e.target.innerText)} />
            <Button textButton="6" onClick={(e) => handlebuttons(e.target.innerText)} />
            <Button style={deleteStyle} textButton="-" onClick={(e) => handlebuttons(e.target.innerText)} />
          </div>
          <div className="buttonsContainer">
            <Button textButton="1" onClick={(e) => handlebuttons(e.target.innerText)} />
            <Button textButton="2" onClick={(e) => handlebuttons(e.target.innerText)} />
            <Button textButton="3" onClick={(e) => handlebuttons(e.target.innerText)} />
            <Button style={deleteStyle} textButton="+" onClick={(e) => handlebuttons(e.target.innerText)} />
          </div>
          <div className="buttonsContainer">
          </div>

          <Button textButton="=" onClick={handleresult} />
          <Button textButton="0" onClick={(e) => handlebuttons(e.target.innerText)} />
          <Button textButton="." onClick={(e) => handlebuttons(e.target.innerText)} />
          <Button style={deleteStyle} textButton="/" onClick={(e) => handlebuttons(e.target.innerText)} />
        </div>
      </div>
    </>
  );
}
export default MainWork;