import React from 'react';
import { useAppContext } from './Layout';

const HistoryList = () => {
  const { transactions } = useAppContext();

  const getStatusBadge = (status) => {
    const statusClass = `status-badge status-${status.toLowerCase()}`;
    return <span className={statusClass}>{status}</span>;
  };

  const getServiceIcon = (service) => {
    switch (service) {
      case 'Mobile': return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v16H7V4z"/>
        </svg>
      );
      case 'DTH': return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14H3v-3H1v3c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 9h2v6H1V9z"/>
        </svg>
      );
      default: return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      );
    }
  };

  if (transactions.length === 0) {
    return (
      <div className="container">
        <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--text-secondary)">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h4v2zm0-3H9V6h4v2z"/>
            </svg>
          </div>
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>No Transactions</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Your transaction history will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div style={{ display: 'grid', gap: '1rem' }}>
        {transactions.map((transaction) => (
          <div key={transaction.id} className="card">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
                {getServiceIcon(transaction.service)}
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {transaction.service} Recharge
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                      {transaction.number || transaction.account} • {transaction.operator}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.25rem' }}>
                      ₹{transaction.amount}
                    </div>
                    {getStatusBadge(transaction.status)}
                  </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
                    {transaction.id}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {transaction.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryList;