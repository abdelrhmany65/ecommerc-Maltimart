import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import Helmet from '../components/helmet/Helmet';
import ProductList from '../components/ui/ProductList';
import CommoSection from '../components/ui/CommoSection'
import products from "../assets/data/products";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slice/cartSlice';
import { toast } from 'react-toastify';

import './style.css';

const ProductDetails = () => {

  const {id} = useParams();
  const product = products.find(item => item.id === id)
  const {imgUrl, productName, price, avgRating, reviews, description, shortDesc, category} = 
  product

  const relatproducts = products.filter((item) => item.category === category);

  const dispach = useDispatch()
  const addToCart = () =>{
      dispach(cartActions.addItem({
          id,
          productName,
          price,
          img:imgUrl,
      }));
      toast.success('Item added to cart!')
      
  }


  return (
    <Helmet title={productName}>

      <CommoSection title={productName} />
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <img src={imgUrl} />
          </Col>
          <Col md={6} xs={12} className='mt-5'>

            <h2 className='pt-5 p-3 fw-bolder'>{productName}</h2>
            <div className='d-flex ps-3'>
              <span className='text-warning'><FaStar/></span>
              <span className='text-warning'><FaStar/></span>
              <span className='text-warning'><FaStar/></span>
              <span className='text-warning'><FaStarHalf/></span>
              <p className='text-dark'>(<span className='text-warning'>{avgRating}</span> :Rating)</p>
            </div>
            <h6 className='p-3 fw-bold'>category: {category}</h6>
            <p className='p-3'>{shortDesc}</p>
            <p className='p-3'>{description}</p>
            <h6 className='p-3 fw-bold'>Price: ${price}</h6> 
            <button className='btn btn-dark mb-5 mt-2 ms-3' onClick={addToCart}>Add to Cart</button>

          </Col>
        </Row>
            <Col md={12}>
              <div className="review d-flex mt-5 pt-5 mb-4">
                <h5 className='px-4'>description:</h5>
                <h5>Reviews: ({reviews.length})</h5>
              </div>
              <p className='px-4 mb-5'>{description}</p>
            </Col>
        <Row>

        <Row>
          <Col lg={12} >
            <h2 className='text-center fw-bold m-5 p-5 bg-light'>you might also like</h2>
          </Col>
          <ProductList data={relatproducts}/>
        </Row>
        </Row>
      </Container>
    </Helmet>
  )
}

export default ProductDetails