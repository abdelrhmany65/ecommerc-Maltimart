import React from 'react'
import ProductCard from './ProductCard'
import { Row } from 'react-bootstrap'

const ProductList = ({data}) => {
  return (

    <Row>

      {
        data?.map((data, index) => (
          <ProductCard data={data} key={index} />
        ))
      }
      
    </Row>

  )
}

export default ProductList