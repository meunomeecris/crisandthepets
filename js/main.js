/* ===================================================
   PataVerde – Pet Sitter Grenoble
   JavaScript Principal · Interactions & animations
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ===== MENU BURGER (mobile) =====
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      burger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });

    // Fermer le menu en cliquant sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.textContent = '☰';
      });
    });
  }

  // ===== SCROLL REVEAL =====
  const revealEls = document.querySelectorAll(
    '.card, .temo-card, .why-item, .zone-cities span'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Décalage progressif
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));

  // ===== FORMULAIRE CONTACT =====
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Animation de confirmation
      const btn = form.querySelector('.btn-primary');
      const original = btn.textContent;
      btn.textContent = '🐾 Message envoyé ! Miaou !';
      btn.style.background = '#2d8c4e';
      btn.disabled = true;

      // Message de succès
      const msg = document.createElement('p');
      msg.textContent = '✅ Super ! Je vous réponds dans les 24h. Promis (sauf enlèvement par chat).';
      msg.style.cssText = `
        color: #f5c842;
        font-weight: 700;
        text-align: center;
        margin-top: 16px;
        font-size: 0.95rem;
        animation: fadeInUp 0.5s ease;
      `;
      form.appendChild(msg);

      // Réinitialiser après 5 secondes
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
        msg.remove();
        form.reset();
      }, 5000);
    });
  }

  // ===== EASTER EGG : CLIQUER SUR UN CHAT =====
  const miaouxList = [
    'Miaouuuu ! 😻',
    'Purrrr... 🐾',
    'Miaou miaou miaou ! 😸',
    '*vous ignore royalement* 🙄',
    'Miaou. Miaou. Miaou. 🐈',
    'Je veux des croquettes. MAINTENANT. 😾',
    'Miaou ! (Traduit : bonjour, vous êtes formidable)',
    '...miaou 🐱',
  ];

  document.querySelectorAll('.cat-emoji').forEach(el => {
    el.style.cursor = 'pointer';
    el.title = 'Cliquez pour traduire !';

    el.addEventListener('click', () => {
      const random = miaouxList[Math.floor(Math.random() * miaouxList.length)];

      // Petite bulle de dialogue
      const bubble = document.createElement('div');
      bubble.textContent = random;
      bubble.style.cssText = `
        position: fixed;
        bottom: 32px;
        right: 32px;
        background: #1a5c33;
        color: #fff;
        padding: 14px 22px;
        border-radius: 16px 16px 4px 16px;
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        font-size: 1rem;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: bounceIn 0.4s ease;
        max-width: 280px;
      `;
      document.body.appendChild(bubble);
      setTimeout(() => bubble.remove(), 2500);
    });
  });

  // ===== EASTER EGG : KONAMI CODE (cheat code) =====
  // ↑ ↑ ↓ ↓ ← → ← → B A → fais apparaître une pluie de pattes
  const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        rainOfPaws();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  function rainOfPaws() {
    const emojis = ['🐾', '😸', '🐱', '😻', '🐈', '🐕', '🐶'];
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const el = document.createElement('div');
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.cssText = `
          position: fixed;
          left: ${Math.random() * 100}vw;
          top: -40px;
          font-size: ${1.2 + Math.random() * 1.5}rem;
          z-index: 9999;
          pointer-events: none;
          animation: rainFall ${1.5 + Math.random()}s linear forwards;
        `;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3000);
      }, i * 80);
    }
  }

  // Ajouter le style pour la pluie de pattes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rainFall {
      to {
        transform: translateY(110vh) rotate(360deg);
        opacity: 0;
      }
    }
    @keyframes bounceIn {
      0%   { opacity: 0; transform: scale(0.5); }
      70%  { transform: scale(1.1); }
      100% { opacity: 1; transform: scale(1); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // ===== SMOOTH SCROLL pour les ancres =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== NAV : changer de style au scroll =====
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.cssText = `
        position: fixed; top: 0; left: 0; right: 0;
        background: rgba(26,92,51,0.96);
        backdrop-filter: blur(12px);
        padding: 12px 40px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
        z-index: 1000;
      `;
    } else {
      nav.style.cssText = 'position: relative; background: transparent; padding: 20px 40px;';
    }
  });

  console.log('🐾 PataVerde chargé ! Tapez le Konami Code pour une surprise… ↑↑↓↓←→←→BA');
});
