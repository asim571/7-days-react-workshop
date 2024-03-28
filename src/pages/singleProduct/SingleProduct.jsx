import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://6601a11b87c91a11641b49dc.mockapi.io/products/" + id);
      if (response.status === 200) {
        setProduct(response.data);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      alert("Failed to fetch product. Please try again later.");
    }
  };

  const deleteProduct = async () => {
    try {
      const response = await axios.delete("https://6601a11b87c91a11641b49dc.mockapi.io/products/" + id);
      if (response.status === 200) {
        navigate("/");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again later.");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt="Product" />
        </div>
        <div className="product-details">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <p className="product-category">{product.category}</p>
          <button className="delete-btn" onClick={deleteProduct}>Delete</button>
          <Link to={`/edit/${id}`} className="edit-btn">Edit</Link>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
