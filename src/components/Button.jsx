


function Button(props) {//+
  return (//+
    <button className={`buttons ${props.className}`} style={props.style} onClick={props.onClick}>
      {props.textButton}
    </button>//+
  );//+
}
export default Button;  