## CI / CD with Github Actions

### 1. Create another pair of ssh keys
```bash
# Name it rentx_github_actions
cd ~/.ssh

ssh-keygen

# Then copy rentx_github_actions.pub content:
cat rentx_github_actions.pub
```

### 2. Connect with EC2 instance (ssh), then:
```bash
cd .ssh/

cat >> authorized_keys
# Then paste the rentx_github_actions.pub key and press Ctrl + D and Exit.
```

### 3. Back in ~/.ssh, copy the content of rentx_github_actions, then:
Go to the project repository > Settings > Secrets (actions) > new repository secret.

Keys:
* Name: SSH_KEY
* Value: paste the rentx_github_actions content

Tip: for the following two keys, connect in the instance with SSH and the user and IP will be displayed.
* Name: SSH_HOST
* Value: EC2 instance public IP (eg: 11.22.333.444)
* Name: SSH_USER
* Value: EC2 user

* Name: SSH_PORT
* Value: 22

### 4. Open the github repo and go to Actions. Then click on "set up a workflow yourself", create the main.yml then commit.

### 5. See the running action.


### 6. [EC2] Install reverse proxy (nginx)
```
sudo apt install nginx
```

### [AWS > EC2] Check the instance security group and then edit the entry rules:
Add the following entries:
Type: HTTP
Origin: Any

Type: HTTPS
Origin: Any


### 7. [EC2] Setup nginx:
```
cd /etc/nginx/sites-available
touch rentx
sudo vim rentx
```
paste:
```
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    location / {
        proxy_pass http://localhost:3333;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
Ctrl + c > :wq!

```
cd ../sites-enabled
ls -la
sudo ln -s /etc/nginx/sites-available/rentx rentx
sudo rm -rf default
cd ../sites-available
sudo rm -rf default

sudo service nginx restart

Test
# cd ~/app/rentx-api
# node dist/shared/infra/http/server.js
# Ctrl + c
```

### [EC2] Install PM2
```
sudo yarn global add pm2

pm2 start dist/shared/infra/http/server.js 
--name rentx_api
```

Access the EC2 Instance IP in the browser

To stop: pm2 stop rentx_api

To start again: pm2 start rentx_api

### [EC2] Run migrations
~/app/rentx-api
```
./node_modules/.bin/typeorm migration:run
```

### Domain
1. [AWS] Route 53 > Zonas hospedadas > Criar zona hospedada > Colocar domínio comprado (pública)
2. Criar registro > Nome: rentx > Tipo: A, Valor: IP da instância
3. [Plataforma de compra do Domínio] Cria o registro DNS igual ao anterior.
4. Check into whatsmydns.net
5.0. Setup HTTPS config
5.1. [Certbot] My HTTP website is running > Nginx > Ubuntu 20.04 > follow the steps to install certbot;
5.2. sudo certbot --nginx > email > y > y > domain (rentx.<domain...>)
5.3. sudo certbot renew --dry-run
6. Check into /etc/nginx/sites-available/rentx
7. sudo service nginx restart
8. Test requests in insomnia and access the domain via browser.

### Cors
```
yarn add cors

yarn add @types/cors -D
```
add cors into app.ts