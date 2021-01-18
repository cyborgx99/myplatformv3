import React from 'react';
import ExpenseTracker from '../../components/ExpenseTracker/ExpenseTracker';
import Profile from '../Profile/Profile';

const Dashboard = () => {
  return (
    <div>
      <Profile />
      <ExpenseTracker />
    </div>
  );
};

export default Dashboard;
