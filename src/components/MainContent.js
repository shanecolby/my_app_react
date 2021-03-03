import React from 'react'

function MainContent() {
  return (
    <div className='mainContent'>
      <h1>This is the Working App page</h1>
      <ul className="mainList">
        <li>This is the first step</li>
        <h6 className="subText">Click when complete</h6>
        <input type='checkbox' />
        <li>The is the second step</li>
        <h6 className="subText">Click when complete</h6>
        <input type='checkbox' />
        <li>This is the third step</li>
        <h6 className="subText">Click when complete</h6>
        <input type='checkbox' />
        <img className="mainImage" src="https://hackernoon.com/images/z2xg2bpo.jpg"></img>
      </ul>
      <h3>Thanks for checking it out!</h3>
    </div>
  )
}

export default MainContent