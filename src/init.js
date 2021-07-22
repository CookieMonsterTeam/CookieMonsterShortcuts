import { initFunctions } from '@cookiemonsterteam/cookiemonsterframework/src/index';
import { versionMajor, versionMinor } from './data/modInfo';

import createMenuInfo from './draw/menu/createMenuInfo';
import createMenuOptions from './draw/menu/createMenuOptions';
import drawLoop from './draw/drawLoop';
import initShortcuts from './init/initShortcuts';
import load from './load';
import logicLoop from './logic/logicLoop';

/**
 * This creates a init function for the CM Shortcuts object. Per Game code/comments:
 * "this function is called as soon as the mod is registered
 * declare hooks here"
 * It starts the further initialization of CookieMonster Shortcuts and registers hooks
 */
export default function init() {
  let proceed = true;

  initFunctions.initModFramework();
  window.cookieMonsterFrameworkData.isInitializing = true;
  initFunctions.registerMod('cookieMonsterShortcuts');

  if (Game.version !== Number(versionMajor)) {
    // eslint-disable-next-line no-restricted-globals, no-alert
    proceed = confirm(
      `Cookie Monster Shortcuts version ${versionMajor}.${versionMinor} is meant for Game version ${versionMajor}. Loading a different version may cause errors. Do you still want to load Cookie Monster Shortcuts?`,
    );
  }

  if (proceed) {
    // Register listeners in Cookie Monster Mod Framework
    Game.mods.cookieMonsterFramework.listeners.infoMenu.push(createMenuInfo);
    Game.mods.cookieMonsterFramework.listeners.optionsMenu.push(createMenuOptions);

    Game.registerHook('draw', drawLoop);
    Game.registerHook('logic', logicLoop);

    // Initialization of shortcuts
    initShortcuts();

    // Load defaults if there is no previous save
    if (typeof Game.modSaveData.cookieMonsterShortcuts === 'undefined') {
      load('{}');
    }
  }
}
