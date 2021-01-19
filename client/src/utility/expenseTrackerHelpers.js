export const calculatePositiveAmounts = (transactions) => {
  return transactions
    .filter((transaction) => transaction.positive === true)
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0);
};

export const calculateNegativeAmounts = (transactions) => {
  return (
    transactions
      .filter((transaction) => transaction.positive === false)
      .map((transaction) => transaction.amount)
      .reduce((acc, item) => (acc += item), 0) * -1
  );
};

export const formatDate = (input) => {
  if (input) {
    var datePart = input.match(/\d+/g),
      year = datePart[0], // get only two digits
      month = datePart[1],
      day = datePart[2];
  }
  return day + '.' + month + '.' + year;
};
