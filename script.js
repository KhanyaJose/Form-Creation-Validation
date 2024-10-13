document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // This prrevents form submission

        // Retrieve and trim user inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true; // Track validation status
        let messages = []; // Store error messages

        // Username validation: the username length must be at least 3 charactyers long
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation: the email must include '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Email must be a valid format, including '@' and '.'.");
        }

        // Password validation: the length of the password must be at least 8 characters long
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // This is the display feedback
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // This will be the color for successes
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // This will be the color for errors
        }
    });
});
