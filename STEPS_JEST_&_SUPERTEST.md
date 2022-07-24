## Jest

### 1. Install jest and ts-jest
```
yarn add jest @types/jest ts-jest -D
```

### 2. Init
```
yarn jest --init
```

### 3. Enable in jest.config.ts
```js
{
    import { pathsToModuleNameMapper } from 'ts-jest/utils';
    import { compilerOptions } from './tsconfig.json';

    bail: true,
    preset: 'ts-jest',
    testMatch: ['**/*.spec.ts'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/src',
    }),
}
```

### 4. Run tests
```bash
yarn test
```
detectOpenHandles: run each test sequentially

detectOpenHandles: wait for each test to finish
## Supertest

### 1. Install supertest
```
yarn add supertest @types/supertest -D
```

### 2. Create a new database **rentx_test**
```sql
create database rentx_test;
```

### 3. Set NODE_ENV=test into test script (package.json)

### 4. Run tests
```
docker-compose up -d

yarn test
```