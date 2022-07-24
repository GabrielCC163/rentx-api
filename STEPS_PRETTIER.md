## Prettier

### 1. Uninstall Prettier extension in VSCode

### 2. Install the following packages to integrate Prettier with ESLint:
```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
``` 

### 3. .eslintrc.json configuration

* add to extends:
    ```json
    "prettier",
    "plugin:prettier/recommended"
    ```

* add to plugins:
    ```json
    "prettier"
    ```

* add to rules:
    ```json
    "prettier/prettier": "error"
    ```

### 4. Create a .prettierrc.json file with:
```json
{
    "singleQuote": true
}
```

### 5. Reopen the project folder