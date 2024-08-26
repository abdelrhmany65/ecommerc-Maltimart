// import productImage from "../../assets/images/arm-chair-01.jpg";
import './style.css';

import { FaPlusCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slice/cartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({data}) => {

    const dispach = useDispatch()
    const addToCart = () =>{
        dispach(cartActions.addItem({
            id: data.id,
            productName: data.productName,
            price: data.price,
            quantity: 1,
            imgUrl: data.imgUrl,
        }));
        toast.success('Item added to cart!')
        
    }


  return (
    <Col lg='3' md='6' xs='12' className='mb-3'>
        <div className="prduct__cart">
            <div className="card border-0">
                <img src={data.imgUrl} alt="productImage"/>
                <div className="card-body my-4">
                    <h3 className="fs-5 fw-bold" ><Link to={`/shop/${data.id}`}>{data.productName}</Link></h3> 
                    <span>{data.category}</span>
                    <p className="card-text my-2 fw-light">Some quick example text to build on the card </p>
                    <div className="card__icon d-flex justify-content-between align-items-center">
                        <span>${data.price}</span>
                        <div>
                            <span onClick={addToCart} className='icoons'><FaPlusCircle /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Col>

  )
}

export default ProductCard;