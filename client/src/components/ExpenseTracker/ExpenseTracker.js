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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

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
    <div className='expense-container'>
      <h1>My Balance:</h1>
      <h1 className={total >= 0 ? 'positive-color' : 'negative-color'}>
        {total}
      </h1>
      {/* <div className='expense-amounts'>
        <h3>
          Paid Lessons:{' '}
          <span className='positive-color'>{positiveAmounts}</span>
        </h3>
        <h3>
          Spent Lessons:{' '}
          <span className='negative-color'>{negativeAmounts}</span>
        </h3>
      </div> */}
      <button
        className='btn'
        onClick={(e) =>
          dispatch(toggleModal('open', <CreateUpdateTransaction />))
        }
      >
        Add Transaction
      </button>
      <h1>Lesson History</h1>
      <div className='scroll-style-3 expense-history'>
        <ul>
          {transactions.map((transaction) => (
            <li
              className={`expense-history-li ${
                transaction.positive
                  ? ' expense-positive '
                  : ' expense-negative '
              }`}
              key={transaction._id}
            >
              <span>
                {transaction.positive === false
                  ? `-${transaction.amount}`
                  : transaction.amount}
              </span>
              <span> {transaction.transaction}</span>
              <span>{formatDate(transaction.date)}</span>

              <button
                title='Update'
                className='mini-btn'
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
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                title='Delete'
                className='mini-btn mini-delete'
                onClick={() => confirmedDeletion(transaction._id)}
              >
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;
