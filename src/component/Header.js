import React from 'react'
import Logo from "../images/job-board-app-pic.png"

export const Header = () => {
  return (
    <header>
      <h1>
        <img className="object-fit-contain" height="100" weight="auto" src={Logo} alt="Job Board Application" />
        Job Board Application</h1>
    </header>
  )
}
