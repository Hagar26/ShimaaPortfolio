        const counts = document.querySelectorAll('.count');
        const speed = 200;

        const countUp = (target, targetNumber, currentNumber) => {
            const increment = targetNumber / speed;
            if (currentNumber < targetNumber) {
                target.innerText = Math.ceil(currentNumber + increment);
                setTimeout(() => countUp(target, targetNumber, currentNumber + increment), 1);
            } else {
                target.innerText = targetNumber;
            }
        };

        const checkInView = () => {
            counts.forEach(count => {
                const targetNumber = +count.getAttribute('data-target');
                const rect = count.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight && count.innerText === "0") {
                    countUp(count, targetNumber, 0);
                }
            });
        };

        window.addEventListener('scroll', checkInView);
        window.addEventListener('load', checkInView);

        const scrollElems = document.querySelectorAll('.fade-in, .slide-up');

        const appearOnScroll = () => {
            scrollElems.forEach(elem => {
                const rect = elem.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight * 0.8) {
                    elem.classList.add('appear');
                }
            });
        };

        window.addEventListener('scroll', appearOnScroll);
        window.addEventListener('load', appearOnScroll);

        const backToTopBtn = document.getElementById('back-to-top');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('opacity-100');
            } else {
                backToTopBtn.classList.remove('opacity-100');
            }
        });
   function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById("contactForm");
    const btn = document.getElementById("submitBtn");
    const msg = document.getElementById("successMessage");
    
    if(btn) btn.style.display = "none";
    if(msg) msg.classList.remove("hidden");
    
    if(form) form.reset();
    
    setTimeout(() => {
        if(msg) msg.classList.add("hidden");
        if(btn) btn.style.display = ""; // إعادة الزر لحالته الافتراضية في الـ CSS
    }, 3000);
}

const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });