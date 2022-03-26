import React from 'react'

export default function Header() {
  return (
    <section className="header">
      <nav className="nav-main">
        <img src='./memelogo.png' />
        <span className="brand"> <h3> Meme Generator </h3>  </span>
        <span className="course-info"> <p> React Course - Project 3 </p> </span>
      </nav>
    </section>
  )
}