import React from 'react'


function Header() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  return (
    <header className='navbar'> Good {`${timeOfDay}`}! Welcome to my page...</header>
  )
}

export default Header