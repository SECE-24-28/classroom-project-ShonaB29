import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './Layout';
import { plans } from '../data/mockPlans';
import PlanCard from './PlanCard';

const PlanSelectionDesktop = () => {
  const navigate = useNavigate();
  const { selectedOperator, phoneNumber, setSelectedPlan } = useAppContext();
  const [activeTab, setActiveTab] = useState(0);

  const operatorPlans = plans.find(p => p.operator === selectedOperator);
  
  if (!operatorPlans) {
    return (
      <div className="container">
        <div className="card">
          <p>No plans available for the selected operator.</p>
        </div>
      </div>
    );
  }

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    navigate('/payment');
  };

  return (
    <div className="container">
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>Select Your Plan</h1>
        <div style={{ 
          background: 'var(--gradient-primary)', 
          color: 'white', 
          padding: '1.5rem', 
          borderRadius: '1rem',
          display: 'inline-block'
        }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
            Recharge for {phoneNumber}
          </p>
          <p style={{ fontWeight: '700', fontSize: '1.5rem' }}>
            {selectedOperator} - {operatorPlans.circle}
          </p>
        </div>
      </div>

      <div className="tabs" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
        {operatorPlans.categories.map((category, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
            style={{ fontSize: '1.125rem', padding: '1.25rem' }}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {operatorPlans.categories[activeTab].plans.map((plan) => (
          <div key={plan.id} style={{ transform: 'scale(1)', transition: 'transform 0.3s ease' }}>
            <PlanCard
              plan={plan}
              onSelect={() => handlePlanSelect(plan)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanSelectionDesktop;