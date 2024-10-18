    // Function to check if password and confirm password are identical
    function checkPasswordsMatch() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;
        const errorMessage = document.getElementById('error-message');
        const confirmPassColor = document.querySelector("#confirm_password:valid + span");


        if (password !== confirmPassword) {
            confirmPassColor.style.color = 'red';// Show error message
            return false; // Prevent form submission
        } else {
            
            confirmPassColor.style.color = 'green';
            return true; // Allow form submission
        }
    }

    // Attach the check to form submission
    document.getElementById('registerForm').addEventListener('input', function (event) {
        if (!checkPasswordsMatch()) {   
        }
    });
   // Attach the check to form submission
    document.getElementById('registerForm').addEventListener('submit', function (event) {
        if (!checkPasswordsMatch()) {
            event.preventDefault();
        }
    });