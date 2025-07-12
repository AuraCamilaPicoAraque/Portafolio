 // Generador de partículas de fondo
        document.addEventListener('DOMContentLoaded', () => {
            const body = document.body;
            for (let i = 0; i < 15; i++) {
                const particula = document.createElement('div');
                particula.classList.add('particula');
                const size = Math.random() * 10 + 5;
                particula.style.width = `${size}px`;
                particula.style.height = `${size}px`;
                particula.style.left = `${Math.random() * 100}vw`;
                particula.style.top = `${Math.random() * 100}vh`;
                particula.style.animationDuration = `${Math.random() * 20 + 10}s`;
                particula.style.animationDelay = `${Math.random() * 5}s`;
                body.appendChild(particula);
            }

            // Efecto de ondas al hacer clic
            const boton = document.getElementById('boton');
            boton.addEventListener('click', (e) => {
                const x = e.clientX - e.target.getBoundingClientRect().left;
                const y = e.clientY - e.target.getBoundingClientRect().top;
                
                const onda = document.createElement('span');
                onda.style.left = `${x}px`;
                onda.style.top = `${y}px`;
                onda.classList.add('onda');
                boton.appendChild(onda);
                
                setTimeout(() => onda.remove(), 1000);
            });
        });