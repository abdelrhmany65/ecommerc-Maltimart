import React, { useState } from 'react';
import { Container, Row, Form, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { db, storge } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('sofa');
  const [productImage, setProductImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // التأكد من أن جميع الحقول مملوءة
    if (!title || !shortDescription || !description || !price || !category || !productImage) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      // رفع الصورة إلى Firebase Storage
      const storageRef = ref(storge, `productImages/${Date.now()}_${productImage.name}`);
      const uploadTask = uploadBytesResumable(storageRef, productImage);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          
        },
        (error) => {
          toast.error("Image upload failed. Please try again.");
          setLoading(false);
        },
        async () => {
          // الحصول على رابط الصورة بعد التحميل
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // إضافة المنتج الجديد إلى Firestore
          await addDoc(collection(db, "products"), {
            title,
            shortDescription,
            description,
            price,
            category,
            imageUrl: downloadURL,
          });

          toast.success("Product successfully added!");
          navigate('/dashboard/all-product'); 

          // إعادة تعيين الحقول
          setTitle('');
          setShortDescription('');
          setDescription('');
          setPrice('');
          setCategory('sofa');
          setProductImage(null);
          setLoading(false);
        }
      );
    } catch (error) {
      toast.error("Failed to add product. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg={12} className='mb-4 fw-bold'>

            {
              loading ? (
                <div className='text-center'>
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              ) : (
                
                
                <Form onSubmit={handleSubmit} className='d-flex flex-column'>
                  <h1 className='text-center fw-bold m-5 p-5 bg-light'>Add Product</h1>
                  <Form.Group className="mb-3" controlId="Title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Product name" 
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="short">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Short description..." 
                      value={shortDescription}
                      onChange={(e) => setShortDescription(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Description..." 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="Price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                      type="number" 
                      placeholder="$" 
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Form.Group>
      
                  <Form.Group className="mb-3" controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Select 
                      value={category} 
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="sofa">Sofa</option>
                      <option value="mobile">Mobile</option>
                      <option value="chair">Chair</option>
                      <option value="watch">Watch</option>
                      <option value="wireless">Wireless</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control 
                      type="file" 
                      onChange={(e) => setProductImage(e.target.files[0])}
                    />
                  </Form.Group>
                    
                  <Col lg={4} className='mt-2'>
                    <button type="submit" className="btn btn-dark" disabled={loading}>
                      {loading ? "Adding Product..." : "Add Product"}
                    </button>
                  </Col>
                </Form>
              )
            }
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProduct;
