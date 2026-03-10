import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Shield, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero-section container">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            Ignite Your Skills. <br />
            <span className="text-gradient">Build Your Future.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-description"
          >
            SkillSpark helps students learn new technologies and track their skill growth. 
            Join a community of forward-thinkers and master the tools of tomorrow.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-actions"
          >
            <Link to="/register" className="btn btn-primary">
              Get Started <Rocket size={20} />
            </Link>
            <Link to="/login" className="btn btn-secondary">
              Login to Account <Zap size={20} />
            </Link>
          </motion.div>
        </div>
        
        <div className="hero-illustration">
          <div className="blob-bg"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="illustration-container animate-float"
          >
            {/* Tech Illustrations placeholder - using CSS shapes and icons for a modern look */}
            <div className="tech-card c1">
              <Zap color="#ec4899" size={40} />
            </div>
            <div className="tech-card c2">
              <Rocket color="#6366f1" size={40} />
            </div>
            <div className="tech-card c3">
              <Shield color="#10b981" size={40} />
            </div>
          </motion.div>
        </div>
      </header>
    </div>
  );
};

export default Home;
