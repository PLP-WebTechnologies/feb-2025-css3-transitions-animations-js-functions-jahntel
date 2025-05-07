(() => {
    const btn = document.getElementById('animate-btn');
const img = document.getElementById('robot-image');
const THEME_KEY = 'userThemePreference';
 // Load and apply saved theme preference
 function loadPreference() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if(savedTheme && (savedTheme === 'coral' || savedTheme === 'blue')) {
      applyTheme(savedTheme);
    } else {
      applyTheme('blue');
    }
  }
  // Apply given theme to button by toggling classes
  function applyTheme(theme) {
    btn.classList.remove('blue-theme', 'coral-theme');
    if(theme === 'coral') {
      btn.classList.add('coral-theme');
      btn.textContent = "Activate Animation & Switch To Blue";
    } else {
      btn.classList.add('blue-theme');
      btn.textContent = "Activate Animation & Switch To Coral";
    }
  }
  // Trigger shake animation on the image
  function triggerAnimation() {
    // Remove previous animation class if any
    img.classList.remove('shake-animation');
    // Trigger reflow to restart animation
    void img.offsetWidth;
    // Add shake animation class
    img.classList.add('shake-animation');
  }
// Handle button click - toggle theme, save and animate
btn.addEventListener('click', () => {
    const currentTheme = localStorage.getItem(THEME_KEY) || 'blue';
    const newTheme = currentTheme === 'blue' ? 'coral' : 'blue';
    // Apply new theme
    applyTheme(newTheme);
    // Save preference
    localStorage.setItem(THEME_KEY, newTheme);
    // Trigger animation
    triggerAnimation();
    // Smoothly fade the button text as well (optional)
    btn.classList.add('fade-text');
    setTimeout(() => btn.classList.remove('fade-text'), 1000);
  });
  // On load
  loadPreference();
})();
