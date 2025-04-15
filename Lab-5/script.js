/* Sougandhi Manonmani Pendyala - A20549991 */

// DOM element selections
const billTotalInput = document.getElementById("billTotal");
const tipSlider = document.getElementById("tipSlider");
const tipPercentageDisplay = document.getElementById("tipPercentageDisplay"); // Tip percentage display element
const currencySelect = document.getElementById("currency");
const tipAmountOutput = document.getElementById("tipAmount");
const totalWithTaxOutput = document.getElementById("totalWithTax");
const totalWithTipTaxOutput = document.getElementById("totalWithTipTax");
const errorMsg = document.getElementById("errorMsg");

// Conversion rates for all currencies
const conversionRates = {
  USD: 1,
  INR: 84.07,
  EUR: 0.88
};

let billInputTouched = false;

// Set default tip percentage display to "15%"
tipSlider.value = 15; // default slider value (if not already set in HTML)
tipPercentageDisplay.value = `${tipSlider.value}%`; // default tip percentage display

// Event listeners
billTotalInput.addEventListener("focus", () => {
  billInputTouched = true;
});

billTotalInput.addEventListener("input", () => {
  validateBillInput();
  calculateTip();
});

tipSlider.addEventListener("input", () => {
  // Update the tip percentage display on slider input
  tipPercentageDisplay.value = `${tipSlider.value}%`;
  calculateTip();
});

currencySelect.addEventListener("change", calculateTip);

// Validate Bill Total input
function validateBillInput() {
  const validInput = /^[0-9]*\.?[0-9]*$/; // Allow numbers and one decimal point
  if (!validInput.test(billTotalInput.value)) {
    errorMsg.textContent = "Please enter a valid positive number for the bill total.";
    return;
  } else if (parseFloat(billTotalInput.value) < 0) {
    errorMsg.textContent = "Negative numbers are not allowed. Please enter a positive amount.";
    return;
  } else {
    errorMsg.textContent = "";
  }
  
  if (billTotalInput.value === "") {
    tipAmountOutput.value = "";
    totalWithTaxOutput.value = "";
    totalWithTipTaxOutput.value = "";
    tipPercentageDisplay.value = "";
  }
}

// Calculate outputs and update the fields
function calculateTip() {
  const billTotal = parseFloat(billTotalInput.value);
  const tipPercentage = parseFloat(tipSlider.value);
  const currency = currencySelect.value;
  const rate = conversionRates[currency];

  if (billInputTouched && (isNaN(billTotal) || billTotal <= 0)) {
    errorMsg.textContent = "Please enter a valid positive number for the bill total.";
    tipAmountOutput.value = "";
    totalWithTaxOutput.value = "";
    totalWithTipTaxOutput.value = "";
    return;
  } else {
    errorMsg.textContent = "";
  }
  
  if (isNaN(billTotal) || billTotal <= 0) {
    tipAmountOutput.value = "";
    totalWithTaxOutput.value = "";
    totalWithTipTaxOutput.value = "";
    return;
  }
  
  // Calculate total with tax (11%) in USD and update its field
  const totalWithTaxUSD = billTotal * 1.11;
  totalWithTaxOutput.value = `$${totalWithTaxUSD.toFixed(2)}`;
  
  // Calculate tip amount in USD
  const tipAmountUSD = (billTotal * tipPercentage) / 100;
  
  // Calculate converted values based on selected currency
  const convertedTip = tipAmountUSD * rate;
  const convertedTotalWithTipTax = (totalWithTaxUSD + tipAmountUSD) * rate;
  
  tipAmountOutput.value = `${currencySymbol(currency)}${convertedTip.toFixed(2)}`;
  totalWithTipTaxOutput.value = `${currencySymbol(currency)}${convertedTotalWithTipTax.toFixed(2)}`;
}

// Helper function to return the appropriate currency symbol
function currencySymbol(currency) {
  switch (currency) {
    case "USD":
      return "$";
    case "INR":
      return "₹";
    case "EUR":
      return "€";
    default:
      return "";
  }
}
