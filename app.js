


function submit() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let name = document.getElementById("name").value;
    let fname = document.getElementById("fname").value;

    let userError = document.getElementById('userError');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let cnfrmPasswordError = document.getElementById('cnfrmError');
    let nameError = document.getElementById('nameError');
    let fnameError = document.getElementById('fnameError');

    // Reset error messages
    userError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";
    cnfrmPasswordError.style.display = "none";
    nameError.style.display = "none";
    fnameError.style.display = "none";

    // Validate Name
    if (name === "") {
        nameError.style.display = "inline";
        nameError.textContent = 'Name must be filled';
        return false;
    }

    // Validate Father's Name
    if (fname === "") {
        fnameError.style.display = "inline";
        fnameError.textContent = 'Father Name must be filled';
        return false;
    }

    // Validate Username
    if (username.length < 5) {
        userError.style.display = "inline";
        userError.textContent = 'Username must be at least 5 characters long';
        return false;
    }

    // Validate Email Format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.style.display = "inline";
        emailError.textContent = 'Invalid email format';
        return false;
    }

    // Validate Password Strength
    if (password.length < 8) {
        passwordError.style.display = "inline";
        passwordError.textContent = "Password must be at least 8 characters long.";
        return false;
    }
    if (!/[a-z]/.test(password)) {
        passwordError.style.display = "inline";
        passwordError.textContent = "Password must contain at least one lowercase letter.";
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        passwordError.style.display = "inline";
        passwordError.textContent = "Password must contain at least one uppercase letter.";
        return false;
    }
    if (!/[0-9]/.test(password)) {
        passwordError.style.display = "inline";
        passwordError.textContent = "Password must contain at least one number.";
        return false;
    }
    if (!/[!@#$%^&*()]/.test(password)) {
        passwordError.style.display = "inline";
        passwordError.textContent = "Password must contain at least one special character (!@#$%^&*()).";
        return false;
    }

    // Validate Password Confirmation
    if (password !== confirmPassword) {
        cnfrmPasswordError.style.display = "inline";
        cnfrmPasswordError.textContent = 'Passwords do not match';
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully");

   
    document.getElementById("user-name").textContent = name;
    document.getElementById("user-fname").textContent = fname;
    document.getElementById("user-username").textContent = username;
    document.getElementById("user-email").textContent = email;

    
    document.getElementById("form-container").style.display = "none";
    document.getElementById("info-container").style.display = "block";

    return true;
}
