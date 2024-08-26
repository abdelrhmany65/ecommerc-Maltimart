import { useSelector } from 'react-redux';
import { Container, Row, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Helmet from '../components/helmet/Helmet';
import CommoSection from '../components/ui/CommoSection';
import './style.css';

const Checkout = () => {
  const subtotal = useSelector(state => state.cart.totalAmount);

  return (
    <Helmet title='Checkout'>
      <CommoSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg={6} xs={12} className='mb-4'>
              <Form className='d-flex flex-column'>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="number" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Street Address</Form.Label>
                  <Form.Control type="text" placeholder="Street Address" />
                </Form.Group>
              </Form>
            </Col>

            <Col lg={6} xs={12} className='mb-4'>
              <Form className='d-flex flex-column'>
                <Form.Group className="mb-3" controlId="area">
                  <Form.Label>Area</Form.Label>
                  <Form.Control type="text" placeholder="Area" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="postalCode">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control type="text" placeholder="Postal Code" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control type="text" placeholder="Country" />
                </Form.Group>
              </Form>
            </Col>

            <Col lg={12} className='total__sub'>
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
                      order now
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

export default Checkout;
