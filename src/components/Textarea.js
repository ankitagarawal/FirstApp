  import React, {useState} from 'react'

  export default function Textarea(props) {
   
    

    // iss function se hum text ko uppercase mein convert kr rhe hein.
      const handleUpClick = (event)=> {
          // console.log("uppercase was clicked");
          // setText("You  have clicked on handle upclick");
          setText(text.toUpperCase())
          props.showAlert("Text is converted to Uppercase","success");

      }
      
      // iss function se hum text ko lower case mein convert kr rhe hein.
      const handleLoClick = (event)=> {
        setText(text.toLowerCase())
        props.showAlert("Text is converted to Lowercase","success");

      }
      // iss function se hum text area ko clear kr rhe hein.
      const handleClearClick = (event)=> {
        setText(" ") 
        props.showAlert("Text is Cleard","success");


      }
    // iss function se hum text ki value change kr rhe hein. 
      const handleOnChange = (event)=> {
          console.log("onChange was clicked");
          setText(event.target.value)
      }
      const [text, setText] = useState('Enter Text Here2');
      
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?"white":"black"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value= {text}  onChange={handleOnChange} 
      style={{backgroundColor: props.mode==='dark'?"grey":"white", color:props.mode==='dark'?"white":"black"}}id="myBox" rows="8" ></textarea>
      </div>
      <button className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>convert to uppercase</button> 
      <button className="btn btn-success mx-3 my-2" onClick={handleLoClick}>convert to lowercase</button>
      <button className="btn btn-warning mx-3 my-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className=" my-3"  style={{color:props.mode==='dark'?"white":"black"}}>
      <p>{text.split(" ").filter(( element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter(( element)=>{return element.length!==0}).length} Minutes to read</p>
      <h1>Preview here</h1>
      <p>{text}</p>
    </div>
    </>
    )
    
  }
