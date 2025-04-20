document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    if (username === 'admin' && password === '123') {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to home page
    } else {
        alert('Invalid username or password!');
    }
});