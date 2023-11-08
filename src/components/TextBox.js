import React,{useState} from 'react';
import Proptypes from 'prop-types';

export default function TextBox(props) {

    const [text, setText] = useState('');
    
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase", "success");
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase", "success");
    }
    
    const handleGetEmails = () => {
        let pattern = '/[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+/';
        let matches = text.match(pattern);
        let newText = '';
        for(let i=1; i<=matches.length ; i++)
        {
            newText += i +'. '+matches[i]+'\n';
        }
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const getWordCount = (text) => {
         return text.split(/\s+/).filter((element)=>{return element.length!==0}).length;
    }

  return (
    <>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
        <h2>{props.heading}</h2>
        <textarea className="form-control" id="myText" style={{background:props.mode==='dark'?'#a8a6a6':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleUpperCase}>Convert To UpperCase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleLowerCase}>Convert To LowerCase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleGetEmails}>Get Emails</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{getWordCount(text)} words and {text.length} characters</p>
        <p>{0.008 * getWordCount(text)} minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter text in above textbox to preview.'}</p>
    </div>
    </>
  )
}

TextBox.propTypes = {
    heading : Proptypes.string.isRequired
}

TextBox.defaultProps = 
{
    heading : 'Heading Here'
}
