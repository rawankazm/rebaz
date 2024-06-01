let medicines = [
 
];

function searchMedicine() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const result = document.getElementById('result');
    result.innerHTML = '';

    const medicine = medicines.find(med => med.name.toLowerCase() === input);

    if (medicine) {
        result.innerHTML = `
            <h2>${medicine.name}</h2>
            <p><strong>Price:</strong> ${medicine.price}</p>
            <p><strong>Quantity:</strong> ${medicine.quantity}</p>
            <p><strong>Barcode:</strong> ${medicine.barcode}</p>
            <img src="${medicine.image}" alt="${medicine.name}">
            <button onclick="returnToSearch()">Return</button>
        `;
    } else {
        result.innerHTML = `<p>Medicine not found.</p>`;
    }
}

function returnToSearch() {
    const result = document.getElementById('result');
    result.innerHTML = '';
    document.getElementById('searchInput').value = '';
}

function showAddForm() {
    document.getElementById('addMedicineForm').style.display = 'block';
}

function hideAddForm() {
    document.getElementById('addMedicineForm').style.display = 'none';
}

function addMedicine() {
    const name = document.getElementById('medicineName').value;
    const price = document.getElementById('medicinePrice').value;
    const quantity = document.getElementById('medicineQuantity').value;
    const barcode = document.getElementById('medicineBarcode').value;
    const image = document.getElementById('medicineImage').value;

    const newMedicine = {
        name,
        price,
        quantity,
        barcode,
        image
    };

    medicines.push(newMedicine);
    alert('Medicine added successfully');
    document.getElementById('addMedicineForm').reset();
    hideAddForm();
}
