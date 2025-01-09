// Conversion logic for categories
const conversionRates = {
    length: {
        meter: { meter: 1, kilometer: 0.001, centimeter: 100 },
        kilometer: { meter: 1000, kilometer: 1, centimeter: 100000 },
        centimeter: { meter: 0.01, kilometer: 0.00001, centimeter: 1 },
    },
    weight: {
        kilogram: { kilogram: 1, gram: 1000, pound: 2.20462 },
        gram: { kilogram: 0.001, gram: 1, pound: 0.00220462 },
        pound: { kilogram: 0.453592, gram: 453.592, pound: 1 },
    },
    // Add other categories similarly
};

function convert(category) {
    const value = parseFloat(document.getElementById(`${category}-value`).value);
    const fromUnit = document.getElementById(`${category}-from-unit`).value;
    const toUnit = document.getElementById(`${category}-to-unit`).value;

    if (isNaN(value)) {
        alert("Please enter a valid number!");
        return;
    }

    const rate = conversionRates[category][fromUnit][toUnit];
    const result = value * rate;
    document.getElementById(`${category}-result`).innerText = `${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

function populateUnits(category, units) {
    const fromSelect = document.getElementById(`${category}-from-unit`);
    const toSelect = document.getElementById(`${category}-to-unit`);

    units.forEach(unit => {
        const optionFrom = document.createElement("option");
        optionFrom.value = unit;
        optionFrom.text = unit;
        fromSelect.add(optionFrom);

        const optionTo = document.createElement("option");
        optionTo.value = unit;
        optionTo.text = unit;
        toSelect.add(optionTo);
    });
}

// Populate units for each category on load
document.addEventListener("DOMContentLoaded", () => {
    populateUnits('length', ['meter', 'kilometer', 'centimeter']);
    populateUnits('weight', ['kilogram', 'gram', 'pound']);
    // Add other categories similarly
});
