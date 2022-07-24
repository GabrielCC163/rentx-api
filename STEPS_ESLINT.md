
## ESLint

### 1. Install ESLint extension for VSCode

### 2. Set ESLint config
```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

### 3. Install ESLint as a development dependency and initialize it

```
yarn add eslint -D

yarn eslint --init
```
### 4. Answer the questions like below:

* **How would you like to use ESLint?** To check syntax, find problems and enforce code style

* **What type of modules does your project use?** JavaScript modules (import/export)

* **Which framework does your project use?** None of these

* **Does your project use TypeScript?** Yes

* **Where does your code run?** Node

* **How would you like to define a style for your project?** Use a popular style guide

* **Which style guide do you want to follow?** Airbnb

* **What format do you want your config file to be in?** JSON

* ***Would you like to install them now with npm?** No (copy the modules)

### 5. Install required modules (all of them except eslint):
```
yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest
```

### 6. Install plugins for ordering imports and to allow file imports without extension:
```
yarn add -D eslint-plugin-import-helpers eslint-import-resolver-typescript
```

### 7. Create a .eslintignore file with:
```
/*.js
node_modules
dist
```

### 8. .eslintrc.json configuration
* env: 
    ```json
    "es2021": true,
    "node": true,
    "jest": true
    ```

* add to extends:
    ```json
    "plugin:@typescript-eslint/recommended"
    ```

* add to plugins:
    ```json
    "eslint-plugin-import-helpers"
    ```

* rules:
    ```json
    "camelcase": "off",
    "import/no-unresolved": "error",
    "@typescript-eslint/naming-convention": [
        "error",
        {
            "selector": "interface",
            "format": ["PascalCase"],
            "custom": {
            "regex": "^I[A-Z]",
            "match": true
            }
        }
    ],
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "no-console": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "lines-between-class-members": "off",
    "import/extensions": [
        "error",
        "ignorePackages",
        {
            "ts": "never"
        }
    ],
    "import-helpers/order-imports": [
        "warn",
        {
            "newlinesBetween": "always",
            "groups": ["module", "/^@/", ["parent", "sibling", "index"]],
            "alphabetize": { "order": "asc", "ignoreCase": true }
        }
    ],
    "import/no-extraneous-dependencies": [
        "error",
        { "devDependencies": ["**/*.spec.js"] }
    ]
    ```

* settings:
    ```json
    {
        "import/resolver": {
            "typescript": {}
        }
    }
    ```

* Reopen the project folder.