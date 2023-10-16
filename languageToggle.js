// Initialize language based on localStorage or default to 'en'
let currentLanguage = localStorage.getItem('currentLanguage') || 'en';

// Function to set the language on page load
function setLanguageOnLoad() {
  const enElements = document.querySelectorAll('.lang.en');
  const zhElements = document.querySelectorAll('.lang.zh');
  const toggleButtonText = document.querySelector('#language-toggle button');

  if (currentLanguage === 'zh') {
    enElements.forEach(el => el.style.display = 'none');
    zhElements.forEach(el => el.style.display = 'block');
    toggleButtonText.innerText = 'Switch to English';
  } else {
    enElements.forEach(el => el.style.display = 'block');
    zhElements.forEach(el => el.style.display = 'none');
    toggleButtonText.innerText = '换成中文';
  }
}

// Function to toggle language
function toggleLanguage() {
    const enElements = document.querySelectorAll('.lang.en');
    const zhElements = document.querySelectorAll('.lang.zh');
    const toggleButtonText = document.querySelector('#language-toggle button');
  
    if (currentLanguage === 'en') {
      enElements.forEach(el => el.style.display = 'none');
      zhElements.forEach(el => el.style.display = 'block'); // or 'inline-block', or whatever suits your layout
      currentLanguage = 'zh';
      toggleButtonText.innerText = 'Switch to English';
    } else {
      enElements.forEach(el => el.style.display = 'block'); // or 'inline-block', or whatever suits your layout
      zhElements.forEach(el => el.style.display = 'none');
      currentLanguage = 'en';
      toggleButtonText.innerText = '换成中文';
    }
  
    // Save the current language to localStorage
    localStorage.setItem('currentLanguage', currentLanguage);

    // Toggle visibility
    document.querySelectorAll('.lang.en').forEach(el => {
        el.classList.toggle('hidden');
    });
    document.querySelectorAll('.lang.zh').forEach(el => {
        el.classList.toggle('hidden');
    });
  
    // Update the results based on the new language
    if (document.getElementById('results')) {
      showResults();
    }
  }
  
  
  
// Set the language based on localStorage when the page loads
window.onload = function() {
  setLanguageOnLoad();
  // Your existing onload code, if any, can go here
};


// Changes the button's colour when selected
document.addEventListener('DOMContentLoaded', function() {
  const radios = document.querySelectorAll('.question-radio');
  
  radios.forEach(radio => {
    radio.addEventListener('change', function() {
      // Reset background and border color for all options
      document.querySelectorAll('.option').forEach(opt => {
        opt.style.backgroundColor = 'rgb(235, 229, 222)';
        opt.style.borderColor = 'rgb(235, 229, 222)'; // Reset to whatever your default border color is
      });
      
      // Set background and border color for selected option
      if (this.checked) {
        const closestOption = this.closest('.option');
        closestOption.style.backgroundColor = '#95bbe4';
        closestOption.style.borderColor = '#95bbe4'; // Replace with the color you want
      }
    });
  });
});

