
// Initialize transactions array
let transactions = [];

// Function to add a transaction
function addTransaction(description, name, amount) {
    // Validate inputs
    if (description.trim() === '' || name.trim() === '' || isNaN(amount)) {
        alert('Please enter valid description, name, and amount.');
        return;
    }

    // Create new transaction object
    const transaction = {
        description: description,
        name: name,
        amount: parseFloat(amount)
    };

    // Add transaction to transactions array
    transactions.push(transaction);

    // Update UI
    updateUI();
}

// Function to update the UI with transactions and balance
function updateUI() {
    // Clear existing transactions
    document.getElementById('transaction-list').innerHTML = '';

    // Update transaction list
    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.description}</td>
            <td>${transaction.name}</td>
            <td>${transaction.amount.toFixed(2)}</td>
        `;
        document.getElementById('transaction-list').appendChild(row);
    });

    // Update balance
    const balance = transactions.reduce((total, transaction) => total + transaction.amount, 0);
    document.getElementById('balance').textContent = `$${balance.toFixed(2)}`;
}

// Event listener for add transaction form submission
document.getElementById('transaction-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('description').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;
    addTransaction(description, name, amount);
    // Clear form inputs
    document.getElementById('description').value = '';
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
});

// Initial UI update
updateUI();
