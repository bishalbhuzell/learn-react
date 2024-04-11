import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    // const [btntext, setbtntext] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //    if(myStyle.color === 'black'){
    //     setMyStyle({
    //         color:'white',
    //     backgroundColor:'black',
    //     border:'1px solid white'

    //     })
    //     setbtntext("Enable Light Mode")
    //    }
    //    else{
    //     setMyStyle({
    //         color:'black',
    //     backgroundColor:'white',
    //     })
    //     setbtntext("Enable Dark Mode")
    //    }
    // }

    let myStyle = {
        color: props.mode ==='dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'black':'white'
    }

  return (
    <div className="container" style={myStyle}>
        <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
    <div className="accordion-item" >
        <h2 className="accordion-header">
        <button className="accordion-button"  type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    <strong>Analyze your text</strong>        
    </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
           Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count
        </div>
        </div>
    </div>
    <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
           Textutils is a free character counter tool that provides instant character count & word count statistics for a given sentences. Textutils reports the number of words and characters.Thus it is suitable for writing text with words, characters limits.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            This word counter software works in any web browsers such as chrome,firefox,internet explorer,safari,opera.It suits to count characters in facebook,blog,books,excel documents,pdf documents,essays,etc.
        </div>
        </div>
    </div>
    </div>

    {/* <div className="container my-3" >
        <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
    </div> */}

    </div>
  )
}
