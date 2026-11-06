/**
 * Main JavaScript Controller
 * Freiddelee Sosa - Portafolio Profesional
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Inicialización de Elementos ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');
  const navbar = document.querySelector('.navbar');
  const backToTopBtn = document.getElementById('back-to-top');
  const typingElement = document.getElementById('typing-text');
  const projectsContainer = document.getElementById('projects-container');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  // Modal elements
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDesc = document.getElementById('modal-desc');
  const modalTags = document.getElementById('modal-tags');
  const modalLive = document.getElementById('modal-live');
  const modalGithub = document.getElementById('modal-github');

  // --- 2. Tema Oscuro / Claro con persistencia ---
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      showToast(`Modo ${newTheme === 'dark' ? 'oscuro' : 'claro'} activado`);
    });
  }

  // --- 3. Menú Móvil ---
  if (mobileToggleBtn && navLinks) {
    mobileToggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // --- 4. Efecto de Escritura Dinámica (Typing Effect) ---
  const words = [
    'Frontend Developer',
    'Estudiante de Informática en la UCLA',
    'Especialista en HTML, CSS y JavaScript',
    'Creadora de Experiencias Web Modernas'
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeEffect() {
    if (!typingElement) return;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pausa al terminar la palabra
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 400; // Pausa antes de la nueva palabra
    }

    setTimeout(typeEffect, typingSpeed);
  }
  typeEffect();

  // --- 5. Renderizado y Filtro Dinámico de Proyectos ---
  function renderProjects(category = 'all') {
    if (!projectsContainer) return;
    projectsContainer.innerHTML = '';

    const filtered = category === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === category);

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-category', project.category);

      card.innerHTML = `
        <div class="project-card-image">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
          <span class="project-badge-tag">${project.categoryName}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-tech-stack">
            ${project.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-links">
            <button class="project-link-btn view-details-btn" data-id="${project.id}">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              Detalles
            </button>
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn primary">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              Demo
            </a>
          </div>
        </div>
      `;

      projectsContainer.appendChild(card);
    });

    // Agregar listeners para el modal de detalles
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        openProjectModal(id);
      });
    });
  }

  // Render inicial de proyectos
  renderProjects('all');

  // Filtros de proyectos
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  // --- 6. Modal de Proyecto ---
  function openProjectModal(id) {
    const proj = projectsData.find(p => p.id === id);
    if (!proj || !modal) return;

    modalImg.src = proj.image;
    modalTitle.textContent = proj.title;
    modalCategory.textContent = proj.categoryName;
    modalDesc.textContent = proj.fullDescription;
    modalTags.innerHTML = proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');
    modalLive.href = proj.liveUrl;
    modalGithub.href = proj.githubUrl;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // --- 7. Contador de Métricas Interactivo ---
  const counters = document.querySelectorAll('.metric-number');
  let counterStarted = false;

  function startCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      let count = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          counter.textContent = target + (counter.getAttribute('data-suffix') || '');
          clearInterval(interval);
        } else {
          counter.textContent = count + (counter.getAttribute('data-suffix') || '');
        }
      }, 35);
    });
  }

  // Observer para iniciar el contador cuando esté visible
  const metricsSection = document.querySelector('.metrics-bar');
  if (metricsSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !counterStarted) {
        startCounters();
        counterStarted = true;
      }
    }, { threshold: 0.3 });
    observer.observe(metricsSection);
  }

  // --- 8. Barra de navegación y Scroll activo ---
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Sombra del navbar
    if (scrollPos > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Botón volver arriba
    if (backToTopBtn) {
      if (scrollPos > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 9. Botón Copiar al Portapapeles ---
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copiado: ${textToCopy}`);
      }).catch(() => {
        showToast('Error al copiar al portapapeles');
      });
    });
  });

  // --- 10. Envío de Formulario de Contacto ---
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast('Por favor completa todos los campos requeridos');
        return;
      }

      // Preparar enlace de correo seguro (mailto)
      const subject = encodeURIComponent(`Contacto desde Portafolio Web - ${name}`);
      const body = encodeURIComponent(`Hola Freiddelee,\n\nSoy ${name} (${email}).\n\nMensaje:\n${message}`);
      
      showToast('¡Gracias por tu mensaje! Abriendo gestor de correo...');
      
      setTimeout(() => {
        window.location.href = `mailto:freiddeleesosa@gmail.com?subject=${subject}&body=${body}`;
        contactForm.reset();
      }, 800);
    });
  }

  // --- 11. Función Toast / Notificación ---
  let toastTimer;
  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
});

