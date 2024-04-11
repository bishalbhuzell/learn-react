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
        props.showAlert("Converted to Uppercase", "success")
        document.title = 'TextUtils-Uppercase'
    }
    const handleLoClick = () =>{
        // console.log("lowercase was clicked." + text);
        // setText("You have clicked on handleLoClick");
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
        document.title = 'TextUtils-Lowercase'


    }
    const handleClearClick = () =>{
        // console.log("Clear was clicked.");
        // setText("You have clicked on Clear");
        
        let newText = "";
        setText(newText);
        props.showAlert("Text area is cleared", "success")
        document.title = 'TextUtils-Clear'


    }
    const handleCopy = () =>{
        // console.log("copy text was clicked.");
        // setText("You have clicked on TExt Copy");
        
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges()
        props.showAlert("Text copied successfully", "success")
        document.title = 'TextUtils-Copy'


    }
    const handleExtraSpace = () =>{
        // console.log("copy text was clicked.");
        // setText("You have clicked on TExt Copy");
        
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been handled", "success")
        document.title = 'TextUtils-ExtraSpace'


    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    
  return (
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1 className='mb-4'>{props.heading}</h1>
    <div className="mb-3">
        {/* <label for="myBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick} >Convert to Uppercase</button> 
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick} >Convert to Lowercase</button> 
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClearClick} >Clear Text</button> 
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy} >Copy Text</button> 
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpace} >Remove Extra Space</button>
        {/* <button className='btn btn-primary mx-2' onClick={email} >Extract Email</button> */}
    </div>

    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * (text.split(" ").filter((element)=>{ return element.length!==0}).length)} Minutes to read </p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something for the preview"} </p>
    </div>

    </div>
  )
}
