# TypeORM with PostgreSQL

## 1. Installing
```
yarn add typeorm reflect-metadata pg
```

## 2. Add in tsconfig.json
```json
    {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
```

## 3. Create ormconfig.json file

## 5. Create a typeorm script into package.json

## 6. Create a migration
```
yarn typeorm migration:create -n <MigrationName>
```

## 7. Run migrations (db must be initialized)
```
yarn typeorm migration:run
```
To undo:
```
yarn typeorm migration:revert
```
