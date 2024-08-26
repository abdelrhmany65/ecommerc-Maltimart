import React, { useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config"; 
import Helmet from '../components/helmet/Helmet';
import { toast } from 'react-toastify'; 
import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const naigate = useNavigate();
  
  const login = async(e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast.error('Please fill all fields');
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully');
      naigate('/');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Helmet title='Login'>
      <Container>
        <Row className='justify-content-center align-items-center min-vh-100'>

          {
            loading? (
              <div className='text-center'>
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <Col lg={6} md={8} sm={10} xs={12} className='bg-light p-4 rounded'>
                <h3 className='fw-bold fs-4 text-center mb-4'>Login</h3>
                <Form className='d-flex flex-column' onSubmit={login}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  
                  <button type="submit" className="btn btn-dark w-100 mb-3" disabled={loading}>
                    {loading ? 'Logging In...' : 'Login'}
                  </button>

                  <p className='text-center'>
                    Don't have an account? <Link to='/signup'>Sign up</Link>
                  </p>
                </Form>
              </Col>
            )
          }

        </Row>
      </Container>
    </Helmet>
  );
}

export default Login;
