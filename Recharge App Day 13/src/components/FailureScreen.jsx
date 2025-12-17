import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './Layout';

const FailureScreen = () => {
  const navigate = useNavigate();
  const { selectedPlan, phoneNumber, selectedOperator } = useAppContext();

  return (
    <div className="container">
      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
          backgroundColor: 'var(--error-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem',
          animation: 'checkmark-bounce 0.6s ease'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </div>
        
        <h2 style={{ color: 'var(--error-color)', marginBottom: '0.5rem', fontSize: '1.5rem', fontWeight: '700' }}>
          Payment Failed
        </h2>
        
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          We couldn't process your payment. Please try again.
        </p>

        <div style={{ 
          backgroundColor: 'var(--bg-color)', 
          padding: '1.5rem', 
          borderRadius: '0.75rem',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Mobile Number:</span>
            <span style={{ fontWeight: '600' }}>{phoneNumber}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Operator:</span>
            <span style={{ fontWeight: '600' }}>{selectedOperator}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Amount:</span>
            <span style={{ fontWeight: '700', fontSize: '1.125rem' }}>₹{selectedPlan?.amount}</span>
          </div>
        </div>

        <div style={{ 
          backgroundColor: 'rgba(239, 68, 68, 0.1)', 
          border: '1px solid var(--error-color)',
          borderRadius: '0.5rem',
          padding: '1rem',
          marginBottom: '2rem'
        }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--error-color)', margin: 0 }}>
            <strong>Possible reasons:</strong><br />
            • Insufficient balance in payment method<br />
            • Network connectivity issues<br />
            • Payment gateway timeout
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={() => navigate('/payment')}
            className="btn btn-primary"
            style={{ flex: 1 }}
          >
            Try Again
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="btn btn-secondary"
            style={{ flex: 1 }}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailureScreen;