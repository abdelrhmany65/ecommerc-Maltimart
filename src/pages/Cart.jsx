import { useSelector, useDispatch } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { MdDeleteOutline } from "react-icons/md";
import Helmet from '../components/helmet/Helmet';
import CommoSection from '../components/ui/CommoSection';
import { cartActions } from '../redux/slice/cartSlice';
import { Link } from 'react-router-dom';
import './style.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const subtotal = useSelector(state => state.cart.totalAmount); 
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(cartActions.updateQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <Helmet title='Cart'>
      <CommoSection title='Shopping Cart' />
      <section>
        <Container>
          <Row>
            <Col lg={9} md={8} xs={12}>
              {cartItems.length === 0 ? (
                <h1 className='text-center fw-bold m-5 p-5 bg-light'>No items added to the cart</h1>
              ) : (
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr className='text-center'>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr key={index} className='text-center'>
                          <th scope="row">{index + 1}</th>
                          <td><img src={item.imgUrl} alt={item.productName} className="img-fluid" /></td>
                          <td>{item.productName}</td>
                          <td>${item.totalPrice}</td>
                          <td>
                            <input 
                              type="number" 
                              value={item.quantity} 
                              min="1" 
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} 
                            />
                          </td>
                          <td>
                            <span onClick={() => handleRemoveItem(item.id)} style={{ cursor: 'pointer' }} className='fs-4'>
                              <MdDeleteOutline />
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Col>
            <Col lg={3} md={4} xs={12} className="total__sub mt-4 mt-md-0">
              <div className='p-3 rounded text-white'>
                <h6 className='fs-5 fw-bold'>Sub Total</h6>
                <span>${subtotal.toFixed(2)}</span>
                <p className='mt-2'>Taxes and shipping will be calculated at checkout.</p>
                <div className='mt-4 d-flex flex-column'>
                  <Link to='/shop' className="mb-2">
                    <button type="button" className="btn btn-light w-100">
                      Continue Shopping
                    </button>
                  </Link>
                  <Link to='/checkout'>
                    <button type="button" className="btn btn-success w-100">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
