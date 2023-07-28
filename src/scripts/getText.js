const COHERE_API_KEY = import.meta.env.VITE_COHERE_API_KEY

export async function summarizeText(inputText, bodyRequest){

    bodyRequest.text = inputText

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: `Bearer ${COHERE_API_KEY}`
        },
        body: JSON.stringify(bodyRequest)
      };
      
     const res = await fetch('https://api.cohere.ai/v1/summarize', options).catch(error => {return error})
     const data = await res.json().catch(error => {return error})
     return data
}