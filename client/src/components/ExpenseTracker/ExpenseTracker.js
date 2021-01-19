import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTransaction,
  getAllTransactions,
} from '../../actions/expenseTracker';
import { toggleModal } from '../../actions/modal';
import {
  calculateNegativeAmounts,
  calculatePositiveAmounts,
} from '../../utility/expenseTrackerHelpers';
import { formatDate } from '../../utility/expenseTrackerHelpers';
import CreateUpdateTransaction from './CreateUpdateTransaction';
import swal from 'sweetalert2';

const ExpenseTracker = () => {
  const dispatch = useDispatch();
  const expenseTracker = useSelector((state) => state.expenseTracker);
  const { transactions } = expenseTracker;

  const positiveAmounts = calculatePositiveAmounts(transactions);
  const negativeAmounts = calculateNegativeAmounts(transactions);
  const total = positiveAmounts + negativeAmounts;

  useEffect(() => {
    dispatch(getAllTransactions());
    // eslint-disable-next-line
  }, []);

  const confirmedDeletion = async (id) => {
    const result = await swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it.',
    });

    if (result.isConfirmed === true) {
      dispatch(deleteTransaction(id));
    }
  };

  return (
    <div style={{ margin: '0 2rem' }}>
      <h1>My Balance:</h1>
      <h1>{total}</h1>
      <div>
        <h3>Paid Lessons: </h3>
        <h3>{positiveAmounts}</h3>
      </div>
      <div>
        <h3>Spent Lessons: </h3>
        <h3>{negativeAmounts}</h3>
      </div>
      <button
        onClick={(e) =>
          dispatch(toggleModal('open', <CreateUpdateTransaction />))
        }
      >
        Add Transaction
      </button>
      <div>
        <h1>Lesson History</h1>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction._id}>
              {transaction.positive === false
                ? `-${transaction.amount}`
                : transaction.amount}{' '}
              {transaction.transaction} {formatDate(transaction.date)}
              <button
                onClick={(e) =>
                  dispatch(
                    toggleModal(
                      'open',
                      <CreateUpdateTransaction
                        updateTransaction={transaction}
                      />
                    )
                  )
                }
              >
                Edit
              </button>
              <button onClick={() => confirmedDeletion(transaction._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;
