import Button from "./components/button";
import { useState } from "react";
function MainWork() {
  const deleteStyle = {
    backgroundColor: 'rgb(236, 160, 160)',
    color: 'black',
  };
  const deleteButton = {
    backgroundColor: 'rgb(240, 56, 56)',
    color: 'black',
    width: '80px',

  }
  const [result, useResult] = useState(0);


  const handlebuttons = (param) => {
    let S = result.toString();
    let l = S.length;

    if (result == "0" || result == "NaN" || result == "Infinity" || result == "undefined") {
      useResult(Number(param));
    }
    else if ((S.charAt(l - 1) == '+' || S.charAt(l - 1) == '-' || S.charAt(l - 1) == '*' || S.charAt(l - 1) == '/')
      && (param == '+' || param == '-' || param == '*' || param == '/' || param == '%')) { }

    else {
      useResult(result + param);
    }
  };

  const handleDelete = () => {
    let l = result.length - 1;
    let res = result[0];
    if (l > 0) {
      for (let i = 1; i < l; i++) {
        res = res + result[i]
      }
    }
    else {
      res = "0";
    }
    useResult(res);

  }

  const handleresult = () => {
    //handle div/0
      const res = new Function('return ' + result)();
      console.log('result: ', res);
      if((res)=='Infinity' || res=='-Infinity'){
        console.log('Infinity or -Infinity');
        useResult("0");
      }else{
        useResult(res.toString());
      }

    
  }
  const handleSign = () => {
    let S = result.toString();
    let l = S.length;
    let last = [];
    const signs = ["+", "-", "/", "*"];
    console.log('sign: ', S.split("+").length - 1);
    console.log('last: ', l - 1, 'is?: ', !signs.some(sign => String(result).includes(sign)));
    //if the string contains one sign or doesn't at all
    if (((S.charAt(0) == '-') &&
      ((S.split("+").length - 1) > 1 || (S.split("-").length - 1) > 1 || (S.split("*").length - 1) == 1 || (S.split("/").length - 1) == 1))
      || (!signs.some(sign => String(result).includes(sign))
      )) {
      useResult((-1) * Number(result));
      console.log('first');
    }
    else if ((S.charAt(l - 1) == '+' || S.charAt(l - 1) == '-' || S.charAt(l - 1) == '*' || S.charAt(l - 1) == '/')) {
      console.log('second');
    }
    else {
      for (let i = l - 1; i >= 0; i--) {
        if ((S.charAt(i) == '+' || S.charAt(i) == '-' || S.charAt(i) == '*' || S.charAt(i) == '/')) {
          break;
        }
        last.unshift(S[i]);

      }
      let updated = '(' + (Number(((-1) * (Number(last.join("")))).toString())) + ')';
      console.log('updated:', updated);
      console.log('join: ', Number(last.join("")));
      let inside = updated.replace("(", "");
      let inside2 = Number(inside.replace(")", ""));
      console.log('inside: ', (inside2));
      let lastIndex = S.lastIndexOf(last.join(""));
      if (lastIndex !== -1) {
        useResult(S.substring(0, lastIndex) + updated + S.substring(lastIndex + last.join("").length));
        console.log('inside2<<<<<0');
      } else {
        console.log('Last value not found in S');
      }
    }

  };
  return (
    <>
      <div className="mainContainer">
        <div className="viewContainer">
          <p>{result}</p>
        </div>
        <div className="MainButtonsContainer">
          <div className="buttonsContainer">
            <Button textButton="C" onClick={() => useResult(0)} />
            <Button textButton="%" onClick={(e) => handlebuttons(e.target.innerText)} />
            <Button textButton="+/-" onClick={handleSign} />
            <Button style={deleteButton} textButton="del" onClick={handleDelete} />
          </div>
          <div className="buttonsContainer">
            <Button textButton="7" onClick={(e) => handlebuttons((e.target.innerText))} />
            <Button textButton="8" onClick={(e) => handlebuttons((e.target.innerText))} />
            <Button textButton="9" onClick={(e) => handlebuttons((e.target.innerText))} />
            <Button style={deleteStyle} textButton="x" onClick={() => handlebuttons('*')} />
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