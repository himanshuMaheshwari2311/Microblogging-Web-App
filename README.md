# Microblogging-Web-App
Small Micro blogging web app for my personal blogging


# Fast api setup
Make sure uvicorn is on your env path

# Setting up mongodb docker image
Follow the steps:
```
docker volume create --name=mongodata
```
```
docker run --name mongodb -v mongodata:/data/db -d -p 27017-27019:27017-27019 mongo
```
```
docker exec -it mongodb bash
```
```
mongo
```
```
show dbs
```
```
use microblogging
```
run 
```
docker-machine ip default
```
mongodb url: mongodb://<docker-machine-ip-address>:27017

