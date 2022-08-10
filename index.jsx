import React from 'react'
import ReactDOM from 'react-dom'

const FIRST_NAME = 'Luke'
const LAST_NAME = 'Norris'

// create an h3 with name in it

// const myName = <h2>{FIRST_NAME} - {LAST_NAME}</h2>

const renderFirstName = ({ isBold }) => {
  return <h1>{FIRST_NAME}</h1>
}

const RenderLastName = ({ children, isBold }) => {
  return <div>
    {isBold ? <b>{LAST_NAME}</b> : <p>{LAST_NAME}</p>}
    {children}
  </div>
}

const toRender =
  FIRST_NAME.charAt(0) === 'N' ? (
    renderFirstName({ isBold: true })
  ) : (
    <RenderLastName isBold={true}>
      <h2>Hello</h2>
      <h3>World</h3>
      <div>
        <p>Its me</p>
        <a href="https://www.reactjs.org"> link </a>;
      </div>
    </RenderLastName>
  )

ReactDOM.render(toRender, document.getElementById('root'))
