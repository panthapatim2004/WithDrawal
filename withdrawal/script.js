let withdrawalCount = 0;

function addWithdrawal() {
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;
    const tableBody = document.getElementById('withdrawalTableBody');

    if (name === '' || amount === '') {
        alert('Please enter both name and amount.');
        return;
    }

    withdrawalCount++;
    const date = new Date().toLocaleString();

    const newRow = `
        <tr>
            <td>${withdrawalCount}</td>
            <td>${name}</td>
            <td>${amount}</td>
            <td>${date}</td>
        </tr>
    `;

    tableBody.insertAdjacentHTML('beforeend', newRow);

    // input clear
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
}