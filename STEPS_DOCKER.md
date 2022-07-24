## Docker and Docker-Compose

### 1. Install docker and docker-compose

### 2. Create Dockerfile

### 3. Build docker image
```
docker build -t rentx .
```

### 4. Run docker image
```
docker run -p 3333:3333 rentx
```

### 5. Access docker container
```
docker ps

docker exec -it <container_name> /bin/bash
```

### 6. Check logs
```
docker logs rentx -f
```