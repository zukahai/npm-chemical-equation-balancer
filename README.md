# Chemical Equation Balancer

<p align="center"> <img src="./assets/bce-bg.png" alt="bg" /> </p>

CEB-HaiZuka is an innovative JavaScript library tailored for balancing chemical equations using linear algebraic techniques. Ideal for both students and professionals in chemistry, CEB-HaiZuka offers a robust solution for balancing complex chemical reactions accurately and efficiently.

The core functionality of CEB-HaiZuka revolves around representing chemical equations as systems of linear equations and solving them using matrix operations. By converting chemical equations into matrix form, CEB-HaiZuka utilizes linear algebra algorithms to determine the stoichiometric coefficients that balance the equation while obeying the law of conservation of mass.

Key Features:

- **Matrix-Based Balancing**: Convert chemical equations into matrices and solve for the stoichiometric coefficients using matrix operations.
- **Automated Solution**: CEB-HaiZuka automatically balances chemical equations, handling equations with multiple reactants, products, and complex stoichiometry.
- **Comprehensive Support**: Manage equations involving various reaction types, including synthesis, decomposition, combustion, and more.
- **Integration-Friendly**: Simple API for seamless integration into educational tools, simulation software, or chemical processing applications.


## ❯ Install

```bash
npm install chemical-equation-balancer-haizuka
```

## ❯ Usage

```javascript
const { chemicalEquationBalancer } = require('chemical-equation-balancer-haizuka');

const cbe = chemicalEquationBalancer("H2 + O2 = H2O");
const textResult = cbe.text;

console.log(textResult); // 2H2 + O2 = 2H2O

```

**chemicalEquationBalancer(String text)**:
- `text`: A string containing the chemical equation to be balanced.
- Elements are written with the first letter capitalized, for example: H, O, C, N, Cl, Ca, Fe, ...
- Within a compound, elements are written together without spaces, e.g., H2O, CO2, CaCl2, ...
- Compounds are separated by the `+` sign, for example: H2 + O2, CaCO3 + HCl, ...
- Reactants and products are separated by the `=` sign, '->', or '→'.

**Return Value**:

A JSON string containing the following parameters:

- `message`: Represents the result message of the chemical equation.
- `result`: Represents the parameters during the balancing process.
- `text`: Represents the balanced chemical equation.
## Examples

```javascript
const { chemicalEquationBalancer } = require('chemical-equation-balancer-haizuka');

const cbe = chemicalEquationBalancer("H2 + O2 = H2O");
const textResult = cbe.text;

console.log(textResult); // 2H2 + O2 = 2H2O

```