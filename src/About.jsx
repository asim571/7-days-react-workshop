import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css'; // Import the external CSS file
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div className="about-page">
      <h2>About Our Product Management System</h2>
      <p>
        Our Product Management System is designed to help businesses efficiently manage their products,
        streamline operations, and improve productivity.
      </p>
      <h3>Key Features:</h3>
      <ul>
        <li>Manage product inventory and pricing.</li>
        <li>Track sales and revenue.</li>
        <li>Intuitive user interface for easy navigation.</li>
        <li>Secure user authentication and authorization.</li>
        <li>Responsive design for seamless access across devices.</li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li>React.js for building the user interface.</li>
        <li>Redux for state management.</li>
        <li>React Router for handling navigation.</li>
        <li>Material-UI for UI components and styling.</li>
        <li>Node.js and Express.js for the backend server.</li>
        <li>MongoDB for storing product data.</li>
      </ul>
      <p>
        For any inquiries or support, please contact us at support@example.com.
      </p>
    </div>
    <Footer />
    </>
  );
};

export default AboutPage;
