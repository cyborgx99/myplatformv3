import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ExpenseTracker from '../../components/ExpenseTracker/ExpenseTracker';
import Profile from '../Profile/Profile';

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);

  if (!auth.user.isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <div className='dashboard-container'>
      <Profile />
      <ExpenseTracker />
    </div>
  );
};

export default Dashboard;
