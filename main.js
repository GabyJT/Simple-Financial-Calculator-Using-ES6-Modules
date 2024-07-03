// U54107257
import { calculateInterest } from './modules/interestRate.js';
import { calculateLoanPayment } from './modules/loanPayment.js';
import { calculateInvestmentReturn } from './modules/investmentReturn.js';

document.addEventListener('DOMContentLoaded', () => {
    // Interest Rate Calculation
    document.getElementById('calculate-interest').addEventListener('click', () => {
        const principal = parseFloat(document.getElementById('principal').value);
        const rate = parseFloat(document.getElementById('rate').value);
        const time = parseFloat(document.getElementById('time').value);

        if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
            alert('Please enter valid numbers for interest calculation.');
            return;
        }

        const interest = calculateInterest(principal, rate, time);
        document.getElementById('interest-result').textContent = `Interest: $${interest.toFixed(2)}`;
    });

    // Loan Payment Calculation
    document.getElementById('calculate-loan').addEventListener('click', () => {
        const principal = parseFloat(document.getElementById('loan-principal').value);
        const rate = parseFloat(document.getElementById('loan-rate').value);
        const time = parseFloat(document.getElementById('loan-time').value);

        if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
            alert('Please enter valid numbers for loan calculation.');
            return;
        }

        const payment = calculateLoanPayment(principal, rate, time);
        document.getElementById('loan-result').textContent = `Monthly Payment: $${payment.toFixed(2)}`;
    });

    // Investment Return Calculation
    document.getElementById('calculate-investment').addEventListener('click', () => {
        const principal = parseFloat(document.getElementById('invest-principal').value);
        const rate = parseFloat(document.getElementById('invest-rate').value);
        const time = parseFloat(document.getElementById('invest-time').value);
        const frequency = parseFloat(document.getElementById('invest-frequency').value);

        if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(frequency)) {
            alert('Please enter valid numbers for investment calculation.');
            return;
        }

        const amount = calculateInvestmentReturn(principal, rate, time, frequency);
        document.getElementById('investment-result').textContent = `Future Value: $${amount.toFixed(2)}`;
    });
});
