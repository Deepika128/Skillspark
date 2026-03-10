import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    
    if (!formData.email || !formData.password) {
      setErrors({ submit: 'Please fill in all fields' });
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      alert('Login successful! Welcome back, ' + response.data.user.fullName);
      navigate('/');
    } catch (err) {
      setErrors({ submit: err.response?.data?.message || 'Invalid credentials or server error' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-page container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="auth-card glass-panel"
      >
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Login to continue your learning journey</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label><Mail size={16} /> Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="john@example.com" 
              value={formData.email} 
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label><Lock size={16} /> Password</label>
            <div className="password-input">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password" 
                placeholder="Enter your password" 
                value={formData.password} 
                onChange={handleChange}
              />
              <button 
                type="button" 
                className="eye-icon" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

          <button type="submit" className="btn btn-primary auth-btn" disabled={isLoading}>
            {isLoading ? 'Logging in...' : (
              <>Login <LogIn size={20} /></>
            )}
          </button>

          <p className="auth-footer">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
