import React, { useState } from 'react';
import { FaMobileAlt, FaBolt, FaEnvelope, FaLock, FaUser, FaPhone, FaEye, FaEyeSlash, FaSpinner, FaCheckCircle, FaShieldAlt, FaCreditCard, FaRocket } from 'react-icons/fa';

const App = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="container">
      {isLoginView ? (
        <LoginPage toggleView={() => setIsLoginView(false)} />
      ) : (
        <SignupPage toggleView={() => setIsLoginView(true)} />
      )}
    </div>
  );
};

// Login Component
const LoginPage = ({ toggleView }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess('Login successful! Redirecting...');
      // In real app: await api.post('/login', formData)
    } catch (error) {
      setErrors({ submit: 'Invalid email or password' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      {/* Header */}
      <div className="header">
        <div className="logo">
          <FaMobileAlt className="logo-icon" />
          <FaBolt style={{ color: '#f59e0b', marginLeft: '-12px' }} />
          <span className="logo-text">Smart<span className="logo-text">Pay</span></span>
        </div>
        <p className="tagline">Mobile Recharge & Bill Payments</p>
      </div>

      {/* Form Title */}
      <h2 style={{ textAlign: 'center', color: '#1f2937', marginBottom: '30px', fontSize: '24px' }}>
        Welcome Back
      </h2>

      {/* Success Alert */}
      {success && (
        <div className="alert alert-success">
          <FaCheckCircle /> {success}
        </div>
      )}

      {/* Error Alert */}
      {errors.submit && (
        <div className="alert alert-error">
          <FaShieldAlt /> {errors.submit}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="Enter your email"
              disabled={loading}
            />
          </div>
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Enter your password"
              disabled={loading}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              disabled={loading}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="form-options">
          <div className="remember-me">
            <input
              type="checkbox"
              id="remember"
              className="remember-checkbox"
              disabled={loading}
            />
            <label htmlFor="remember" className="remember-label">
              Remember me
            </label>
          </div>
          <a href="#" className="forgot-link">Forgot password?</a>
        </div>

        <button type="submit" className="btn" disabled={loading}>
          {loading ? (
            <>
              <FaSpinner className="spinner" /> Signing In...
            </>
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      {/* Toggle Link */}
      <div className="toggle-link">
        Don't have an account?
        <a href="#" onClick={toggleView}>Create Account</a>
      </div>

      
    </div>
  );
};

// Signup Component
const SignupPage = ({ toggleView }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter 10-digit phone number';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Minimum 6 characters required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess('Account created successfully!');
      // In real app: await api.post('/signup', formData)
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: ''
        });
        toggleView();
      }, 2000);
    } catch (error) {
      setErrors({ submit: 'Signup failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      {/* Header */}
      <div className="header">
        <div className="logo">
          <FaMobileAlt className="logo-icon" />
          <FaBolt style={{ color: '#f59e0b', marginLeft: '-12px' }} />
          <span className="logo-text">Smart<span className="logo-highlight">Pay</span></span>
        </div>
        <p className="tagline">Join SmartPay Today</p>
      </div>

      {/* Form Title */}
      <h2 style={{ textAlign: 'center', color: '#1f2937', marginBottom: '30px', fontSize: '24px' }}>
        Create Account
      </h2>

      {/* Success Alert */}
      {success && (
        <div className="alert alert-success">
          <FaCheckCircle /> {success}
        </div>
      )}

      {/* Error Alert */}
      {errors.submit && (
        <div className="alert alert-error">
          <FaShieldAlt /> {errors.submit}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Enter your full name"
              disabled={loading}
            />
          </div>
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="Enter your email"
              disabled={loading}
            />
          </div>
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <div className="input-group">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`form-input ${errors.phone ? 'error' : ''}`}
              placeholder="Enter 10-digit number"
              disabled={loading}
            />
          </div>
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Create password"
              disabled={loading}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              disabled={loading}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Confirm Password</label>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
              placeholder="Confirm password"
              disabled={loading}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              disabled={loading}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label className="remember-me">
            <input
              type="checkbox"
              className="remember-checkbox"
              required
              disabled={loading}
            />
            <span className="remember-label">
              I agree to the <a href="#" style={{ color: '#4f46e5' }}>Terms & Conditions</a> and <a href="#" style={{ color: '#4f46e5' }}>Privacy Policy</a>
            </span>
          </label>
        </div>

        <button type="submit" className="btn" disabled={loading}>
          {loading ? (
            <>
              <FaSpinner className="spinner" /> Creating Account...
            </>
          ) : (
            'Create Account'
          )}
        </button>
      </form>

      {/* Toggle Link */}
      <div className="toggle-link">
        Already have an account?
        <a href="#" onClick={toggleView}>Sign In</a>
      </div>

      
    </div>
  );
};

export default App;