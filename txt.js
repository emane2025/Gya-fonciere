document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi classique du formulaire
    alert("Merci pour votre message ! Nous vous contacterons bientôt.");
    this.reset(); // Réinitialise le formulaire après soumission
});
var typed = new Typed('.animation', {
    strings: ['Bienvenue', 'Chez GYA Foncière'],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true,
});

// Animation du header au scroll
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animation des éléments au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-text, .about-image, .footer, .contact-info-section, .contact-form-section');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Menu mobile
    const mobileMenuButton = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const socialIcons = document.querySelector('.social-icons');

    if (mobileMenuButton && nav) {
        mobileMenuButton.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            navLinks.classList.toggle('active');
            socialIcons.classList.toggle('active');
        });
    }

    // Validation du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Validation du numéro de téléphone marocain
            const phoneInput = document.getElementById('phone');
            const phoneRegex = /^(?:\+212|0)(?:[5-7]|6[0-9])[0-9]{8}$/;

            if (!phoneRegex.test(phoneInput.value)) {
                alert('Veuillez entrer un numéro de téléphone marocain valide');
                phoneInput.focus();
                return;
            }

            // Animation de chargement
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            submitBtn.disabled = true;

            // Simulation d'envoi (à remplacer par votre logique d'envoi réelle)
            setTimeout(() => {
                alert('Merci pour votre message ! Nous vous contacterons bientôt.');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });

        // Formatage automatique du numéro de téléphone
        const phoneInput = document.getElementById('phone');
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0 && !value.startsWith('212') && !value.startsWith('0')) {
                value = '0' + value;
            }
            if (value.length > 10) {
                value = value.slice(0, 10);
            }
            e.target.value = value;
        });
    }

    // Animation du texte d'accueil
    const typed = new Typed('.animation', {
        strings: ['Bienvenue chez GYA Foncière', 'L\'immobilier de prestige', 'Votre satisfaction, notre priorité'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        smartBackspace: true,
        showCursor: true,
        cursorChar: '|'
    });

    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Mettre à jour la fonction du slider pour 3 images
function initProjectsSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Montrer la première slide
    showSlide(0);

    // Changer de slide toutes les 3 secondes
    setInterval(nextSlide, 3000);
}

// Initialiser le slider quand la page est chargée
document.addEventListener('DOMContentLoaded', initProjectsSlider);