// Function to populate the month options
function populateMonths() {
    const monthSelect = document.getElementById('dob-month');
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    monthNames.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
    });
}

// Function to populate the day options
function populateDays() {
    const daySelect = document.getElementById('dob-day');
    for (let day = 1; day <= 31; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
    }
}

// Function to populate the year options
function populateYears() {
    const yearSelect = document.getElementById('dob-year');
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100; // 100 years back

    for (let year = currentYear; year >= startYear; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}

// Call the functions to populate the select elements
populateMonths();
populateDays();
populateYears();