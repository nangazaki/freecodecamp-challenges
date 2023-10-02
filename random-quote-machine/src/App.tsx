import './App.css'
import { useEffect, useState } from 'react'
import { returnQuote } from './utils/quotes'

const getQuotes = returnQuote;

interface Quote {
  id: number;
  author: string;
  quote: string;
}

function App() {
  const [quote, setQuote] = useState<Quote | undefined>({})
  const colors = ["gray", "blue", "orange", "green", "red", "purple"];
  
  useEffect(() => {
    setQuote(() => getQuotes())
  }, [])

  function handleNewQuote() {
    setQuote(() => getQuotes())
  }

  return <>
  <div id="wrapper"></div>
    <div id="quote-box">
      <div id="text">{quote?.quote}</div>
      <div id="author">{quote?.author}</div>
      <div id="new-quote" onClick={handleNewQuote}>New Quote</div>
      <a href="" id="tweet-quote"></a>
      <h1></h1>
    </div>
  </>
}

export default App
