import Button from "./components/button";
import { useState } from "react";
function MainWork() {
  const deleteStyle = {
    backgroundColor: 'rgb(236, 160, 160)',
    color: 'black',
  };
  const deleteButton={
    backgroundColor: 'rgb(240, 56, 56)',
    color: 'black',
    width: '160px',

  }
  const [result, useResult] = useState(0);


  const handlebuttons = (param) => {

    console.log(result, param)
    if (result == "0") {
      useResult(Number(param));
      console.log('from z: ', param);
    }
    else {
      useResult(result + param);
      
    }
  };

  const handleDelete = () => {
    let l = result.length - 1;
    let res = result[0];
    if (l > 0){
      for (let i = 1; i < l; i++) {
        res = res + result[i]
    }}
    else{
      res = "0";
    }
    useResult(res);

  }

  const handleresult = () => {
    const res = new Function('return ' + result)();
    useResult(res.toString());
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
            <Button textButton="%" onClick={(e) => handlebuttons(e.target.innerText)} />
            <Button style={deleteButton} textButton="delete" onClick={handleDelete}/>
          </div>
          <div className="buttonsContainer">
            <Button textButton="7" onClick={(e) => handlebuttons(Number(e.target.innerText))} />
            <Button textButton="8" onClick={(e) => handlebuttons(Number(e.target.innerText))} />
            <Button textButton="9" onClick={(e) => handlebuttons(Number(e.target.innerText))} />
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