import { useState } from "react";
import OutPutIa from "./OutPutIa";
import TextArea from "./TextArea";
function Text({ setTextArea, wordCount, textSummary, setChangeButton, changeButton }) {
  const handleTextArea = (e) => {
    setTextArea(e.target.value);
  };


  return (
    <>  
          <button id="toggleButton" onClick={(e) => {
            setChangeButton(!changeButton)

        }}>{changeButton === true ? "response" : "text"}</button>
    <section className="input-output">
      
        <TextArea handleTextArea={handleTextArea} wordCount={wordCount} changeButton={changeButton} setChangeButton={setChangeButton}/>
        <OutPutIa textSummary={textSummary} changeButton={changeButton} setChangeButton={setChangeButton}/>
      </section>
    </>
  );
}

export default Text;
