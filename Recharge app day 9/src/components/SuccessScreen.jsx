import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './Layout';

const SuccessScreen = () => {
  const navigate = useNavigate();
  const { selectedPlan, phoneNumber, selectedOperator, transactions } = useAppContext();
  
  const latestTransaction = transactions[0];

  return (
    <div className="container">
      <div className="card" style={{ textAlign: 'center' }}>
        <div className="success-checkmark">
          <span style={{ color: 'white', fontSize: '2rem' }}>✓</span>
        </div>
        
        <h2 style={{ color: 'var(--success-color)', marginBottom: '0.5rem', fontSize: '1.5rem', fontWeight: '700' }}>
          Recharge Successful!
        </h2>
        
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Your mobile recharge has been completed successfully
        </p>

        <div style={{ 
          backgroundColor: 'var(--bg-color)', 
          padding: '1.5rem', 
          borderRadius: '0.75rem',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Transaction ID:</span>
            <span style={{ fontWeight: '600', fontFamily: 'monospace' }}>{latestTransaction?.id}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Mobile Number:</span>
            <span style={{ fontWeight: '600' }}>{phoneNumber}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Operator:</span>
            <span style={{ fontWeight: '600' }}>{selectedOperator}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Amount:</span>
            <span style={{ fontWeight: '700', color: 'var(--success-color)', fontSize: '1.125rem' }}>
              ₹{selectedPlan?.amount}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Date:</span>
            <span style={{ fontWeight: '600' }}>{latestTransaction?.date}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={() => navigate('/dashboard')}
            className="btn btn-primary"
            style={{ flex: 1 }}
          >
            Recharge Again
          </button>
          <button
            onClick={() => navigate('/history')}
            className="btn btn-secondary"
            style={{ flex: 1 }}
          >
            View History
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;