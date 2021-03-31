import React from "react"


function Product(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{props.product.name}</h2>
      <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
      <button>Click to purchase</button>
    </div>
  )
}

export default Product