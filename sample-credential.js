const AvaTax = require('avatax');

// Initialize AvaTax client with your credentials
const client = new AvaTax({ 
    username: 'YOUR_USERNAME', 
    password: 'YOUR_PASSWORD', 
    accountId: 'YOUR_ACCOUNT_ID', 
    licenseKey: 'YOUR_LICENSE_KEY',
    environment: 'sandbox' // or 'production' for live environment
});

// Function to get sales tax rate for a city
async function getCitySalesTaxRate(cityName) {
    try {
        const response = await client.getTaxRatesByAddress({
            line1: 'Dummy Address',
            city: cityName,
            region: 'CA', // Example: California
            postalCode: '90001' // Example: ZIP code
        });
        return response.totalRate / 100; // Convert rate from percentage to decimal
    } catch (error) {
        console.error('Error retrieving sales tax rate:', error);
        return null;
    }
}

// Usage example
(async () => {
    const cityName = 'Los Angeles'; // Example city
    const salesTaxRate = await getCitySalesTaxRate(cityName);
    console.log('Sales tax rate for', cityName + ':', salesTaxRate);
})();
