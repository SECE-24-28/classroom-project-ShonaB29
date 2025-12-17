import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './Layout';
import { plans } from '../data/mockPlans';
import PlanCard from './PlanCard';

const PlanSelectionScreen = () => {
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
      <div style={{ marginBottom: '1rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Recharge for {phoneNumber}
        </p>
        <p style={{ fontWeight: '600', color: 'var(--primary-color)' }}>
          {selectedOperator} - {operatorPlans.circle}
        </p>
      </div>

      <div className="tabs">
        {operatorPlans.categories.map((category, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="plan-grid">
        {operatorPlans.categories[activeTab].plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            onSelect={() => handlePlanSelect(plan)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanSelectionScreen;