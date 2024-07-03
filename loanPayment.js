export function calculateLoanPayment(principal, rate, time) {
    const r = rate;
    const n = time;
    return principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
}