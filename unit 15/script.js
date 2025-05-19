document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Basic validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const resume = document.getElementById('resume').value;

    if (name && email && resume) {
        document.getElementById('formFeedback').innerHTML = `<div class="alert alert-success">Thank you, ${name}! Your application has been submitted.</div>`;
        // Here you would typically send the form data to a server
    } else {
        document.getElementById('formFeedback').innerHTML = `<div class="alert alert-danger">Please fill in all fields.</div>`;
    }
});
