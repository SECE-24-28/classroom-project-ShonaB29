import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import DashboardDesktop from './DashboardDesktop';
import PlanSelectionScreen from './PlanSelectionScreen';
import PlanSelectionDesktop from './PlanSelectionDesktop';
import PaymentSummary from './PaymentSummary';
import SuccessScreen from './SuccessScreen';
import FailureScreen from './FailureScreen';
import HistoryList from './HistoryList';
import { transactions as initialTransactions } from '../data/mockHistory';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

const Header = () => {
  const { darkMode, toggleDarkMode } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/': return 'SmartPay';
      case '/login': return 'Welcome';
      case '/dashboard': return 'Dashboard';
      case '/plans': return 'Select Plan';
      case '/payment': return 'Payment';
      case '/success': return 'Success';
      case '/failure': return 'Failed';
      case '/history': return 'History';
      default: return 'SmartPay';
    }
  };

  const showBackButton = location.pathname !== '/' && location.pathname !== '/login';

  return (
    <header style={{
      padding: '1rem',
      borderBottom: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'var(--surface-color)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {showBackButton && (
          <button
            onClick={() => navigate(-1)}
            className="btn btn-secondary"
            style={{ padding: '0.5rem', minWidth: 'auto' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
          </button>
        )}
        <h1 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{getTitle()}</h1>
      </div>
      <button
        onClick={toggleDarkMode}
        className="btn btn-secondary"
        style={{ padding: '0.5rem', minWidth: 'auto' }}
      >
        {darkMode ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"/>
          </svg>
        )}
      </button>
    </header>
  );
};

const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [transactions, setTransactions] = useState(initialTransactions);
  const [paymentAttempts, setPaymentAttempts] = useState(0);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
  };

  const addTransaction = (transaction) => {
    setTransactions(prev => [transaction, ...prev]);
  };

  const value = {
    darkMode,
    toggleDarkMode,
    isAuthenticated,
    setIsAuthenticated,
    selectedOperator,
    setSelectedOperator,
    selectedPlan,
    setSelectedPlan,
    phoneNumber,
    setPhoneNumber,
    transactions,
    addTransaction,
    paymentAttempts,
    setPaymentAttempts
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

const Layout = () => {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardDesktop />} />
              <Route path="/plans" element={<PlanSelectionDesktop />} />
              <Route path="/payment" element={<PaymentSummary />} />
              <Route path="/success" element={<SuccessScreen />} />
              <Route path="/failure" element={<FailureScreen />} />
              <Route path="/history" element={<HistoryList />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
};

export default Layout;