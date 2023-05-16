import { useEffect, useState } from "react"

const API = 'http://localhost:3007/api/products'

export default function Products() {
    const [ products, setProducts ] = useState([]) 

    useEffect( () => {
      
      productRequest(API)
      
    }, [] )

    const productRequest = async (API) => {
      let res = await fetch(API)
      let data = await res.json()
      setProducts(data)
    }

    return (
      <>
        <h3> productos</h3>
  {
    products.data?.map(product=>{
      return (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <img src={"http://localhost:3007/images/products/" + product.image}/> 
        </div>
      )
    })

  }

        
    
      </>
    )
  }