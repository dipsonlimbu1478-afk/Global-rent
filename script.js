// Cookie System
function acceptCookies() {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
}

window.onload = function() {
    if(localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookie-banner").style.display = "none";
    }
};

// Contact Form (frontend only)
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage").innerText = "Message sent successfully!";
});
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        ctx.fillStyle = "white";
        ctx.fillRect(p.x, p.y, p.size, p.size);

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();