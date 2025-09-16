// Write your solution in this file!
// index.js

// 1) Global variable (use var as requested)
var customerName = 'bob';

// 2) Uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3) Create a global variable from inside a function (intentionally bad practice)
function setBestCustomer() {
  // NOTE: no var/let/const here — this creates a global variable in non-strict mode
  bestCustomer = 'not bob';
}

// 4) Overwrite the global bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5) Constant in global scope
const leastFavoriteCustomer = 'amy';

// 6) Attempt to change the const 
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'sally';
}

