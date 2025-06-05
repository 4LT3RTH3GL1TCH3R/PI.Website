const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const mouse = { x: null, y: null };
const numParticles = 100;
const maxDistance = 150;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = (Math.random() - 0.5) * 0.8;
    this.radius = 2;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
  }
}

function connect() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a + 1; b < particles.length; b++) {
      const dx = particles[a].x - particles[b].x;
      const dy = particles[a].y - particles[b].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDistance) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,255,255,${1 - dist / maxDistance})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.move();
    p.draw();
  });
  connect();
  drawCursor();
  requestAnimationFrame(animate);
}

function drawCursor() {
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
}

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  const cursor = document.getElementById("clickEffect");
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

window.addEventListener("click", () => {
  const clickCircle = document.getElementById("clickEffect");
  clickCircle.style.transition = "none";
  clickCircle.style.opacity = 1;
  clickCircle.style.transform = "translate(-50%, -50%) scale(1)";

  setTimeout(() => {
    clickCircle.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    clickCircle.style.transform = "translate(-50%, -50%) scale(6)";
    clickCircle.style.opacity = 0;
  }, 10);
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

for (let i = 0; i < numParticles; i++) {
  particles.push(new Particle());
}

animate();
