import { saveAndLoadingFunctions } from '@cookiemonsterteam/cookiemonsterframework/src/index';
import headers from './data/headers';
import settings from './data/settings';
import logicLoop from './logic/logicLoop';

/**
 * This creates a load function to the CM Shortcuts object. Per Game code/comments:
 * "do stuff with the string data you saved previously"
 * @param   {string}    JSON string of save-data
 */
export default function load(str) {
  saveAndLoadingFunctions.loadMod('cookieMonsterShortcuts', str, settings, headers, logicLoop);
}
