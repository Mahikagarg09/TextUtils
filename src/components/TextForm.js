import React,{useState} from 'react';



export default function TextForm(props) {

    const handleUpClick =() =>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLowClick =() =>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleClearClick =() =>{
        let newtext='';
        setText(newtext);
        props.showAlert("Text is Cleared","success");
    }

    const handleExtraSpaces= () =>{
        let newtext=text.split(/[  ]+/);
        setText(newtext.join(' '));
        props.showAlert("Extra sPaces have been removed","success");
    }

    const handleCopy =() =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text is Copied","success");
    }
    
    const handleOnChange =(event) =>{
        setText(event.target.value);
        
    }

    const[text,setText]=useState('');
    return (
        <>
            <div className="container" style={{color:props.mode==='light' ? 'black' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light' ? 'white' : '#043738',color:props.mode==='light' ? 'black' : 'white'}} className="form-control" id="myBox" rows="9" />
                </div>
                <button disabled={text.length===0}  onClick={handleUpClick} className="btn btn-primary mx-1 my-1">Convert to UpperCase</button>
                <button  disabled={text.length===0} onClick={handleLowClick} className="btn btn-primary mx-1 my-1">Convert to LowerCase</button>
                <button disabled={text.length===0} onClick={handleExtraSpaces} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>
                <button disabled={text.length===0}  onClick={handleCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>
                <button disabled={text.length===0}onClick={handleClearClick} className="btn btn-primary mx-1 my-1">Clear</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='light' ? 'black' : 'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split().filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) =>{return element.length!==0}).length } minutes taken to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter some text to preview it here"}</p>
            </div>
        </>
    )
}
