import React from 'react'
import "./product.css"
import {data} from "./product-data"

const Product = () => {
  return (
    <div>
        <h3 className="product__catergory">តែមផុសសម្រាប់ click125i/click150i</h3>
        <div className="product__container">
            {data.map(({image,title,description})=>{
                return(
                    <artical className="product__card">
                        <div className="product__image">
                            <img src={image} alt="" />
                        </div>
                        <div className="product__spec">
                            <div className="product__spec-wrapper">
                               <h3>{title}</h3>
                               <p>{description}</p>
                               <a className="buy__now" href="https://m.me/Lyath.Chhay">Buy Now</a>
                            </div>
                        </div>
                </artical> 
                )
            })}
        </div>
    </div>
  )
}


export default Product;