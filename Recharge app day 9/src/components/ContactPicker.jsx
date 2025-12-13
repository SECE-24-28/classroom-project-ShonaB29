import React from 'react';
import { mockContacts } from '../data/mockHistory';

const ContactPicker = ({ onSelect, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>Select Contact</h3>
          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ padding: '0.5rem', minWidth: 'auto' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
        
        <div style={{ display: 'grid', gap: '0.5rem', maxHeight: '60vh', overflowY: 'auto' }}>
          {mockContacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => onSelect(contact)}
              style={{
                padding: '1rem',
                border: '1px solid var(--border-color)',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: 'var(--bg-color)'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--primary-color)';
                e.target.style.backgroundColor = 'rgba(99, 102, 241, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--border-color)';
                e.target.style.backgroundColor = 'var(--bg-color)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '600'
                }}>
                  {contact.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                    {contact.name}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
                    {contact.number}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPicker;