# Cookie Monster Shortcuts

**Cookie Monster Shortcuts** adds various shortcuts to Cookie Clicker. Currently the range of shortcuts is limited but we welcome new shortcut requests!

## Current version

The `master` branch hosts the latest production version intended for general users.
All development and pull requests should target the `dev` branch.
Github Pages is hosted from the `gh-pages` branch

## Using

### Bookmarklet

Copy this code and save it as a bookmark. Paste it in the URL section. To activate, click the bookmark when the game's open.

```javascript
javascript: (function () {
  Game.LoadMod('https://cookiemonsterteam.github.io/CookieMonsterShortcuts/dist/cookieMonsterShortcuts.js');
}());
```

If (for some reason) the above doesn't work, trying pasting everything after the <code>javascript:</code> bit into your browser's console.

### Userscript

If you'd rather use the addon as a [userscript](https://en.wikipedia.org/wiki/Userscript) to automatically load _Cookie Monster_ every time the original game loads, install the `CookieMonsterShortcuts.user.js` file. You can do this by clicking on the file in the file-list and clicking "raw".

## Bugs and suggestions

Any bug or suggestion should be **opened as an issue** [in the repository](https://github.com/CookieMonsterTeam/CookieMonsterShortcuts/issues) for easier tracking. This allows us to close issues once they're fixed.

Before submitting a bug, make sure to give a shot at the latest version of the addon on the `dev` branch. This version can be tested by copying the `cookieMonsterShortcutsDev.js` file of the dev branch into your console. You can also load the dev-version by using `https://cookiemonsterteam.github.io/CookieMonster/dist/cookieMonsterShortcutsDev.js` to load the mod. If the bug is still here, you can submit an issue for it. Please do so by using the bug report template.

All suggestions are welcome, even the smallest ones.

## Contributing

To contribute you can fork and clone the repository and run `npm install`. Note that you will need to authenticate to the GitHub Package Registery (see [this documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages)). After creating a Public Access Token you should export this variable to $GITHUB_REGISTERY_PAT as defined in `.npmrc`.

Please also remember to run `npm run build-dev` after saving all your changes to build the final `cookieMonsterShortcutsDev.js` file.

Before pushing a new version to `main` and Github pages use the `build-final` command to build the final file.

## Contributors

* **[DanielNoord](https://github.com/DanielNoord)**: Original author
