import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  createTransaciton,
  updateTransaciton,
} from '../../actions/expenseTracker';

const CreateUpdateTransaction = ({ updateTransaction }) => {
  const dispath = useDispatch();

  const [transaction, setTransaction] = useState(
    updateTransaction.transaction || ''
  );
  const [amount, setAmount] = useState(updateTransaction.amount || '');
  const [date, setDate] = useState(
    (updateTransaction.date && updateTransaction.date.substr(0, 10)) || ''
  );

  const transactionTypes = [
    { key: 0, value: '' },
    { key: 1, value: 'Conducted' },
    { key: 2, value: 'Missed' },
    { key: 3, value: 'Payment' },
  ];

  const createNewTransaction = () => {
    let positive;
    if (transaction === 'Conducted' || transaction === 'Missed') {
      positive = false;
    } else {
      positive = true;
    }
    const transactionObject = {
      transaction,
      amount,
      positive,
      date,
    };
    dispath(createTransaciton(transactionObject));
  };

  const updateTransactionById = () => {
    let positive;
    if (transaction === 'Conducted' || transaction === 'Missed') {
      positive = false;
    } else {
      positive = true;
    }
    const transactionObject = {
      transaction,
      amount,
      positive,
      date,
    };
    const id = updateTransaction._id;
    dispath(updateTransaciton(transactionObject, id));
  };

  return (
    <div className='create-transaction'>
      {updateTransaction ? (
        <h3>Update Transaction</h3>
      ) : (
        <h3>Add New Transaction</h3>
      )}
      <span>Transaction</span>
      <select
        value={transaction}
        onChange={(e) => setTransaction(e.target.value)}
      >
        {transactionTypes.map((type) => (
          <option key={type.key} value={type.value}>
            {type.value}
          </option>
        ))}
      </select>
      <span>Amount</span>
      <input
        type='number'
        placeholder='Amount'
        name='amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <span>Date</span>
      <input
        type='date'
        name='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      {updateTransaction ? (
        <button onClick={(e) => updateTransactionById()}>
          Update Transaction
        </button>
      ) : (
        <button onClick={(e) => createNewTransaction()}>Add Transaction</button>
      )}
    </div>
  );
};

CreateUpdateTransaction.defaultProps = {
  updateTransaction: '',
};

export default CreateUpdateTransaction;
