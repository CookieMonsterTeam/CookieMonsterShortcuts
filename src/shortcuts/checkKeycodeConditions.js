/** Checks if the conditions of a particular keycode-config have been met
 * @param {string}  configName  Name of the config
 * @param {object} KeyboardEvent  The keyboard event of the pressed key
 */
export default function checkKeycodeConditions(configName, KeyboardEvent) {
  const setting =
    Game.mods.cookieMonsterFramework.saveData.cookieMonsterShortcuts.settings[configName];
  if (
    setting.key === KeyboardEvent.key &&
    setting.altKey === KeyboardEvent.altKey &&
    setting.ctrlKey === KeyboardEvent.ctrlKey &&
    setting.shiftKey === KeyboardEvent.shiftKey
  ) {
    return true;
  }
  return false;
}
