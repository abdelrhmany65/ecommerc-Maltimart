import React, { useState } from 'react'
import Helmet from '../components/helmet/Helmet'
import CommoSection from '../components/ui/CommoSection'
import { Col, Container, Row } from 'react-bootstrap'
import { IoSearch } from "react-icons/io5";

import products from "../assets/data/products";
import ProductList from '../components/ui/ProductList';

import './style.css';

const Shop = () => {

  const [productsData, setProductsData] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  // Filter by category 
  const handleFilter = (e) => {
    const filterValue = e.target.value.toLowerCase();
    let filteredProducts = products;

    if (filterValue === 'sofa') {
      filteredProducts = products.filter(item => item.category === 'sofa');
    } else if (filterValue === 'mobile') {
      filteredProducts = products.filter(item => item.category === 'mobile');
    } else if (filterValue === 'watch') {
      filteredProducts = products.filter(item => item.category === 'watch');
    } else if (filterValue === 'wireless') {
      filteredProducts = products.filter(item => item.category === 'wireless');
    } else if (filterValue === 'chair') {
      filteredProducts = products.filter(item => item.category === 'chair');
    }

    setProductsData(filteredProducts);
  }
  // filter sort 
  const handleSort = (e) => {
    const sortValue = e.target.value.toLowerCase();
    let sortedProducts = [...productsData];

    if (sortValue === 'ascending') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'descending') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProductsData(sortedProducts);
  }
  // Search 
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const searchedProducts = products.filter(item => 
      item.productName.toLowerCase().includes(searchTerm)
    );

    setProductsData(searchedProducts);
  }

  return (
    <Helmet title='shop'>
      <CommoSection title="products"/>

      <section>
        <Container>
          <Row>
          {/* Filter by category  */}
            <Col md={4} xs={6}>
              <div className="input-group mb-3">
                <select className="form-select" onChange={handleFilter}>
                  <option value="sofa">sofa</option>
                  <option value="mobile">mobile</option>
                  <option value="chair">chair</option>
                  <option value="watch">watch</option>
                  <option value="wireless">wireless</option>
                </select>
              </div>
            </Col>
            {/* filter sort  */}
            <Col md={4} xs={6}>
              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelect01" onChange={handleSort}>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            {/* Search   */}
            <Col md={4} xs={12}>
              <div className="input-group rounded">
                <input 
                  type="search" 
                  className="form-control rounded" 
                  placeholder="Search" 
                  aria-label="Search" 
                  aria-describedby="search-addon" 
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <span className="input-group-text border-0" id="search-addon">
                  <button className="btn btn-default" type="submit"><IoSearch /></button> 
                </span>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      {/* no found  */}
      <Container>
        <Row>
          {
            productsData.length === 0 ? (<h1 className='text-center fw-bold m-5 p-5 bg-light'>No products are found!</h1>)
            : (<ProductList data={productsData} />)
          }
        </Row>
      </Container>
    </Helmet>
  )
}

export default Shop;
