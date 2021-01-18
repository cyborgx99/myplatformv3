import React from 'react';

const ExpenseTracker = () => {
  return (
    <div>
      <h1>My Balance:</h1>
      <h1>7 Lessons</h1>
      <div>
        <h3>Paid Lessons</h3>
        <h3>15</h3>
      </div>
      <div>
        <h3>Spent Lessons</h3>
        <h3>7</h3>
      </div>
      <button>Add Transaction</button>
      <div>
        <h1>Lesson History</h1>
        <ul>
          <li>+1 Conducted 09.11.2020 </li>
          <li>+1 Conducted 09.11.2020 </li>
        </ul>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ExpenseTracker;
