import React ,{useState} from 'react'; 


export default function Fromtext(props) {
  const  handleUpClick =()=> {
let newText= text.toUpperCase();
setText(newText)
props.showAlert("text is converted to uppercase","success");

  }
  const  handleUpClick2 =()=> {
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("text is converted to lowercase","success");

      }

      const handleCopy=()=>{
        var text=document.getElementById('mybox')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text is copied","success")

      }
      const  handleClearText =()=> {
        let newText='';
        setText(newText)
        props.showAlert("text is cleared","success")
          }

  const  handleOnChange =(event)=> {
    setText(event.target.value)

  }
  // hooks ususually let use use classs without actually reating class
  const [text, setText] = useState('Enter your text');
  //setText=("new text")
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'#03285e'}}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea 
          className="form-control" 
         
          value={text}
          onChange={handleOnChange}
          id="mybox"
           style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#03285e'}}
          rows="10" // Increase the number of rows
          cols="50" // Increase the number of columns
        />
      </div>
  <button className="btn btn-primary mx-1"onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1"onClick={handleUpClick2}>Convert to lowercase</button>
  <button className="btn btn-primary mx-1"onClick={handleClearText}>Clear Text</button>
  <button className="btn btn-primary mx-1"onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#03285e'}}>
<h1> text summary</h1>
<p>   {text.split(" ").length} and  {text.length}</p>
<p> {0.008*text.split(" ").length}minute read</p>
<h2>preview</h2>
<p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  );
} 