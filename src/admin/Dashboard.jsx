import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";  // make sure to import your Firebase config

import '../services/style.css';

function Dashboard() {

  const [totalSales, setTotalSales] = useState(0);
  const [orders, setOrders] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total sales 
        const salesSnapshot = await getDocs(collection(db, "sales"));
        const salesData = salesSnapshot.docs.map(doc => doc.data());
        const salesTotal = salesData.reduce((sum, sale) => sum + sale.amount, 0); 
        setTotalSales(salesTotal);

        // Fetch total orders 
        const ordersSnapshot = await getDocs(collection(db, "orders"));
        setOrders(ordersSnapshot.size);

        // Fetch total products 
        const productsSnapshot = await getDocs(collection(db, "products"));
        setTotalProducts(productsSnapshot.size);

        // Fetch total users 
        const usersSnapshot = await getDocs(collection(db, "users"));
        setTotalUsers(usersSnapshot.size);

      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='text-center'>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg={3} md={6} xs={12}>
            <div className="card__FaTruc card">
                <div className="card-body">
                    <div className='fw-bold'>
                        <h3>Total Sales</h3>
                        <p>${totalSales}</p>
                    </div>
                </div>
            </div>
          </Col>

          <Col lg={3} md={6} xs={12}>
            <div className="card__GiRet card">
                  <div className="card-body">
                      <div className='fw-bold'>
                          <h3>Orders</h3>
                          <p>{orders}</p>
                      </div>
                  </div>
              </div>
          </Col>

          <Col lg={3} md={6} xs={12}>
              <div className="card__BsData card">
                  <div className="card-body">
                      <div className='fw-bold'>
                          <h3>Total Products</h3>
                          <p>{totalProducts}</p>
                      </div>
                  </div>
              </div>
          </Col>

          <Col lg={3} md={6} xs={12}>
              <div className="card__Money card">
                  <div className="card-body">
                      <div className='fw-bold'>
                          <h3>Total Users</h3>
                          <p>{totalUsers}</p>
                      </div>
                  </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Dashboard;
