import init from './init';
import load from './load';
import save from './save';

/** The mod object to be registered with the Modding API */
const cookieMonsterShortcuts = {
  init,
  load,
  save,
};

Game.registerMod('cookieMonsterShortcuts', cookieMonsterShortcuts);

// Game.registerMod also calls CM.load() which calls the loop hook
// Thus initialization is only finished after registerMod() has finished
window.cookieMonsterFrameworkData.isInitializing = false;
