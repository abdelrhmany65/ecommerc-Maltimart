import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./style.css";


const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>

          <Col lg={4} md={6} xs={12}>
          <div className="footer_quick">
            <h1 className='fs-3 text-white fw-bolder'>Maltimart</h1>
            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error nulla libero sint odio sit fugiat voluptas hic accusantium?</p>
          </div>
          </Col>

          <Col lg={3} md={6} xs={12}>
            <div className="footer_quick">
              <h4 className='fs-3 text-white fw-bolder'>Top categories</h4>
              <ListGroup className='mb-3'>

                <ListGroupItem className=' bg-lis ps-0 border-0'>
                  <Link to="#" className='text-white'>mobile phone</Link>
                </ListGroupItem>

                <ListGroupItem className=' bg-lis ps-0 border-0'>
                  <Link to="#" className='text-white'>modern sofa</Link>
                </ListGroupItem>

                <ListGroupItem className=' bg-lis ps-0 border-0'>
                  <Link to="#" className='text-white'>arm chair</Link>
                </ListGroupItem>

                <ListGroupItem className=' bg-lis ps-0 border-0'>
                  <Link to="#" className='text-white'>new watches</Link>
                </ListGroupItem>

      
              </ListGroup>
            </div>
          </Col>

          <Col lg={2} md={6} xs={12}>
            <div className="footer_quick">
              <h4 className='fs-3 text-white fw-bolder'>links</h4>
              <ListGroup className='mb-3'>

                <ListGroupItem className='bg-lis ps-0 border-0'>
                  <Link to="/shop" className='text-white'>shop</Link>
                </ListGroupItem>

                <ListGroupItem className='bg-lis ps-0 border-0'>
                  <Link to="/cart" className='text-white'>cart</Link>
                </ListGroupItem>

                <ListGroupItem className='bg-lis ps-0 border-0'>
                  <Link to="/login" className='text-white'>login</Link>
                </ListGroupItem>

                <ListGroupItem className='bg-lis ps-0 border-0'>
                  <Link to="#" className='text-white'>police</Link>
                </ListGroupItem>

      
              </ListGroup>
            </div>
          </Col>


          <Col lg={3} md={6} xs={12}>
            <div className="footer_quick">
              <h4 className='fs-3 text-white fw-bolder'>contact</h4>
              <ListGroup className='mb-3'>

                <ListGroupItem className='bg-lis bg-lis ps-0 border-0'> 
                  <span className='p-2 text-white'><FaLocationDot /></span>
                  <span className='text-white'>134 new york</span>
                </ListGroupItem>

                <ListGroupItem className='bg-lis ps-0 border-0'>
                  <span className='p-2 text-white'><FaPhoneAlt /></span>
                  <span className='text-white'>(+20) 1111829580</span>
                </ListGroupItem>

                <ListGroupItem className='bg-lis ps-0 border-0'>
                  <span className='p-2 text-white'><MdEmail /></span>
                  <span className='text-white'>abdelrhmany749@gmail.com</span>
                </ListGroupItem>
      
              </ListGroup>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer