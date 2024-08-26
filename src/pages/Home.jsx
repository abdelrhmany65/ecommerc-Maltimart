import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Helmet from '../components/helmet/Helmet';
import heroimg from "../assets/images/hero-img.png";
import Services from '../services/Services';
import ProductList from '../components/ui/ProductList';
import products from '../assets/data/products';
import counterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/ui/Clock';

import './style.css';

const Home = () => {

  const [trendingProduct, setTrendingProduct] = useState([]);
  const [beastProduct, setBeastProduct] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [wierlessProduct, setWierlessProduct] = useState([]);
  const [popularCategory, setPopularCategory] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  const year = new Date().getFullYear();

  useEffect(() => {
    setLoading(true); // Start loading

    const filtertrendingProduct = products.filter((item) => (item.category === 'chair'));
    const filterbeastProduct = products.filter((item) => (item.category === 'sofa'));
    const filternewArrivals = products.filter((item) => (item.category === 'mobile'));
    const filterwierlessProduct = products.filter((item) => (item.category === 'wireless'));
    const filterpopularCategory = products.filter((item) => (item.category === 'watch'));

    setTrendingProduct(filtertrendingProduct);
    setBeastProduct(filterbeastProduct);
    setNewArrivals(filternewArrivals);
    setWierlessProduct(filterwierlessProduct);
    setPopularCategory(filterpopularCategory);

    setLoading(false); // End loading
  }, []);

  return (
    
    <Helmet title={'Home'}>
      <section className='hero__section'>
        <Container>
          <Row className='d-flex justify-content-center align-items-center'>
            <Col md='6' xs='12'>
              <div className="her__content">
                <span className='fw-medium'>trending product in {year}</span>
                <h2 className='my-3 fw-bolder'>make your interior <br /> minimalistic & modern</h2>
                <p className='mb-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                  dignissimos nesciunt ipsam ipsa delectus atque. <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button type="button" className="btn btn-light"><Link to='/shop'>shop now</Link></button>
              </div>
            </Col>
            <Col md='6' xs='12'>
              <img src={heroimg} alt="heroimg" />
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Services */}
      <Services />

      {/* Trending Products */}
      <section className='trending__products'>
        <Container>
          <Row>
            <h2 className='section__title'>Trending Products</h2>
          </Row>
          {loading ? (
            <div className='text-center'>
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <ProductList data={trendingProduct} />
          )}
        </Container>
      </section>

      {/* Beast Sales */}
      <section className='beast__seals'>
        <Container>
          <Row>
            <h2 className='section__title'>Beast Sales</h2>
          </Row>
          {loading ? (
            <div className='text-center'>
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <ProductList data={beastProduct} />
          )}
        </Container>
      </section>

      {/* Timer Counter */}
      <section className='timer__counter'>
        <Container>
          <Row className='d-flex justify-content-center align-items-center'>
            <Col md={6} xs={12}>
              <div className="content text-white">
                <span className='fs-6 mb-2'>Limited Offer</span>
                <h2 className='fs-4 mb-2'>Quality Armchair</h2>
                <Clock />
                <button type="button" className="btn btn-light m-3"><Link to='/shop'>Shop Now</Link></button>
              </div>
            </Col>
            <Col md='6' xs='12'>
              <img src={counterImg} alt="counterImg" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mobile Section */}
      <section className='new__mobile'>
        <Container>
          <Row>
            <h2 className='section__title'>Our Mobile</h2>
          </Row>
          {loading ? (
            <div className='text-center'>
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <ProductList data={newArrivals} />
          )}
        </Container>
      </section>

      {/* Wireless Section */}
      <section className='new__wierless'>
        <Container>
          <Row>
            <h2 className='section__title'>New Wireless</h2>
          </Row>
          {loading ? (
            <div className='text-center'>
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <ProductList data={wierlessProduct} />
          )}
        </Container>
      </section>

      {/* Popular Category */}
      <section className='new__category'>
        <Container>
          <Row>
            <h2 className='section__title'>Popular Category</h2>
          </Row>
          {loading ? (
            <div className='text-center'>
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <ProductList data={popularCategory} />
          )}
        </Container>
      </section>

    </Helmet>
  )
}

export default Home;
