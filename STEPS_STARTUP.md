## Initial setup with TypeScript
1. yarn init -y
2. yarn add express
3. yarn add @types/express typescript ts-node-dev tsconfig-paths -D
4. yarn tsc --init
5. Set "outDir": "./dist" into tsconfig.json
6. Set dev script into package.json
7. Disable strict into tsconfig.json
8. Enable resolveJsonModule into tsconfig.json
9. Set baseUrl and paths into tsconfig.json
```json
{
    "baseUrl": "./src",
    "paths": {
      "@modules/*": [
        "modules/*"
      ],
      "@config/*": [
        "config/*"
      ],
      "@shared/*": [
        "shared/*"
      ],
      "@errors/*": [
        "errors/*"
      ],
      "@utils/*": [
        "utils/*"
      ]
    },
}
```

## Module structure
```
src/modules/<module_name>/
```
```
- dtos/
    <DTOInterfaceName>.ts // format: IDtoNameDTO.ts

- infra/
    typeorm/
      entities/
        <EntityName>.ts
      repositories/
        <RepositoryImplementationName>.ts // ends with Repository.ts

- repositories/
    in-memory/
      <RepositoryImplementationInMemoryName> // ends with RepositoryInMemory.ts
    <RepositoryInterfaceName>.ts // format: INameRepository.ts

- useCases/
    <useCaseName>/
      <ControllerName>.ts
      <UseCaseName>.ts
      <TestName>.ts
```