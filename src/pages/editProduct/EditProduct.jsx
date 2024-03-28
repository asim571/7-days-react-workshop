import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditProduct.css'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    category: ''
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.put(`https://6601a11b87c91a11641b49dc.mockapi.io/products/:${id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://6601a11b87c91a11641b49dc.mockapi.io/products/${id}`, data);
      if (response.status === 200) {
        navigate('/');
      } else {
        alert('Something went wrong, Try again!');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Something went wrong, Try again!');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="form-container" style={{ marginTop: '20px' }}>
      <h2>Edit Product</h2>
      <form onSubmit={updateProduct}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required value={data.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" rows="4" required value={data.description} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input type="text" id="image" name="image" required value={data.image} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" required value={data.price} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" required value={data.category} onChange={handleChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default EditProduct;
