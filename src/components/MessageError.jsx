import {GoAlertFill} from "react-icons/go"

function MessageError({textSummary, alertError}) {
  return (
    <span className={`alert-error`} style={alertError === false ? {display:"none"} : {display:"inline"}}>
        <GoAlertFill/>
        {
            textSummary.message
        }
    </span>
  )
}

export default MessageError