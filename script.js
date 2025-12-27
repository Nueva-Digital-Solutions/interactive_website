document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("bookingModal");
    const btn = document.getElementById("bookBtn");
    const span = document.getElementsByClassName("close-btn")[0];
    const form = document.getElementById("bookingForm");

    // Open the modal
    btn.onclick = function () {
        modal.style.display = "flex";
    }

    // Close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Close on outside click
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Form Submission
    form.onsubmit = function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const planet = document.getElementById('destination').value;

        // Simple feedback
        const btn = form.querySelector('button');
        const originalText = btn.innerText;

        btn.innerText = "Transmitting...";
        btn.style.background = "#2ecc71"; // Success green

        setTimeout(() => {
            alert(`Thanks ${name}! Your seat to ${planet.charAt(0).toUpperCase() + planet.slice(1)} is reserved.`);
            modal.style.display = "none";

            // Reset form and button
            form.reset();
            btn.innerText = originalText;
            btn.style.background = "";
        }, 1000);
    }
});
