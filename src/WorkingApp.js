import React from 'react'

import MainContent from './components/MainContent'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from "./components/Product"
import productData from "./components/randomProducts"
import ClassPract from "./components/ClassPract"
import Loggedin from "./components/Loggedin"
import ButtonNumber from "./components/ButtonNumber"



function WorkingApp() {
  const productComponents = productData.map(item => <Product key={item.id} product={item} />)
  return (
    <div>
      <Header />
      <ButtonNumber />
      <Loggedin />
      <MainContent />
      {productComponents}
      <ClassPract />
      <Footer />
    </div>
  )
}

export default WorkingApp