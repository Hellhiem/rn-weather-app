# Weather App

## <u>Project description</u>

Project is created with naked React Native CLI

**Weather City List Screen:**

Displays list cities where user can investigate weather. User can search for a city. User is able pull to refresh the list of cities.

**Weather Details Screen:**

User can investigate details of selected city weather.
## <u>Before you start</u>

Remember that if you want to run the project on physical devices you have to change the property (`baseUrl`) of localhost address in `constants` file.

## <u>Install and run the project</u>

1. Install all dependencies:
```sh
 yarn
```

2. Perform bundle install in root `app` folder:
```sh
 bundle install
```

3. Instal iOS pods via bundle:
```sh
 bundle exec pod install
```
4. Start bundler

```sh
yarn start
```

5. Run the app from Xcode and Android Studio or via terminal

## <u>Scripts</u>

```sh
yarn sanity
```

Command will perform all needed tests (TypeScript check, jest and eslint rules) that has to be `green` before pushing the code. (good to add as `pre-commit`/`pre-push` command)

```sh
yarn test
```

Command will run tests and update snapshots if needed.

```sh
yarn lint
```

Command will run lint code check.

```sh
yarn typescript
```

Command will run TypeScript code check.

```sh
yarn test:e2e
```

Command will run `E2E` tests with `Maestro`. Remember to install maestro first: [Getting Started with Maestro](https://maestro.mobile.dev/getting-started/installing-maestro)


## <u>Naming convention</u>

All variable, function, objects etc. names should be self described. It means that we use whole words/sentences that can describe the code, for example:

```js
const authenticateUser = (email, password, callback) => {
  signIn(email, password);
  callback();
};
```

Instead of:

```js
const authUsr = (em, pass, cb) => {
  signIn(em, pass);
  cb();
};
```

## Imports

Barrel imports (from index file) are also utilised in the project.
Also, thanks to babel `module-resolver` and TypeScript `paths`, we can easily create absolute imports within the project.
Use it at your advantage, for example:

```
import { FullScreenTemplate, StyledText } from '@components';
```

instead of:

```
import { FullScreenTemplate } from '../../components/FullScreenTemplate';
import { StyledText } from '../../components/StyledText';
```

Make sure not to create circular dependencies.

## <u>Project structure</u>

- `src` -> main app folder.
    - - `assets` -> contains all images, fonts, used across the app.
    - - `components` -> contains all reusable components used across the app. Structure example: `component/ComponentName.tsx` for a component and `component/__tests__/ComponentName.test.tsx` for unit tests
    - - `lib` -> contains all the helper functions, configurations, custom hooks, validators that are used across the app.
    - - `screens` -> contain all navigation screens of the app.
    - - `services` -> contain all services that fetch specific data from the API sorted by category.
    - - `types` -> contain all the types used across the app sorted by categories.

All modules are exported in `index.ts` to make the code cleaner and have a single place of import. ex. Every module contained in `types` folder is exported inside one parent `index.ts`.

This `import/export` method is called `Barrel` to read more about it: [Barrel Method Documentation](https://basarat.gitbook.io/typescript/main-1/barrel)

## <u>Localization</u>

Currently app supports english and polish language. Library used for translations is `i18n-next`, `react-i18next` with `react-native-localize` that takes a system language and sets it as default language for the app. If the language is not supported, english is set as default language.
