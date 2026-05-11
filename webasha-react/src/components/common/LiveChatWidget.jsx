import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LiveChatWidget.css';

const LiveChatWidget = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    location: '',
    question: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle scroll to show/hide the arrow button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      // Clear status when opening
      setStatus({ type: '', message: '' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // POST to Django API
      const response = await axios.post('/api/submit-live-chat/', formData);
      setStatus({ type: 'success', message: 'Thank you! We have received your inquiry and will contact you shortly.' });
      setFormData({ name: '', subject: '', email: '', phone: '', location: '', question: '' });
      
      // Auto close after 3 seconds on success
      setTimeout(() => {
        setIsChatOpen(false);
      }, 3000);
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.error || 'Something went wrong. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="live-chat-container">
      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top-btn ${showScrollBtn ? 'visible' : ''}`}
        onClick={scrollToTop}
        title="Scroll to Top"
        aria-label="Scroll to Top"
      >
        <i className="fa-solid fa-chevron-up"></i>
      </button>

      {/* Chat Popup Form */}
      <div className={`live-chat-popup ${isChatOpen ? 'open' : ''}`}>
        <div className="chat-popup-header">
          <h5><i className="fa-solid fa-headset me-2"></i> Email Us</h5>
          <button className="chat-close-btn" onClick={toggleChat}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        
        <div className="chat-popup-body">
          <form onSubmit={handleSubmit}>
            <div className="chat-form-group">
              <label>Name*</label>
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name} 
                onChange={handleInputChange} 
              />
            </div>
            
            <div className="chat-form-group">
              <label>Subject*</label>
              <input 
                type="text" 
                name="subject" 
                required 
                value={formData.subject} 
                onChange={handleInputChange} 
              />
            </div>
            
            <div className="chat-form-group">
              <label>Email*</label>
              <input 
                type="email" 
                name="email" 
                required 
                value={formData.email} 
                onChange={handleInputChange} 
              />
            </div>
            
            <div className="chat-form-group">
              <label>Phone Number*</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                value={formData.phone} 
                onChange={handleInputChange} 
              />
            </div>
            
            <div className="chat-form-group">
              <label>Location*</label>
              <input 
                type="text" 
                name="location" 
                required 
                value={formData.location} 
                onChange={handleInputChange} 
              />
            </div>
            
            <div className="chat-form-group">
              <label>Enter your Question*</label>
              <textarea 
                name="question" 
                required 
                value={formData.question} 
                onChange={handleInputChange}
              ></textarea>
            </div>
            
            <button type="submit" className="chat-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
            </button>
            
            {status.message && (
              <div className={`chat-status-msg ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Live Chat Button */}
      <button 
        className="live-chat-btn"
        onClick={toggleChat}
        title="Live Chat"
        aria-label="Open Live Chat"
      >
        <i className="fa-regular fa-comment-dots"></i>
      </button>
    </div>
  );
};

export default LiveChatWidget;
