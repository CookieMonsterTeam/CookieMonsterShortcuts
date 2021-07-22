import { menuFunctions } from '@cookiemonsterteam/cookiemonsterframework';
import { latestReleaseNotes, modDescription } from '../../data/modInfo';

/**
 * Creates the <div> to be added to the Info section
 * @returns {object} menuDiv	Object of the <div> of Cookie Monster in info tab
 */
export default function createMenuInfo() {
  const menuDiv = menuFunctions.createModMenuSection(
    'cookieMonsterShortcuts',
    'Cookie Monster Shortcuts',
    'infoMenu',
  );

  if (Game.mods.cookieMonsterFramework.saveData.cookieMonsterShortcuts.headers.infoMenu) {
    menuDiv.appendChild(menuFunctions.listings.createInfoListing(modDescription));
    menuDiv.appendChild(menuFunctions.listings.createInfoListing(latestReleaseNotes));
  }

  return menuDiv;
}
