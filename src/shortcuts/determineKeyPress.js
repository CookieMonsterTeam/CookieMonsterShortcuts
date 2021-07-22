import checkKeycodeConditions from './checkKeycodeConditions';

/** Function determines the key pressed and calls the correct function
 * @param {object} KeyboardEvent  The keyboard event of the pressed key
 */
export default function determineKeyPress(KeyboardEvent) {
  // Stop if a prompt is open
  if (l('promptAnchor').style.display !== '' && l('promptAnchor').style.display !== 'none') {
    return;
  }
  if (!Game.mods.cookieMonsterFramework.saveData.cookieMonsterShortcuts.settings.globalSwitch) {
    return;
  }

  // Determine which shortcut has been pressed
  if (checkKeycodeConditions('openInfo', KeyboardEvent)) {
    Game.ShowMenu('log');
  } else if (checkKeycodeConditions('openOptions', KeyboardEvent)) {
    Game.ShowMenu('prefs');
  } else if (checkKeycodeConditions('openStats', KeyboardEvent)) {
    Game.ShowMenu('stats');
  } else if (checkKeycodeConditions('startLegacy', KeyboardEvent)) {
    PlaySound('snd/tick.mp3');
    Game.Ascend();
  }
}
