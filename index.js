function sum(fromN, toN) {
  console.log(fromN, toN)
  if (fromN === toN) {
    return fromN;
  }

  return fromN + sum(fromN+1, toN)
}

module.exports = sum;