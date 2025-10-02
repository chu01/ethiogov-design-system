// src/components/button/button.js

export function initButtons() {
    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', () => {
        console.log('Button clicked:', button.textContent);
      });
    });
  }
  