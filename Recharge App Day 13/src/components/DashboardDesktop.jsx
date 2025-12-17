import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './Layout';
import { getOperatorByNumber } from '../data/mockPlans';
import ContactPicker from './ContactPicker';

const DashboardDesktop = () => {
  const navigate = useNavigate();
  const { phoneNumber, setPhoneNumber, setSelectedOperator, transactions } = useAppContext();
  const [inputNumber, setInputNumber] = useState(phoneNumber || '');
  const [detectedOperator, setDetectedOperator] = useState(null);
  const [showContactPicker, setShowContactPicker] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(false);

  useEffect(() => {
    if (inputNumber.length === 10) {
      const operator = getOperatorByNumber(inputNumber);
      setDetectedOperator(operator);
      setIsValidNumber(true);
    } else {
      setDetectedOperator(null);
      setIsValidNumber(false);
    }
  }, [inputNumber]);

  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setInputNumber(value);
  };

  const handleRecharge = () => {
    if (isValidNumber) {
      setPhoneNumber(inputNumber);
      setSelectedOperator(detectedOperator);
      navigate('/plans');
    }
  };

  const handleContactSelect = (contact) => {
    setInputNumber(contact.number);
    setShowContactPicker(false);
  };

  const lastRecharge = transactions.find(t => t.number === inputNumber && t.status === 'Success');
  const recentTransactions = transactions.slice(0, 3);

  return (
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }}>
        {/* Main Recharge Section */}
        <div>
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: '700', textAlign: 'center' }}>
              Mobile Recharge
            </h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '600', fontSize: '1.125rem' }}>
                Mobile Number
              </label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <input
                  type="tel"
                  className="input"
                  placeholder="Enter 10-digit mobile number"
                  value={inputNumber}
                  onChange={handleNumberChange}
                  style={{ flex: 1, fontSize: '1.125rem', padding: '1.25rem' }}
                />
                <button
                  onClick={() => setShowContactPicker(true)}
                  className="btn btn-secondary"
                  style={{ padding: '1.25rem', minWidth: 'auto' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </button>
              </div>
              {inputNumber.length > 0 && inputNumber.length < 10 && (
                <p style={{ color: 'var(--error-color)', fontSize: '1rem', marginTop: '0.75rem' }}>
                  Please enter a valid 10-digit mobile number
                </p>
              )}
            </div>

            {detectedOperator && (
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: 'var(--bg-color)', 
                borderRadius: '1rem',
                marginBottom: '2rem',
                border: '2px solid var(--primary-color)',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Detected Operator</p>
                <p style={{ fontWeight: '700', color: 'var(--primary-color)', fontSize: '1.5rem' }}>{detectedOperator}</p>
              </div>
            )}

            <button
              onClick={handleRecharge}
              disabled={!isValidNumber}
              className="btn btn-primary"
              style={{ 
                width: '100%', 
                fontSize: '1.25rem',
                padding: '1.5rem',
                opacity: isValidNumber ? 1 : 0.5,
                cursor: isValidNumber ? 'pointer' : 'not-allowed'
              }}
            >
              Recharge Now
            </button>
          </div>

          {/* Quick Actions */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <button
              onClick={() => navigate('/history')}
              className="btn btn-secondary"
              style={{ padding: '1.5rem', fontSize: '1.125rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
              </svg>
              View History
            </button>
            <button 
              className="btn btn-secondary"
              style={{ padding: '1.5rem', fontSize: '1.125rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                <path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14H3v-3H1v3c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 9h2v6H1V9z"/>
              </svg>
              DTH Recharge
            </button>
            <button 
              className="btn btn-secondary"
              style={{ padding: '1.5rem', fontSize: '1.125rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
              Bill Payment
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {lastRecharge && (
            <div className="card" style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Last Recharge</h3>
              <div style={{ 
                padding: '1rem', 
                backgroundColor: 'var(--bg-color)', 
                borderRadius: '0.75rem',
                border: '1px solid var(--border-color)'
              }}>
                <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>₹{lastRecharge.amount}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{lastRecharge.date}</p>
              </div>
            </div>
          )}

          {/* Recent Transactions */}
          <div className="card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Recent Transactions</h3>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  style={{
                    padding: '1rem',
                    backgroundColor: 'var(--bg-color)',
                    borderRadius: '0.75rem',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: '600' }}>₹{transaction.amount}</span>
                    <span className={`status-badge status-${transaction.status.toLowerCase()}`}>
                      {transaction.status}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {transaction.number} • {transaction.date}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/history')}
              className="btn btn-secondary"
              style={{ width: '100%', marginTop: '1rem' }}
            >
              View All
            </button>
          </div>
        </div>
      </div>

      {showContactPicker && (
        <ContactPicker
          onSelect={handleContactSelect}
          onClose={() => setShowContactPicker(false)}
        />
      )}
    </div>
  );
};

export default DashboardDesktop;