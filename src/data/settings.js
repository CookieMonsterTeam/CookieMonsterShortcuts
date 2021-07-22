import { settingClasses } from '@cookiemonsterteam/cookiemonsterframework/src/index';

/** This includes all options of the Cookie Monster Shortcuts and their relevant data */
const settings = {
  globalSwitch: new settingClasses.SettingStandard(
    1,
    'bool',
    'general',
    ['Global switch OFF', 'Global switch ON'],
    'Global switch turning all shortcuts off or on',
    true,
  ),

  // Open menu
  openInfo: new settingClasses.SettingKeycode(
    {
      key: 'I',
      altKey: false,
      ctrlKey: false,
      shiftKey: true,
      displayName: 'Shift + I',
    },
    'keycode',
    'openMenu',
    'Open the info menu',
  ),
  openOptions: new settingClasses.SettingKeycode(
    {
      key: 'O',
      altKey: false,
      ctrlKey: false,
      shiftKey: true,
      displayName: 'Shift + O',
    },
    'keycode',
    'openMenu',
    'Open the options menu',
  ),
  openStats: new settingClasses.SettingKeycode(
    {
      key: 'S',
      altKey: false,
      ctrlKey: false,
      shiftKey: true,
      displayName: 'Shift + S',
    },
    'keycode',
    'openMenu',
    'Open the stats menu',
  ),

  // Actions
  startLegacy: new settingClasses.SettingKeycode(
    {
      key: 'L',
      altKey: false,
      ctrlKey: false,
      shiftKey: true,
      displayName: 'Shift + L',
    },
    'keycode',
    'actions',
    'Start a legacy',
  ),
};
export default settings;
