console.log(movements);

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      //   cur > 0 ? (sum.deposits += cur) : (sum.withdrawals += cur);
      //   return sum;
      sum[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sum;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

const capitalize = str => str[0].toUpperCase() + str.slice(1);

const convertTitleCase = function (string) {
  const exceptions = [
    'the',
    'an',
    'to',
    'and',
    'but',
    'or',
    'on',
    'in',
    'with',
    'a',
  ];

  const titlecase = string
    .toLowerCase()
    .trim()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titlecase);
};

console.log(convertTitleCase('and this is A nice title or this is..?'));
