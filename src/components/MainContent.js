import React from 'react'



function MainContent() {

  return (
    <div className='mainContent'>
      <h1 style={{ color: "green" }}>React Practice App</h1>
      <ul className="mainList">
        <li>Click some of these!</li>
        <h6 className="subText">Click amd unclick</h6>
        <input type='checkbox' />
        <li>The is the second option</li>
        <h6 className="subText">Click when complete</h6>
        <input type='checkbox' />
        <li>This is the third option</li>
        <h6 className="subText">Click when complete</h6>
        <input type='checkbox' />
        <img onMouseOver={() => console.log("Hovered!")} className="mainImage" src="https://hackernoon.com/images/z2xg2bpo.jpg" alt="react_js_img"></img>
      </ul>
      <h3>Thanks for checking it out!</h3>
    </div>
  )
}




export default MainContent