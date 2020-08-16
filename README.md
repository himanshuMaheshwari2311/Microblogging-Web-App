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
*Install uvicorn through pip if you haven't and ensure that it is on your system path*

To start go to the backend directory and run:
```
uvicorn main:app --reload
```
**main** is the name of the py file which has the fastAPI instance  
**app** is the name of fastapi object  
**--reload** option enables hot reload

And that's it! 🤨

## Frontend scaffold
Using react with typescript along with material-UI design. React functional components makes life a lot easy and material-UI's comprehensive docs makes it even more fun and fast to develop  
If you want to scaffold your react project use the following command *(Make sure you have create-react-app npm package installed)*
```
npx create-react-app frontend --template typescript
```
Add in @material-ui/core node module to project and you are good to go!

Still iterating over the design... 🙄

## Frontend design
The UI will have a simple side nav bar which will have all the category type of the microblogs which I'll be putting up 😁. Header will also have a search bar along with the project title **"Microblog"**. For the search mongodb will not be feasible if I want to scale, thinking of switching to elastic search or solr. Mid section of the page will contain a post section, where I will be typing all my random thoughts and opinion about the categories that I create. Still need to decide what I'll be putting up on the right side

React components and hooks makes life a lot easy. I am following a functional development style to build this project and so far it has made the development easy to maintain and debug 😇

## Containerizing the application
For quick docker setup I am using `tiangolo/uvicorn-gunicorn-fastapi:python3.7` as base docker image (This is a really big docker image 907 MB, will comeup with a alpine docker image for my application)  
Bundling the entire application into one container for now, will split up the components later. Dockerfile is pretty simple I use the base python image, install node on it and copy my application source to it.

*PS: I have harcoded the value for the url in the frontend app, replace it with docker-machine ip (if using vm) or localhost. Will make it configurable via the dokcer build later (a todo). Also you will need to have mongodb instance already running and a correct url for it*

To build the image run:
```
docker build -t microblog .
```
To start the container run:
```
docker run --name microblog -p 80:80 -p 8000:8000 microblog
```
Voila you have the entire microblog containerzied and running. You can now ship it to any platform of your choice 😀

## Searching a mongodb store
Monogo db is not meant to act as a search engine, but with proper caliberation and using indexes properly we can get a efficient results for moderate sized web applicatoin with over a million plus records. This is a really good article on mongodb indexing https://studio3t.com/knowledge-base/articles/mongodb-index-strategy/. Give it a read. 
Took a really long break from putting any new features to this. Will complete this feature soon!

## Stay tuned for more .. 😀
