// Toggle mobile nav menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Accessibility: allow keyboard toggle for hamburger
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    navLinks.classList.toggle('open');
  }
});

// Animate skill bars when Skills section enters viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

const skillsSection = document.querySelector('.skills-section');
const skillLevels = document.querySelectorAll('.skill-level');
let skillsAnimated = false;

function animateSkillsOnScroll() {
  if (!skillsAnimated && isInViewport(skillsSection)) {
    skillLevels.forEach((bar) => {
      const level = bar.getAttribute('data-level');
      bar.style.width = level + '%';
    });
    skillsAnimated = true;
    // Remove event listener after animation
    window.removeEventListener('scroll', animateSkillsOnScroll);
  }
}

window.addEventListener('scroll', animateSkillsOnScroll);


// Contact section fade-in
const contactSection = document.querySelector('.contact'); // Changed selector to .contact

function animateContactOnScroll() {
  if (isInViewport(contactSection)) {
    contactSection.classList.add('visible');
    // Remove listener so it only happens once
    window.removeEventListener('scroll', animateContactOnScroll);
  }
}

window.addEventListener('scroll', animateContactOnScroll);

// Project Card "View More" link - prevent default behavior
document.querySelectorAll('.view-more-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior (jumping to top)
    });
});