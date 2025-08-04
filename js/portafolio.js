document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Experience tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Projects filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Animate on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }
    
    // Check on initial load
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);

    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-bar:after');
    skillBars.forEach(bar => {
        const level = bar.parentElement.getAttribute('data-level');
        bar.style.width = level + '%';
    });

    // Stats counter
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            
            let current = 0;
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(counter);
                }
                stat.textContent = Math.floor(current);
            }, 16);
        });
    }
    
    // Start counter when stats section is visible
    const statsSection = document.querySelector('.stats-container');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateStats();
            observer.unobserve(statsSection);
        }
    });
    
    observer.observe(statsSection);

    // Chart.js for skills
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Frontend', 'Backend', 'Diseño', 'Bases de datos', 'DevOps', 'Testing'],
            datasets: [{
                label: 'Nivel de habilidad',
                data: [85, 75, 70, 80, 65, 75],
                backgroundColor: 'rgba(74, 123, 157, 0.5)',
                borderColor: 'rgba(74, 123, 157, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(74, 123, 157, 1)',
                pointRadius: 4
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    pointLabels: {
                        color: '#E0E1DD'
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#E0E1DD'
                    }
                }
            }
        }
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado!';
                
                // Reset form
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = '<span>Enviar Mensaje</span> <i class="fas fa-paper-plane"></i>';
                    submitBtn.disabled = false;
                    
                    // Show success message
                    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
                }, 2000);
            }, 1500);
        });
    }
});




// Particulas.js - Reemplazar el código anterior con este
document.addEventListener('DOMContentLoaded', function() {
    // Configuración mejorada
    const particlesConfig = {
        density: 120, // Más partículas para llenar la pantalla
        colors: [
            "rgba(74, 123, 157, 0.8)",  // --accent-color
            "rgba(126, 168, 190, 0.8)", // --light-accent
            "rgba(224, 225, 221, 0.6)"  // --text-color
        ],
        minSize: 2,
        maxSize: 4,
        speed: 0.5,
        lineDistance: 100,
        lineColor: "rgba(126, 168, 190, 0.3)"
    };

    // Crear canvas con estilos mejorados
    const particlesCanvas = document.createElement('canvas');
    particlesCanvas.id = 'particles-js';
    Object.assign(particlesCanvas.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw', // Usar viewport width
        height: '100vh', // Usar viewport height
        pointerEvents: 'none',
        zIndex: '-1',
        display: 'block'
    });
    document.body.insertBefore(particlesCanvas, document.body.firstChild);

    const ctx = particlesCanvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };

    // Ajustar tamaño del canvas correctamente
    function resizeCanvas() {
        particlesCanvas.width = window.innerWidth;
        particlesCanvas.height = window.innerHeight;
        initParticles(); // Recrear partículas al redimensionar
    }

    // Clase Partícula optimizada
    class Particle {
        constructor() {
            this.x = Math.random() * particlesCanvas.width;
            this.y = Math.random() * particlesCanvas.height;
            this.size = Math.random() * (particlesConfig.maxSize - particlesConfig.minSize) + particlesConfig.minSize;
            this.speedX = (Math.random() - 0.5) * particlesConfig.speed;
            this.speedY = (Math.random() - 0.5) * particlesConfig.speed;
            this.color = particlesConfig.colors[Math.floor(Math.random() * particlesConfig.colors.length)];
            this.density = Math.random() * 30 + 10;
        }

        update() {
            // Movimiento básico
            this.x += this.speedX;
            this.y += this.speedY;

            // Rebotar en bordes
            if (this.x < 0 || this.x > particlesCanvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > particlesCanvas.height) this.speedY *= -1;

            // Interacción con mouse
            if (mouse.x && mouse.y) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 100;
                
                if (distance < maxDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (maxDistance - distance) / maxDistance;
                    
                    this.x -= forceDirectionX * force * this.density * 0.5;
                    this.y -= forceDirectionY * force * this.density * 0.5;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Conectar partículas
    function connectParticles() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                const distance = Math.sqrt(
                    Math.pow(particles[a].x - particles[b].x, 2) + 
                    Math.pow(particles[a].y - particles[b].y, 2)
                );
                
                if (distance < particlesConfig.lineDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = particlesConfig.lineColor;
                    ctx.lineWidth = 0.7;
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Inicializar partículas
    function initParticles() {
        particles = [];
        for (let i = 0; i < particlesConfig.density; i++) {
            particles.push(new Particle());
        }
    }

    // Animación principal
    function animate() {
        ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        connectParticles();
        requestAnimationFrame(animate);
    }

    // Event listeners
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener('resize', resizeCanvas);

    // Iniciar
    resizeCanvas();
    initParticles();
    animate();
});