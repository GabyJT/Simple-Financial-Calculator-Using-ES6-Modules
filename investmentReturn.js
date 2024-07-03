export function calculateInvestmentReturn(principal, rate, time, frequency) {
    return principal * Math.pow((1 + rate / frequency), frequency * time);
}