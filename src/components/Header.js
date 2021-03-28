import React from 'react'


function Header() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }

  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else if (hours === 5) {
    timeOfDay = "HappyHour!"
    styles.color = "green"
  } else {
    timeOfDay = "evening"
    styles.color = "#D90000"
  }

  return (
    <header className='navbar' style={styles}> Good {`${timeOfDay}`}! Welcome to my page...</header>
  )
}

export default Header