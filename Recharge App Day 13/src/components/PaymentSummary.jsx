import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './Layout';

const PaymentSummary = () => {
  const navigate = useNavigate();
  const { 
    selectedPlan, 
    phoneNumber, 
    selectedOperator, 
    addTransaction, 
    paymentAttempts, 
    setPaymentAttempts 
  } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('upi');

  const paymentMethods = [
    { id: 'upi', name: 'UPI' },
    { id: 'card', name: 'Credit/Debit Card' },
    { id: 'wallet', name: 'Wallet' },
    { id: 'netbanking', name: 'Net Banking' }
  ];

  if (!selectedPlan) {
    return (
      <div className="container">
        <div className="card">
          <p>No plan selected. Please go back and select a plan.</p>
        </div>
      </div>
    );
  }

  const handlePayment = async () => {
    setIsLoading(true);
    const newAttempts = paymentAttempts + 1;
    setPaymentAttempts(newAttempts);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    const transaction = {
      id: `T${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      service: 'Mobile',
      number: phoneNumber,
      operator: selectedOperator,
      amount: selectedPlan.amount,
      status: newAttempts % 5 === 0 ? 'Failed' : 'Success'
    };

    addTransaction(transaction);
    setIsLoading(false);

    if (transaction.status === 'Success') {
      navigate('/success');
    } else {
      navigate('/failure');
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '700' }}>
          Recharge Summary
        </h3>
        
        <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: 'var(--bg-color)', borderRadius: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span>Mobile Number:</span>
            <span style={{ fontWeight: '600' }}>{phoneNumber}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span>Operator:</span>
            <span style={{ fontWeight: '600' }}>{selectedOperator}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span>Plan:</span>
            <span style={{ fontWeight: '600' }}>₹{selectedPlan.amount}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span>Validity:</span>
            <span style={{ fontWeight: '600' }}>{selectedPlan.validity}</span>
          </div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            {selectedPlan.details}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.125rem', fontWeight: '700' }}>
            <span>Total Amount:</span>
            <span style={{ color: 'var(--primary-color)' }}>₹{selectedPlan.amount}</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '700' }}>
          Payment Method
        </h3>
        
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          {paymentMethods.map((method) => (
            <label
              key={method.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem',
                border: `1px solid ${selectedPaymentMethod === method.id ? 'var(--primary-color)' : 'var(--border-color)'}`,
                borderRadius: '0.5rem',
                cursor: 'pointer',
                backgroundColor: selectedPaymentMethod === method.id ? 'rgba(99, 102, 241, 0.1)' : 'transparent'
              }}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={selectedPaymentMethod === method.id}
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                style={{ margin: 0 }}
              />
              <span style={{ fontSize: '1.25rem' }}>{method.icon}</span>
              <span style={{ fontWeight: '500' }}>{method.name}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handlePayment}
        disabled={isLoading}
        className="btn btn-success"
        style={{ width: '100%', fontSize: '1.125rem', padding: '1rem' }}
      >
        {isLoading ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="spinner"></div>
            Processing...
          </div>
        ) : (
          `Pay ₹${selectedPlan.amount}`
        )}
      </button>
    </div>
  );
};

export default PaymentSummary;