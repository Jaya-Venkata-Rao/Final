document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    // Here you can implement your login logic
    console.log('Login with: ' + email + ' - ' + password);
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('signupUsername').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    // Here you can implement your signup logic
    console.log('Signup with: ' + username + ' - ' + email + ' - ' + password);
});
