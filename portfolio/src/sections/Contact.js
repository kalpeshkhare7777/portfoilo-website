import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hejtcei', 'template_3veb1ov', form.current, 'a0lzPwQN0JO4QnlHB')
      .then(
        (result) => {
          setMessage('Message sent successfully!');
          form.current.reset(); // Clear the form
        },
        (error) => {
          setMessage('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div className="logincontainer">
      <form className="login" ref={form} onSubmit={sendEmail}>
        <label className="textlabel">Name</label>
        <input className="input" type="text" name="from_name" required />
        <label className="textlabel">Email</label>
        <input className="input" type="email" name="from_email" required />
        <label className="textlabel">Contact Number</label>
        <input className="input" type="text" name="from_contact_number" />
        <label className="textlabel">Subject</label>
        <input className="input" type="text" name="subject" required />
        <label className="textlabel">Message</label>
        <textarea className="input message" name="message" required />
        <input className="btn" type="submit" value="Send" />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Contact;
