import React from 'react'
import memesData from '../memesData.js'

export default function Meme() {

  function clickAction() {
    console.log("hey")
  }

  return (
    <form className="meme">
      <input className="meme-input" placeholder="Shut up" type="text" />
      <input className="meme-input" placeholder="And take my money" type="text" />
      <button onClick={clickAction} className="meme-button"> Get a new meme image </button>
    </form>
  )
}


