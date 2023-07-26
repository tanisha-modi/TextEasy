import React, {useState} from "react";


function TextForm(props) {
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleRemoveClick = () => {
        // let newText = text.toLowerCase();
        setText('');
        props.showAlert("Text Cleared!", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{textAlign: "left"}}>
      <div className="mb-3">
        <h1 style={{color: props.mode === 'dark' ? 'white' : '#212529'}}>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          placeholder="Enter your text"
          onChange={handleOnChange}
          style={{backgroundColor: props.mode === 'dark' ? '#606060' : 'white', color: props.mode === 'dark' ? 'white' : '#212529'}}
        ></textarea>
      </div>
      <button className="btn btn-secondary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-secondary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-secondary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-secondary mx-2" onClick={handleRemoveClick}>Clear Text</button>
      <button className="btn btn-secondary mx-2" onClick={handleCopy}>Copy to Clipboard</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#212529', textAlign: "left"}} >
        <h2>Your text summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> Takes { 0.008 * text.split(" ").length} minutes to read on average </p>
        <h2>Preview</h2>
        <p className="border">{text.length >0? text : "Enter something in textbox to preview here"}</p>
    </div>
    </>
  );
}

export default TextForm;
