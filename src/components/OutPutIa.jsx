function OutPutIa({ textSummary, changeButton, setChangeButton }) {
  return (
    <div className={`container-output-ia ${changeButton ? "nondisplay" : ""}`}>
      
      <div className="container-data-div-output-input">
        <p>Summary</p>
      </div>
      
      <div className="output-ia">
        {textSummary === false
          ? "Waiting..."
          : textSummary.summary != undefined
          ? textSummary.summary
          : "Welcome"}
      </div>
    </div>
  );
}

export default OutPutIa;
