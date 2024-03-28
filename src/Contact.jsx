// import React, { useState } from 'react'

// function Contact() {
//   // // const state = useState(0)
//   // const [number, setNumber] = useState(0)
//   // // const firstItem = state[0]
//   // // const secondItem = state[1]
//   // // console.log(firstItem,secondItem)
//   // const inCount = () => {
//   //   setNumber(number +1)
//   // }
//   // const decCount = () => {
//   //   if(number!=0){
//   //     setNumber(number-1)
//   //   }
//   // }

//   return (
//     // <div>
//     //   <h1>This is Contact Page</h1>
//     //   <div>{number}</div>
//     //   <button onClick={inCount}>+</button>
//     //   <button onClick={decCount}>-</button>
//     //   <div>
//     //   </div>
//     // </div>
//     <>

//     </>
//   )
// }


// export default Contact

import React, { useState } from 'react';
import './Contact.css'; // Import the external CSS file
import { useNavigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

const ContactPage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle the form submission, such as sending an email or saving the message to a database
    console.log('Form submitted:', { name, email, message });
    // Reset form fields and show submission confirmation
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  return (
    <>
    <Navbar />
    <div className="contact-container">
      <h2>Contact Us</h2>
      {submitted ? (
        <p>Thank you for contacting us! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
    </>
  );
};

export default ContactPage;
