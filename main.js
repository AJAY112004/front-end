const checkbox = document.getElementById('btn');
        const signUpForm = document.getElementById('form-sign-up');
        const signInForm = document.getElementById('form-sign-in');

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                signUpForm.style.display = 'none';
                signInForm.style.display = 'block';
            } else {
                signUpForm.style.display = 'block';
                signInForm.style.display = 'none';
            }
        });
