import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MdDeleteOutline } from "react-icons/md";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from 'react-toastify';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsData);
      } catch (error) {
        toast.error("Failed to fetch products. Please try again.");
      } finally {
        setLoading(false); // loading to false 
      }
    };

    fetchProducts();
  }, []);

  // Handle product deletion
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setProducts(products.filter(product => product.id !== id));
      toast.success("Product successfully deleted!");
    } catch (error) {
      toast.error("Failed to delete product. Please try again.");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className='text-center fw-bold m-5 p-5 bg-light'>All Products</h1>
            
            {loading ? (
              <div className='text-center'>
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr className='text-center'>
                      <th scope="col">#</th>
                      <th scope="col">Image</th>
                      <th scope="col">Title</th>
                      <th scope="col">Price</th>
                      <th scope="col">Category</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={product.id} className='text-center'>
                        <th scope="row">{index + 1}</th>
                        <td><img src={product.imageUrl} alt={product.title} width="50" /></td>
                        <td>{product.title}</td>
                        <td>${product.price}</td>
                        <td>{product.category}</td>
                        <td>
                          <span className='fs-4' onClick={() => handleDelete(product.id)} style={{cursor: 'pointer'}}>
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
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
