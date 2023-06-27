# React Native Base Project

<!-- TOC -->

- [React Native Base Project](#react-native-base-project)
  - [:arrow\_forward: Usage](#arrow_forward-usage)
  - [:star: Features](#star-features)
  - [:open\_file\_folder: Project Structure](#open_file_folder-project-structure)
  - [:arrows\_clockwise: Config `Theming`.](#arrows_clockwise-config-theming)
  - [:arrows\_clockwise: Testing](#arrows_clockwise-testing)
  - [:rocket: Config `CodePush`.](#rocket-config-codepush)
  - [:arrow\_up: Config `fastlane`.](#arrow_up-config-fastlane)
  - [:round\_pushpin: Networking](#round_pushpin-networking)
    - [RTK Query](#rtk-query)
  - [:bookmark: License](#bookmark-license)

## :arrow_forward: Usage

    npx react-native init rnBoilerplate --template https://github.com/quannh287/rn-boilerplate.git

## :star: Features

- Typescript
- Key/value storage: [React Native MMKV](https://github.com/mrousavy/react-native-mmkv)
- Translations
- State management: Redux toolkit
  - RTK query
  - persist storage with react-native-mmkv
- Theming

## :open_file_folder: Project Structure

- `android`, `ios`. Contains all native android, ios files.
- `appicon`, `splash`. Contains app icon, splash image.
- `.env.*` files. Environment variables files.
- `.prettierrc.js`, `.eslintrc.js`. Includes eslint and prettier configs, can change project linter from these files.

## :arrows_clockwise: Config `Theming`.
**I'm using `PlatformColor` and `@klarna/platform-colors`. It will be generate colors for both light and dark mode in native side.**

- Modify colors in file `platform-colors.config.js`
- Run `yarn generate:colors`

```javascript
module.exports = {
  colors: {
    background: {
      light: '#ffffff',
      dark: '#4287f5',
    },
    text: {
      light: '#4287f5',
      dark: '#ffffff',
    },
  },
  ios: {
    outputDirectory: 'ios/baseProject/Images.xcassets/',
  },
  android: {
    outputDirectory: 'android/app/src/main/res/',
  },
  javascript: {
    typescript: true,
    outputDirectory: 'src/theme/colors/',
  },
}
```

## :arrows_clockwise: Testing
> *Write tests. Not too many. Mostly integration.*

## :rocket: Config `CodePush`.

## :arrow_up: Config `fastlane`.

## :round_pushpin: Networking

### [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

## :bookmark: License
