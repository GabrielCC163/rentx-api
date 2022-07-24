# image
FROM node:latest

# create dir inside docker
WORKDIR /usr/app 

# copy package.json
COPY package.json ./

# install dependencies
RUN npm install

# copy everything else to docker
COPY . .

# access port
EXPOSE 3333

# start
CMD ["npm", "run", "dev"]