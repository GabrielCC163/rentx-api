## Babel (convert TS to JS) (could use "build": "tsc")

### Install packages
```
yarn add @babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/preset-env babel-plugin-module-resolver babel-plugin-transform-typescript-metadata @babel/preset-typescript -D
```
### Create the babel.config.js file

### Add "build" script into package.json
--copy-files é para copiar para dist todos os outros arquivos que não forem .js e .ts.
```json
{
    "scripts": {
        "build": "babel src --extensions \".js,.ts\" --out-dir dist --copy-files",
    }
}

```
