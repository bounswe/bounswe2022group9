## How to install and run the backend part:

### Assuming you have installed docker, docker-compose and downloaded the repository already

1- change your directory to `<REPOSITORY>\art-community-platform\backend`

2- create a .env file and copy the contents of .env.sample

You should be able to run the project now. To do so, use:

```
docker-compose -f docker-compose-deploy.yml build
docker-compose -f docker-compose-deploy.yml up -d
```

To terminate the app, use:

```
docker-compose -f docker-compose-deploy.yml down
```

Lastly, you can check whether your app is working or not you can go 127.0.0.1/admin
