## Setup redis into docker-compose.yml
```
redis:
    image: redis:alpine
    ports:
      - 6379:6379
```

## Install rate-limiter and redis
```
yarn add rate-limiter-flexible
yarn add redis

yarn add @types/redis -D
```

## Create a rateLimiter.ts file and import it into app.ts

## Setup .env
```
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
```