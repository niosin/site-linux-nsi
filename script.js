// 1. Tux
const tux = document.getElementById("tux");

// 2. Postion et vitesse
let x = 100;
let y = 100;
let vx = 3;
let vy = 2;

// 3. Les rebonds
function animer() {
    x = x + vx;
    y = y + vy;
    if (x < 0) {
        vx = -vx;
        x = 0;
    }
    if (x + tux.width > window.innerWidth) {
        vx = -vx;
        x = window.innerWidth - tux.width;
    }
    if (y < 0) {
        vy = -vy;
        y = 0;
    }
    if (y + tux.height > window.innerHeight) {
        vy = -vy;
        y = window.innerHeight - tux.height;
    }
    tux.style.left = x + "px";
    tux.style.top = y + "px";

    requestAnimationFrame(animer);
}

// 4. Lancer
animer();