// Typed-заголовок
new Typed('#typed-title', {
  strings: ['AiSchool', 'Обучение ИИ', 'Вайб-кодинг', 'Создай свою вселенную'],
  typeSpeed: 80,
  backSpeed: 60,
  loop: true
});

// Партикл-фон (p5.js)
new p5(function(p) {
  let particles = [];
  p.setup = function() {
    let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent('particles-container');
    for (let i = 0; i < 120; i++) particles.push({x: p.random(p.width), y: p.random(p.height), size: p.random(2, 5), speed: p.random(0.5, 2)});
  };
  p.draw = function() {
    p.clear();
    p.noStroke();
    p.fill(0, 255, 255, 120);
    for (let pt of particles) {
      p.ellipse(pt.x, pt.y, pt.size);
      pt.y += pt.speed;
      if (pt.y > p.height) pt.y = -10;
    }
  };
  p.windowResized = function() { p.resizeCanvas(window.innerWidth, window.innerHeight); }
});

// Анимация сферы при клике
document.getElementById('aiSphere').addEventListener('click', () => {
  anime({
    targets: '#aiSphere',
    scale: [1, 1.3, 1],
    rotate: '1turn',
    duration: 1000,
    easing: 'easeInOutQuad'
  });
});
