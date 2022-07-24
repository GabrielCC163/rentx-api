# API Documentation with Swagger

1. Install swagger modules:
```
yarn add swagger-ui-express

yarn add @types/swagger-ui-express -D
```

2. Create a swagger.json file

3. Create a api-docs route instanciating swagger
```javascript
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
```