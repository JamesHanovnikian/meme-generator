import React from 'react'
import memesData from '../memesData.js'

export default function Meme() {
  let url

  // const [memeImage, setMemeImage] = React.useState()

  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function clickAction() {
    console.log("hey")
    let i = 0
    let memes = allMemeImages["data"]["memes"]
    let randomMeme = memes[Math.floor(Math.random() * memes.length)]
    url = randomMeme["url"]
    setMemeImage(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  return (
    <div className="meme">
      <input className="meme-input" placeholder="Shut up" type="text" />
      <input className="meme-input" placeholder="And take my money" type="text" />
      <button onClick={clickAction} className="meme-button"> Get a new meme image </button>
      <img className="meme-image" src={memeImage.randomImage} />
    </div>
  )
}


