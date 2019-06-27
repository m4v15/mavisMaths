const operatorMap = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  power: (x, y) => y ** x
};

mavisMaths = (x, y, operand) => {
  if (arguments.length - 2 !== 3) {
    return "3 arguments required";
  }

  if (typeof operand !== "string") {
    return "Uh oh this is a bug";
  }

  if (operatorMap[operand]) {
    return operatorMap[operand](x, y);
  }

  return;
};

module.exports = mavisMaths;
