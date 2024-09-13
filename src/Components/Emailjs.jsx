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
    <div name='contact' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center  items-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'> Submit the form below or shoot me an email at example@example.com</p>
        </div>
        <label htmlFor='to_email' className='text-gray-300'>Email:</label>
        <input
          id='to_email'
          className='bg-[#ccd6f6] p-2 mb-4'
          type="email"
          value={to_email}
          onChange={(e) => setTo(e.target.value)}
          placeholder='Your Email'
          required
        />
        <label htmlFor='subject' className='text-gray-300'>Subject:</label>
        <input
          id='subject'
          className='bg-[#ccd6f6] p-2 mb-4'
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder='Subject'
          required
        />
        <label htmlFor='message' className='text-gray-300'>Message:</label>
        <textarea
          id='message'
          className='bg-[#ccd6f6] p-2 mb-4'
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Your Message'
          required
        ></textarea>
        <button
          className='text-white border-2 border-pink-600 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'
          type="submit"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Email'}
         
        </button>
      </form>
      {status && <p className='text-gray-300 text-center'>{status}</p>}
    </div>
  );
};

export default EmailForm;
