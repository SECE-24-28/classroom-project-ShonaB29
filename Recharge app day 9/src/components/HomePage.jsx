import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>,
      title: 'Instant Recharge',
      desc: 'Quick & secure mobile recharge in seconds'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V16h-2.67v2.09c-2.84-.48-5.09-2.8-5.09-5.59s2.25-5.11 5.09-5.59V9h2.67v-1.91c2.84.48 5.09 2.8 5.09 5.59s-2.25 5.11-5.09 5.41z"/></svg>,
      title: 'Best Offers',
      desc: 'Exclusive deals and cashback rewards'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>,
      title: 'Secure Payment',
      desc: 'Bank-grade security for all transactions'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v16H7V4z"/></svg>,
      title: 'All Operators',
      desc: 'Support for Airtel, Jio, Vi & more'
    }
  ];

  return (
    <div>
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
            </svg>
          </div>
          <h1 className="hero-title">SmartPay</h1>
          <p className="hero-subtitle">
            Recharge your mobile instantly with the best offers and secure payments
          </p>
          
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <button
              onClick={() => navigate('/login')}
              className="btn btn-primary"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/login')}
              className="btn btn-outline"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div style={{ textAlign: 'center', margin: '3rem 0' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Why Choose SmartPay?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            Experience the fastest and most secure way to recharge your mobile with exclusive offers and instant processing.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.81 14.12L5.64 3.13c.24-.93 1.32-1.19 1.92-.47L12 7.98l4.44-5.32c.6-.72 1.68-.46 1.92.47l2.83 10.99c.24.93-.48 1.76-1.41 1.76H4.22c-.93 0-1.65-.83-1.41-1.76z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Lightning Fast</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Complete your mobile recharge in under 30 seconds with our optimized payment gateway and instant processing system.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                background: 'var(--gradient-success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-2-8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Smart Recommendations</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Get personalized plan suggestions based on your usage patterns and enjoy the best value for money deals.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5 0h-2v6h2v-6zm3-5H1v2h21V6zM20 19v2H4v-2h16z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Trusted by Millions</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Join over 10 million satisfied customers who trust SmartPay for their daily mobile recharge needs.
            </p>
          </div>
        </div>

        <div className="glass-card" style={{ textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
            Ready to get started?
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Create your account and enjoy instant mobile recharges with exclusive offers.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="btn btn-primary"
            style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}
          >
            Start Recharging Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;