# Microblogging-Web-App
Building this small micro-blogging app to try **fastapi**. **fastapi** going to be a superfast backend server probably going to implment reactive streams for realtime data streaming. My datastore will be **mongodb** container as there is some level of support (need to read more on it) to read data in a reactive fashion suitable for a micro-blogging app. Front end will be created in **react** (going to go with functional component, because why not). And this part would have been on the micro-blog instead of this readme 😛

## Fast api setup
Going to skip this for now but will upload a good requirements.txt file or will try to manage dependencies via **poetry**

## Setting up mongodb docker image and database
Follow the steps to get mongodb up and running in you local dev environment:

*PS: If you are working on windows 10 home I'd recommend using DockerTool box. This can get your docker env setup easy on windows 10 home*

1. Create a volume for the docker container for mongodb to store data/logs:
```
docker volume create --name=mongodata
```
2. Run the following command it will fetch mongodb latest image if you don't have it already pulled
```
docker run --name mongodb -v mongodata:/data/db -d -p 27017-27019:27017-27019 mongo
```
3. ssh into the bash shell of mongodb container
```
docker exec -it mongodb bash
```
4. Open the mongo shell
```
mongo
```
5. Check databases
```
show dbs
```
6. Select the database to use, if not created this command will create one for you
```
use microblogging
```
7. For windows user using DockerTool Box, to get connection string you will need your dockemachines IP address run:
```
docker-machine ip default
```
Your mongodb url is : ```mongodb://<docker-machine-ip-address>:27017```

## Starting the backend server
Starting the app is pretty simple but you'll need uvicorn which is an asgi (Asynchronous Server Gateway Interface). If you read the code all the async magic is enabled because of this 🙃
*Install uvicorn through pip if you haven't and ensure that it is on your system path so you can run it from any path*

To start go to the backend directory and run:
```
uvicorn main:app --reload
```
main is the name of the py file which has the fastAPI instance
app is the name of our object
--reload option enables hot reload

And that's it! 🤨

## Stay tuned for more .. 😀
