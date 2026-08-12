AOS.init({
    duration: 1000, 
    once: false, 
});

window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    if (window.scrollY > 50) {
        hero.classList.add('scrolled');
    } else {
        hero.classList.remove('scrolled');
    }
});

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; 
    } else {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; 
    }
}

function playVideo() {
    const video = document.getElementById('suraVideo');
    const overlay = document.getElementById('videoOverlay');
    
    overlay.style.display = 'none';
    video.muted = false; 
    video.currentTime = 0;
    video.play();
    video.controls = true; 
}

const btnConfetti = document.getElementById('btnConfetti');
const btnRepeatConfetti = document.getElementById('btnRepeatConfetti');
const successMessage = document.getElementById('successMessage');

function lanzarConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0033A0', '#00AEC7', '#FFD100'] 
    });
}

btnConfetti.addEventListener('click', function() {
    lanzarConfetti();
    
    this.innerText = "¡Café enviado! ☕";
    this.style.backgroundColor = "#FFFFFF";
    this.style.color = "#0033A0";
    this.style.pointerEvents = "none"; 

    successMessage.classList.remove('hidden');
    successMessage.style.opacity = '1';
    
    btnRepeatConfetti.classList.remove('hidden');
    btnRepeatConfetti.style.opacity = '1';
    btnRepeatConfetti.style.pointerEvents = "auto";
});

btnRepeatConfetti.addEventListener('click', function() {
    lanzarConfetti();
})