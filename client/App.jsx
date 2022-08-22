import React, { useState, useEffect } from 'react'

import { getQuotes } from './apiClient'
import Loader from './Loader'

function App() {
  const [quoteData, setQuoteData] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [quoteArr, setQuoteArr] = useState('')
  let [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      //https://zenquotes.io/api/quotes
      getQuotes()
        .then((data) => {
          console.log('data.body', data)
          setQuoteData(data[index].q)
          setAuthorName(data[index].a)
          setQuoteArr(data)
        })
        .catch((err) => console.error(err.message))
        .finally(() => {
          setLoading(false)
        })
        .catch((err) => console.error(err.message))
    }, 1000)
  }, [])

  // function newQuote() {
  //   let myIndex = 1
  //   setQuoteData(quoteData[myIndex++ % data.length])
  // }

  function handleClick() {
    setIndex(index < quoteArr.length ? (index += 1) : 0)

    setQuoteData(quoteArr[index].q)
    setAuthorName(quoteArr[index].a)
  }

  return (
    <>
      <h2>Inspirational Quotes</h2>
      <h3>Get Inspired!</h3>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div id="quote-box">
            <p id="text">{quoteData}</p>
            <p id="author">{authorName}</p>
            <button id="new-quote" onClick={handleClick}>
              New Quote
            </button>
            <a id="tweet-quote" href="https://twitter.com/">
              tweet
            </a>
            ;
          </div>
          Inspirational quotes provided
          <a href="https://zenquotes.io/" target="_blank">
            ZenQuotes API
          </a>
        </>
      )}
    </>
  )
}

export default App
