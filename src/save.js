import { versionMajor, versionMinor } from './data/modInfo';

/**
 * This creates a save function to the CM Shortcuts object. Per Game code/comments:
 * "use this to store persistent data associated with your mod
 * return 'a string to be saved';"
 * @returns {string}    The data to be saved
 */
export default function save() {
  const saveObject = Game.mods.cookieMonsterFramework.saveData.cookieMonsterShortcuts;
  saveObject.version = `${versionMajor}.${versionMinor}`;
  return JSON.stringify(saveObject);
}
