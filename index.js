
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, header, footer');
    sections.forEach((sec, index) => {
        sec.style.opacity = '0';
        sec.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            sec.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            sec.style.opacity = '1';
            sec.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

function menu() {
    console.log('Menu clicado');
}

function chama() {
    console.log('Carousel botão clicado');
}

function Button() {
    console.log('Botão clicado');
}

function desativar() {
    console.log('Duplo clique detectado');
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

const buttons = document.querySelectorAll('.button');

buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const circle = document.createElement('span');
        circle.classList.add('ripple');
        this.appendChild(circle);

        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        circle.style.left = x + 'px';
        circle.style.top = y + 'px';

        setTimeout(() => {
            circle.remove();
        }, 600);
    });
});
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 15;
        const rotateY = (x - centerX) / 15;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));
