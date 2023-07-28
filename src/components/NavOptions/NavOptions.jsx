import {
  ButtonSubmit,
  SelectLength,
  SelectFormat,
  SelectModel,
  SelectExtractiveness,
} from "./Buttons";
import "./navOptions.css";

function NavOptions({
  setTextSummary,
  textArea,
  wordCount,
  setBodyRequest,
  bodyRequest,
  changeButton, 
  setChangeButton
}) {
  return (
    <nav className="nav-options">
      <ButtonSubmit
        setTextSummary={setTextSummary}
        textArea={textArea}
        wordCount={wordCount}
        bodyRequest={bodyRequest}
        setChangeButton={setChangeButton}
        changeButton={changeButton}
      />

      <SelectLength setBodyRequest={setBodyRequest} />
      <SelectFormat setBodyRequest={setBodyRequest} />
      <SelectModel setBodyRequest={setBodyRequest} />
      <SelectExtractiveness setBodyRequest={setBodyRequest} />
    </nav>
  );
}

export default NavOptions;
