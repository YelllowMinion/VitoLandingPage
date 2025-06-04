// app.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.topnav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust for fixed navbar
                    behavior: 'smooth'
                });
                
                // Update URL without refreshing
                history.pushState(null, null, targetId);
            }
        });
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.topnav a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Add active class to current section in navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Image gallery modal functionality
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="close-modal">&times;</span>
        <img class="modal-content" id="modal-image">
        <div class="caption"></div>
    `;
    document.body.appendChild(modal);
    
    const modalImg = document.getElementById('modal-image');
    const captionText = document.querySelector('.caption');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });
    
    document.querySelector('.close-modal').addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Form submission handling (if you add a contact form later)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would add your form submission logic
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('section, .portfolio-item, .testimonial');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('section, .portfolio-item, .testimonial').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load

    // Current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Skill bars animation (if you want to add skill levels)
    const animateSkillBars = function() {
        const skills = document.querySelectorAll('.skill-level');
        
        skills.forEach(skill => {
            const width = skill.getAttribute('data-level');
            skill.style.width = '0';
            setTimeout(() => {
                skill.style.width = width;
            }, 500);
        });
    };
    
    // You would need to add HTML structure for skill bars if you want to use this
});

// Add this to your style.css for the modal:
/*
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
    animation: fadeIn 0.3s;
}

.modal-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 80vh;
    margin-top: 60px;
    animation: zoomIn 0.3s;
}

.close-modal {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
}

.close-modal:hover {
    color: #2a6ebb;
    transform: rotate(90deg);
}

.caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
}

@keyframes zoomIn {
    from {transform: scale(0.9)}
    to {transform: scale(1)}
}

@keyframes fadeIn {
    from {opacity: 0}
    to {opacity: 1}
}

.topnav a.active {
    background-color: #1d4fa5;
    color: #ffdd57;
}
*/