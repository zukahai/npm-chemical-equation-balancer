const { chemicalEquationBalancer } = require('../index.js');

const equation = 'Fe + O2 -> Fe2O3';
const result = chemicalEquationBalancer(equation);

console.log(result);
