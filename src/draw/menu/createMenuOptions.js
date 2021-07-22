import { menuFunctions as mF } from '@cookiemonsterteam/cookiemonsterframework';
import optionHeaderDisplayNames from '../../data/sectionHeaders';
import settings from '../../data/settings';
/**
 * Creates the <div> to be added to the Options section
 * @returns {object} menuDiv	Object of the <div> of Cookie Monster in options tab
 */
export default function createMenuOptions() {
  const menuDiv = mF.createModMenuSection(
    'cookieMonsterShortcuts',
    'Cookie Monster Shortcuts',
    'optionsMenu',
  );

  if (Game.mods.cookieMonsterFramework.saveData.cookieMonsterShortcuts.headers.optionsMenu) {
    Object.keys(optionHeaderDisplayNames).forEach((group) => {
      if (group === 'favourite') {
        if (
          Game.mods.cookieMonsterFramework.saveData.cookieMonsterShortcuts.favouriteSettings
            .length !== 0 &&
          Game.mods.cookieMonsterFramework.saveData.cookieMonsterShortcuts.settings
            .FavouriteSettings > 0
        ) {
          menuDiv.appendChild(
            mF.listings.createOptionsSubHeader(
              'cookieMonsterShortcuts',
              group,
              optionHeaderDisplayNames[group],
            ),
          );
          if (Game.mods.cookieMonsterFramework.saveData.cookieMonsterShortcuts.headers[group])
            for (
              let index = 0;
              index <
              Game.mods.cookieMonsterFramework.saveData.cookieMonsterShortcuts.favouriteSettings
                .length;
              index++
            ) {
              menuDiv.appendChild(
                mF.listings.createOptionsListing(
                  'cookieMonsterShortcuts',
                  Game.mods.cookieMonsterFramework.saveData.cookieMonsterShortcuts
                    .favouriteSettings[index],
                  settings,
                  () => {},
                  () => {},
                ),
              );
            }
        }
      } else {
        menuDiv.appendChild(
          mF.listings.createOptionsSubHeader(
            'cookieMonsterShortcuts',
            group,
            optionHeaderDisplayNames[group],
          ),
        );
        if (Game.mods.cookieMonsterFramework.saveData.cookieMonsterShortcuts.headers[group]) {
          Object.keys(settings).forEach((option) => {
            if (settings[option].group === group)
              menuDiv.appendChild(
                mF.listings.createOptionsListing(
                  'cookieMonsterShortcuts',
                  option,
                  settings,
                  () => {},
                  () => {},
                ),
              );
          });
        }
      }
    });
  }
  return menuDiv;
}
