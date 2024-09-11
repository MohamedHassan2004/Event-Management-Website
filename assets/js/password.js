    // Toggle password visibility
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');

    togglePasswordIcons.forEach((icon) => {
        icon.addEventListener('click', function () {
            const passwordInput = this.parentElement.querySelector('input');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            }
        });
    });

    // Function to check if password and confirm password are identical
    function checkPasswordsMatch() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;
        const errorMessage = document.getElementById('error-message');
        const confirmPassColor = document.querySelector("#confirm_password:valid + span");


        if (password !== confirmPassword) {
            errorMessage.style.display = 'block';
            confirmPassColor.style.color = 'red';// Show error message
            return false; // Prevent form submission
        } else {
            errorMessage.style.display = 'none'; // Hide error message
            return true; // Allow form submission
        }
    }

    // Attach the check to form submission
    document.getElementById('registerForm').addEventListener('submit', function (event) {
        if (!checkPasswordsMatch()) {
            event.preventDefault();

        }
    });