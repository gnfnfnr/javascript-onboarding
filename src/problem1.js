function problem1(pobi, crong) {
  const checkPages = (arr) => {
    return arr[1] - arr[0] !== 1 || arr[0] < 1 || arr[1] > 400 ? true : false;
  };
  const calcNum = (num) => {
    const add = (num + "")
      .split("")
      .reduce((acc, curr) => acc + parseInt(curr), 0);
    const mutli = (num + "")
      .split("")
      .reduce((acc, curr) => acc * parseInt(curr));
    return add >= mutli ? add : mutli;
  };

  if (checkPages(pobi) || checkPages(crong)) {
    return -1;
  } else {
    const pobiBest =
      calcNum(pobi[0]) >= calcNum(pobi[1])
        ? calcNum(pobi[0])
        : calcNum(pobi[1]);
    const crongBest =
      calcNum(crong[0]) >= calcNum(crong[1])
        ? calcNum(crong[0])
        : calcNum(crong[1]);
    return pobiBest >= crongBest ? (pobiBest === crongBest ? 0 : 1) : 2;
  }
}

module.exports = problem1;
