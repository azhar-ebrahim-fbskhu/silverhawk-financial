function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);

    if (!isNaN(income) && !isNaN(taxRate)) {
        const tax = (income * taxRate) / 100;
        document.getElementById('taxResult').textContent = `Tax Amount: $${tax.toFixed(2)}`;
    } else {
        document.getElementById('taxResult').textContent = 'Please enter valid numbers.';
    }
}
