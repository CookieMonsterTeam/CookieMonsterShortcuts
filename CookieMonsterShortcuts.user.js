// ==UserScript==
// @name Cookie Monster Shortcuts
// @include /https?://orteil.dashnet.org/cookieclicker/
// ==/UserScript==

const readyCheck = setInterval(() => {
  const Game = unsafeWindow.Game;

  if (typeof Game !== 'undefined' && typeof Game.ready !== 'undefined' && Game.ready) {
    Game.LoadMod(
      'https://cookiemonsterteam.github.io/CookieMonsterShortcuts/dist/cookieMonsterShortcuts.js',
    );
    clearInterval(readyCheck);
  }
}, 1000);
