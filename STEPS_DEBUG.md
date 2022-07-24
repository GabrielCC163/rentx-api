## DEBUG on VSCode

### 1. Click on the Run and Debug button.

### 2. Create a launch.json file with the following settings:
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
        }
    ]
}
```

### 3. Add --inspect in "dev" script into package.json

### 4. Start the API with yarn dev and click on Start Debugging