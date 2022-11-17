import React, { useState } from 'react'
export default function TextForm(props) {

    // On change function to write in the text area
    const handleOnChange = (e) => {
        updateText(e.target.value);
    }

    // Convert text to upper case
    const handleUpclick = () => {
        let upperText = text.toUpperCase();
        updateText(upperText);
        props.showAlert("Converted to uppercase", 'success');
    }

    // Convert text to lower case
    const handleLoclick = () => {
        let lowerText = text.toLowerCase();
        updateText(lowerText);
        props.showAlert("Converted to lowercase", 'success');
    }

    // Clear the text
    const handleClear = () => {
        let clearText = '';
        updateText(clearText);
        props.showAlert("Text cleared", 'success');
    }


    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", 'success');
    }

    const handleRemoveExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        updateText(newText.join(" "));
        props.showAlert("Extra spaces has been removed", 'success');
    }
    const handleSpace = () => {
        updateText(text.split('').join(' '));
        props.showAlert("Add extra space", 'success');
    }
    // text is variable settext is function and  is used for upate the variable
    const [text, updateText] = useState('');

    // text = "New text"; //Wrong way to update state
    // setText("New text"); //Correct way to update state

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8" placeholder='Enter text here'></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleSpace}>Add extra space</button>
                <button className="btn btn-danger mx-1 my-2" onClick={handleClear}>Clear Text</button>

            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>In <span className='text-danger'>{0.008 * text.split(' ').length}</span> minutes you can finish to read</p>
                <h3>Preview </h3>
                <p>{text.length > 0 ? text : 'Enter something in the above textbox to preview it here.'}</p>
            </div>
        </>
    )
}