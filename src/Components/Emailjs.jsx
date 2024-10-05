import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [to_email, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      await emailjs.send('service_cxluk7n', 'template_vodjktb', {
        to_email: to_email,
        subject,
        message,
      }, 'c0molwQ2DGLjT4MO9');
      setStatus('Email sent successfully!');
    } catch (error) {
      setStatus('Failed to send email. Please try again later.');
      console.error('EmailJS error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div name='contact' className='w-full h-screen '>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center  items-center w-full h-full'>
        <div className='text-center pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
          <h3 className='py-4'>Get in Touch</h3>
         </div>
        
        <label htmlFor='to_email' >Email:</label>
        <input
          id='to_email'
          className='bg-[#ccd6f6] p-2 mb-4 text-black'
          type="email"
          value={to_email}
          onChange={(e) => setTo(e.target.value)}
          placeholder='Your Email'
          required
        />
       
        <label htmlFor='subject' >Subject:</label>
        <input
          id='subject'
          className='bg-[#ccd6f6] p-2 mb-4 text-black'
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder='Subject'
          required
        />
        <label htmlFor='message' >Message:</label>
        <textarea
          id='message'
          className='bg-[#ccd6f6] p-2 mb-4 text-black'
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Your Message'
          required
        ></textarea>
        <button
          className='border-2 border-pink-600 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'
          type="submit"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Email'}
         
        </button>
      </form>
      {status && <p className='text-Black-300 text-center'>{status}</p>}
    </div>
  );
};

export default EmailForm;
