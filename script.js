// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name && email && message){
        document.getElementById('statusMessage').textContent = `Thank you, ${name}! Your message has been sent.`;
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('statusMessage').textContent = "Please fill in all fields.";
    }
});