import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper Case Button is clicked" + text)
        let newText = text.toUpperCase(text)
        setText(newText)
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase(text)
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("On change method is called")
        setText(event.target.value)
    }
    const handleClearClick = ()=>{
        let newtext= " ";
        setText(newtext)
    }
    const handlecopy=() =>{
        console.log("I am copy function")
        var ext = document.getElementById("myBox");
        ext.select()
        navigator.clipboard.writeText(ext.value);
    }
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text,setText] = useState(""); 
  return (
    <>
        <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} value={text} rows="8"></textarea>
             </div>
             <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
             <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
             <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear The Text</button>
             <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy The Text</button>
             <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Handle extra space</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} Characters </p>
            <p>{0.008*(text.split(" ").length)} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text.length>0? text : "Enter something to Preview it Here"}</p>
        </div>
    </>
    )
}
