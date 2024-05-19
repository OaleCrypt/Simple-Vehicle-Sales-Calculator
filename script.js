function getCitySalesTaxRate(cityName) {
    const salesTaxPercentage = parseFloat(prompt(`Enter the sales tax rate for ${cityName} (e.g., 7.7 for 7.7%):`));
    return salesTaxPercentage !== null ? salesTaxPercentage / 100 : null;
}

// Function to calculate total cost and display result
function calculateTotalCost() {
    const cityName = document.getElementById('cityName').value;
    const salesTaxRate = parseFloat(document.getElementById('salesTaxRate').value) / 100;
    const vehicleCost = parseFloat(document.getElementById('vehicleCost').value.replace(/,/g, '')); // Remove commas
    
    if (!isNaN(salesTaxRate) && !isNaN(vehicleCost)) {
        const citySalesTax = vehicleCost * salesTaxRate;
        const totalCost = vehicleCost + citySalesTax;
        const formattedTotalCost = '$' + totalCost.toLocaleString();
        document.getElementById('result').textContent = `Total cost of the vehicle in ${cityName}: ${formattedTotalCost}`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid input.';
    }
}

// Submit form event listener
document.getElementById('vehicleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    calculateTotalCost(); // Call function to calculate total cost
});
