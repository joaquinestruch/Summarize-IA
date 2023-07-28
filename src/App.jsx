import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Text from './components/Text'
import NavOptions from './components/NavOptions/NavOptions'
import MessageError from './components/MessageError'

function App() {
  const [textArea, setTextArea] = useState(""); 
  const [textSummary, setTextSummary] = useState("");
  const [bodyRequest, setBodyRequest] = useState({}); 
  const [alertError, setAlertError] = useState(false);
  const [changeButton, setChangeButton] = useState(true);



  useEffect(() => {
    if (textSummary.message !== undefined) {
      setAlertError(true);
      setTimeout(() => setAlertError(false), 3000); 
    }
  }, [textSummary]);

  const wordCount = useMemo(() => {
    const words = textArea;
    return words.length;
  }, [textArea]);

  return (
    <>
    <Header/>
    <main>
      <MessageError textSummary={textSummary} alertError={alertError} setAlertError={setAlertError}/>
      <Text changeButton={changeButton} setChangeButton={setChangeButton} setTextArea={setTextArea} wordCount={wordCount} textSummary={textSummary}/>
      <NavOptions setTextSummary={setTextSummary} changeButton={changeButton} setChangeButton={setChangeButton} textArea={textArea} wordCount={wordCount} setBodyRequest={setBodyRequest} bodyRequest={bodyRequest}/>
    </main>

    </>
  )
}

export default App
