import React, { useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth, storge, db } from "../firebase.config"; // تأكد من تصحيح تهجئة "storage"

import Helmet from '../components/helmet/Helmet';
import './style.css';
import { toast } from 'react-toastify';

const Signup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fil, setFil] = useState(null); 
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async(e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password); 
      const user = userCredential.user;

      const storageRef = ref(storge, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, fil);

      uploadTask.on(
        'state_changed', 
        (snapshot) => {
          //  التحميل
        }, 
        (error) => {
          // التعامل مع الأخطاء هنا
          alert(`Error: ${error.message}`);
          setLoading(false); // إيقاف وضع التحميل في حالة الخطأ
        }, 
        async () => {
          // في حالة نجاح التحميل
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await updateProfile(user, {
            displayName: username,
            photoURL: downloadURL
          });

          // تخزين بيانات المستخدم في Firestore
          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            username: username,
            email: email,
            profilePic: downloadURL
          });

          setLoading(false); 
          toast.success('account created')
          navigate('/login');
        }
      );

    } catch (error) {
      toast.error("something went wrong")
      setLoading(false); 
    } 
  }

  return (
    <Helmet title='Sign up'>
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
                  <h3 className='fw-bold fs-4 text-center mb-4'>Sign up</h3>
                  <Form className='d-flex flex-column' onSubmit={signup}>
                    
                    <Form.Group className="mb-3" controlId="username">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control type="text" placeholder="User Name"
                        value={username}
                        onChange={e => setUsername(e.target.value) }
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Email" 
                        value={email}
                        onChange={e => setEmail(e.target.value) }
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value) }
                      />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Photo</Form.Label>
                      <Form.Control type="file"
                        onChange={e => setFil(e.target.files[0])}
                      />
                    </Form.Group>              
                    
                    <button type="submit" className="btn btn-dark w-100 mb-3" disabled={loading}>
                      {loading ? 'Creating Account...' : 'Create an Account'}
                    </button>

                    <p className='text-center'>
                      Already have an account? <Link to='/login'>Log In</Link>
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

export default Signup;
