function bookAppointment() {
    alert("Appointment Booking Feature Coming Soon!");
}

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(`Thank You ${name}! Your message has been received.`);

    form.reset();
});
document.querySelector(".signin-btn").addEventListener("click", () => {
    alert("Sign In Page Coming Soon!");
});

document.querySelector(".signup-btn").addEventListener("click", () => {
    alert("Sign Up Page Coming Soon!");
});