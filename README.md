# Firebase My Messages App

## set up

- `npm init` creates our `package.json`
- `npm install parcel-bundler`
- `npm install --save firebase`
- `npm install bootstrap jquery popper.js`
- in the `package.json` add a script `start": "parcel index.html"`
- install the linter: `npm install eslint --save-dev`
- NOTE: configuring the linter works better in the vs code terminal...best to `code .` at this point
- configure the linter: `./node_modules/.bin/eslint --init`
  - Run thru the linter options:
    - How would you like to use ESLINT? Select `The check syntax, find problems, and enforce code style`
    - What type of modules does your project use? Select `JavaScript modules (import/export)`
    - Which framework does your project use? Select `None of these`
    - Does your project use TypeScript? `N`
    - Where does your code run? Select `Browser`
    - How would you like to defina a style guide for your project? Select `Answer questions about your style`
    - What format do you want your config file to be in? Select `JSON`
    - What type of indentation do you use? Select either option, I prefer `Spaces`
    - What quotes do you use for strings? Select either option, I prefer `Single`
    - What line endings do you use? Select either option, I prefer `Windows`
    - Do you require semicolons? Strongly prefer `Y`
- to run the server from terminal: `npm start`

### create a config file for Firebase credentials

- copy config code once database is set up and bring into your project..from your settings wheel

### vs-code settings

```
{
  "eslint.run": "onSave",
  "eslint.autoFixOnSave": true
}
```

## Set up deployment

The best place to perform these actions is in the terminal in VS Code

- `npm install firebase-tools -g`
- `firebase login` to make sure you are logged into your firebase console
- `firebase init hosting`
  - Are you ready to proceed? `Y`
- Please select an option:
  - `Use an existing project` ...select the project to match wiring from the list
- What do you want to use as your public directory? `dist` ... the dist directory has everything bundled from parcel for shipping and we will use that for our deployment
- File `dist/index.html` already exists...overwrite? `N`
  It will say Firebase initialization complete

You can run `firebase serve` to test out the application and then to deploy run `firebase deploy` ...this will give you a hosting url that is now live.
