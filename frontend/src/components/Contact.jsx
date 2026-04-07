import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to connect to the server.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <span className="section-tag">✦ Connect</span>
            <h2 className="section-title">Let's build something <span>together</span></h2>
            <p className="section-subtitle">
              Have a question or want to work together? Feel free to reach out using the form or through my socials.
            </p>

            <div className="contact__methods">
              <div className="contact__method">
                <div className="contact__method-icon">📧</div>
                <div>
                  <h4 className="contact__method-title">Email</h4>
                  <p className="contact__method-value">palkisharma74@gmail.com</p>
                </div>
              </div>
              <div className="contact__method">
                <div className="contact__method-icon">📍</div>
                <div>
                  <h4 className="contact__method-title">Location</h4>
                  <p className="contact__method-value">Himachal Pradesh, India / Remote</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__form-container">
            <form className="contact__form glass-card" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="John Doe" 
                  required 
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="john@example.com" 
                  required 
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="How can I help you?" 
                  required 
                ></textarea>
              </div>

              {status.message && (
                <div className={`contact__status contact__status--${status.type}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="btn btn-primary contact__submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
