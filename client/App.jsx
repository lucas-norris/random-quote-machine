import React, { useState, useEffect } from 'react'
//import { setInterval } from 'timers'

import { getQuotes } from './apiClient'
import Loader from './Loader'

function App() {
  const [quoteData, setQuoteData] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [quoteArr, setQuoteArr] = useState('')
  let [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    //const interval = setInterval(() => {
    setLoading(true),
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
    // }, 1000 * 60 * 30)
    //return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true),
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
    }, 1000 * 60 * 30)
    return () => clearInterval(interval)
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
      {loading ? (
        <Loader />
      ) : (
        <>
          <div id="quote-box">
            <p id="text">{quoteData}</p>
            <p id="author">- {authorName}</p>
            <button id="new-quote" onClick={handleClick}>
              New Quote
            </button>
            <a
              className="button"
              id="tweet-quote"
              title="Tweet this quote!"
              target="blank"
              href="https://twitter.com/intent/tweet"
            >
              <ion-icon name="logo-twitter"></ion-icon>
              {/* <i class="fa fa-twitter">::before</i> */}
            </a>
          </div>
          <footer>
            Inspirational quotes provided by -
            <a href="https://zenquotes.io/" target="_blank">
              ZenQuotes API
            </a>
          </footer>
        </>
      )}
    </>
  )
}

export default App
