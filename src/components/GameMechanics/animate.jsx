const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let angle = 20
let power = 20
let projectile = {
    x: 50,
    y: canvas.height - 30,
    radius: 5,
    color: 'red',
    velocity: {
        x: Math.cos(angle) * power,
        y: Math.sin(angle) * power
    }
};

function drawProjectile() {
    ctx.beginPath();
    ctx.arc(projectile.x, projectile.y, projectile.radius, 0, Math.PI * 2);
    ctx.fillStyle = projectile.color;
    ctx.fill();
    ctx.closePath();
}

function updateProjectile() {
    projectile.x += projectile.velocity.x;
    projectile.y -= projectile.velocity.y;

    drawProjectile();

    if (projectile.y < 0 || projectile.x > canvas.width) {
        // Reset projectile position or stop animation
        // You can add more logic here based on your game requirements
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateProjectile();
    requestAnimationFrame(animate);
}

// Call the animate function to start the animation
animate();
