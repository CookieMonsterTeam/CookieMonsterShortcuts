import determineKeyPress from '../shortcuts/determineKeyPress';

/** Initializes the shortcuts that form the core of CM Shortcuts */
export default function initShortcuts() {
  window.addEventListener('keyup', (e) => {
    determineKeyPress(e);
  });
}
