// Variables
// Variables
const html = document.documentElement;

// Function

// Events
document.addEventListener('DOMContentLoaded', () => {

  // eslint-disable-next-line
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return html.classList.add('touch');
  }

  return html.classList.add('no-touch');
})
