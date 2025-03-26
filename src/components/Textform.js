import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase","success");
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleLoClick = (event) => {
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase","success");
    };
    const handleClearClick = (event) => {
        setText("");
        props.showAlert("Text is Cleared","success");
    };
    const handleCapitalClick=(event)=>{
        let str=text;
        let newStr=str.charAt(0).toUpperCase();
        for(let i=1;i<str.length;i++){
            if(str[i-1]===' '){
                let val=str.charAt(i).toUpperCase();
                newStr+=val;

            }
            else{
                newStr+=str[i];
            }
        }
        setText(newStr);
        props.showAlert("Text has been Capitalize","success");
       
    }
    const handleCopyClipboard=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","success");
    };
    const mystyleColor=()=>{
        if(props.mode==='dark'){
            return 'white';
        }
        else if(props.mode==='success'){
            return '#E4EFE7';
        }
        else if(props.mode==='danger'){
            return 'grey';
        }
        else{
            return 'dark';
        }
    }
    const mystyleBackgroundColor=()=>{
        if(props.mode==='dark'){
            return 'grey';
        }
        else if(props.mode==='success'){
            return 'green';
        }
        else if(props.mode==='danger'){
            return '#EDF4C2'
        }
        else{
            return 'white';
        }

    }
    const setButtonColor=()=>{
        if(props.mode==='dark')
        return 'primary';
    else if(props.mode==='success')
        return 'success';
    else if(props.mode==='light')
        return 'secondary';
    else
    return 'danger';
    }
    const wordsCount=()=>{
        let arr=text.split(" ");
        let emptyList=arr.filter((arr)=>arr==="").length;
        return arr.length-emptyList;
    }
   
   
    return (
        

        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:mystyleBackgroundColor(),color:mystyleColor()}} value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <div className="container"> <button className={`btn btn-${setButtonColor()} mx-2 my-2`} onClick={handleUpClick}>Convert to UpperCase</button>
                <button className={`btn btn-${setButtonColor()} mx-2 my-2 `} onClick={handleLoClick}>Convert to LowerCase</button>
                <button className={`btn btn-${setButtonColor()} mx-2 my-2`} onClick={handleClearClick}>Clear</button>
                <button className={`btn btn-${setButtonColor()} mx-2 my-2`} onClick={handleCapitalClick}>Capitalize</button>
                <button className={`btn btn-${setButtonColor()} mx-2 my-2`} onClick={handleCopyClipboard}>Copy to Clipboard</button></div>
               
            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>Words {wordsCount()} and Character {text.length}</p>
                <p>{0.008*text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter Something in textbox to Preview here'}</p>
                </div></>
    )
}
Textform.propTypes = {
    heading: PropTypes.string.isRequired
}
Textform.defaultProps = {
    heading: 'Enter your text here'
}
