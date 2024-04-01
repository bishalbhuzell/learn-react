import React,{useState} from 'react'


export default function Textform(props) {

    const [text, setText] = useState('Enter text here');
    // text = "You can write anything inside it."; //wrong way to change the state
    // setText = ("You can write anything inside it."); //correct way to change the state

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked." + text);
        // setText("You have clicked on handleUpClick");
        
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        // console.log("lowercase was clicked." + text);
        // setText("You have clicked on handleLoClick");
        
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () =>{
        // console.log("Clear was clicked.");
        // setText("You have clicked on Clear");
        
        let newText = "";
        setText(newText);
    }
    const handleCopy = () =>{
        // console.log("copy text was clicked.");
        // setText("You have clicked on TExt Copy");
        
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const handleExtraSpace = () =>{
        // console.log("copy text was clicked.");
        // setText("You have clicked on TExt Copy");
        
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    
  return (
    <div className='container'>
        <h1>{props.heading}</h1>
    <div className="mb-3">
        {/* <label for="myBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick} >Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick} >Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy} >Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpace} >Remove Extra Space</button>
        {/* <button className='btn btn-primary mx-2' onClick={email} >Extract Email</button> */}
    </div>

    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>

        <h2>Preview</h2>
        <p>{text} </p>
    </div>

    </div>
  )
}
