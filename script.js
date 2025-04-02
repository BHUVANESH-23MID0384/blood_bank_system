// Login Functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === "admin" && password === "admin123") {
        localStorage.setItem("isLoggedIn", "true");
        showDashboard();
    } else {
        document.getElementById('loginError').textContent = "Invalid username or password!";
    }
});

// Show Dashboard After Login
function showDashboard() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('dashboardSection').style.display = 'block';
}

// Logout Function
function logout() {
    localStorage.removeItem("isLoggedIn");
    location.reload();
}

// Function to Show Forms Based on Button Clicks
function showForm(formId) {
    document.getElementById("donorForm").style.display = "none";
    document.getElementById("recipientForm").style.display = "none";
    document.getElementById("inventorySection").style.display = "none";

    document.getElementById(formId).style.display = "block";
}

// Show Inventory
function showInventory() {
    document.getElementById("donorForm").style.display = "none";
    document.getElementById("recipientForm").style.display = "none";
    document.getElementById("inventorySection").style.display = "block";
}

// Success Messages
document.getElementById('donorFormElement').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('donorSuccess').textContent = "✅ Donor has been successfully registered!";
});

document.getElementById('recipientFormElement').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('recipientSuccess').textContent = "✅ Blood request has been confirmed!";
});