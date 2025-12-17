import React from 'react';

const PlanCard = ({ plan, onSelect }) => {
  return (
    <div className="plan-card" onClick={onSelect}>
      <div className="plan-amount">₹{plan.amount}</div>
      <div className="plan-validity">{plan.validity}</div>
      <div className="plan-details">{plan.details}</div>
      <button 
        className="btn btn-primary" 
        style={{ width: '100%', marginTop: '1rem' }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
      >
        Select Plan
      </button>
    </div>
  );
};

export default PlanCard;