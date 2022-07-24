# Handling errors

### 1. Create the folder src/errors and the AppError.ts inside it:
```js
export class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
```

### 2. Change every throw new Error to throw new AppError.

### 3. Create a middleware inside server.ts:
```js
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
);
```

### 4. Install express-async-errors and import it inside server.ts:
```js
import 'express-async-errors';
```