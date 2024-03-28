import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://6601a11b87c91a11641b49dc.mockapi.io/products');
      if (response.status === 200) {
        setProducts(response.data);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Failed to fetch products. Please try again later.");
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="card-container">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
