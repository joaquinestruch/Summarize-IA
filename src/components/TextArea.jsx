import React from 'react'
import {AiOutlineInfoCircle} from "react-icons/ai"

function TextArea({handleTextArea, wordCount,changeButton, setChangeButton}) {
  return (
    <div className={`text-area-total ${!changeButton ? "nondisplay" : ""}`}>
    
    <div className='container-data-div-output-input'>
    <p>Text Length: {wordCount} <span className="info-icon"><AiOutlineInfoCircle/></span> </p>

    </div>

    <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={(e) => {
          handleTextArea(e);
        }}
      ></textarea>
    </div>
  )
}

export default TextArea