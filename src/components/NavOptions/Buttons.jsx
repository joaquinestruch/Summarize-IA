import { summarizeText } from "../../scripts/getText";

const handleChangeSelection = (e, setBodyRequest, currentValor) => {
  const { value } = e.target;
  setBodyRequest((oldBody) => {
    const newBody = { ...oldBody }; 
    if (value !== "auto") {
      newBody[currentValor] = value;
    } else {
      delete newBody[currentValor];
    }
    return newBody; 
  });
};

export function SelectLength({setBodyRequest}) {
  return (
    <div>
      <p>length</p>
      <select name="length" id="" onChange={(e) => {handleChangeSelection(e, setBodyRequest, "length")}}>
        <option value="auto">auto</option>
        <option value="short">short</option>
        <option value="medium">medium</option>
        <option value="long">long</option>
      </select>
    </div>
  );
}

export function SelectFormat({setBodyRequest}) {
  return (
    <div>
      <p>format</p>
      <select name="format" id="" onChange={(e) => {handleChangeSelection(e, setBodyRequest, "format")}}>
        <option value="auto">auto</option>
        <option value="paragraph">paragraph</option>
        <option value="bullets">bullets</option>
      </select>
    </div>
  );
}

export function SelectModel({setBodyRequest}) {
  return (
    <div>
      <p>model</p>
      <select name="model" id="" onChange={(e) => {handleChangeSelection(e, setBodyRequest, "model")}}>
        <option value="auto">auto</option>
        <option value="summarize-medium">summarize-medium</option>
        <option value="summarize-xlarge">summarize-xlarge</option>
      </select>
    </div>
  );
}

export function SelectExtractiveness({setBodyRequest}) {
  return (
    <div>
      <p>extractiveness</p>
      <select name="model" id="" onChange={(e) => {handleChangeSelection(e, setBodyRequest, "extractiveness")}}>
        <option value="auto">auto</option>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
    </div>
  );
}

export function ButtonSubmit({ textArea, setTextSummary, wordCount,bodyRequest, setChangeButton, changeButton }) {
  console.log(wordCount)
  return (
    <div>
      <p>summary</p>
      <button
      className="btn-options submit"
      style={{ backgroundColor: "#73a89a" }}
      onClick={async () => {
        if (wordCount < 250) {
          setTextSummary({"message": "Min letters 250"})
          return;
        }

        if (wordCount > 50000) {
          setTextSummary({"message": "Max letters 50.000"})
          return;
        }

        setTextSummary(false);

        if(changeButton === true){
          setChangeButton(!changeButton)

        }

        await setTextSummary(await summarizeText(textArea, bodyRequest));
      }}
    >
      submit
    </button>
    </div>

  );
}
