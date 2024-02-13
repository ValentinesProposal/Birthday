document.getElementById('yes-btn').addEventListener('click', function() {
    window.location.href = 'yes.html';
});

document.getElementById('no-btn').addEventListener('mouseover', function() {
    const maxX = window.innerWidth - this.offsetWidth;
    const maxY = window.innerHeight - this.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});
document.getElementById('no-btn').addEventListener('click', function() {
    const maxX = window.innerWidth - this.offsetWidth;
    const maxY = window.innerHeight - this.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});
