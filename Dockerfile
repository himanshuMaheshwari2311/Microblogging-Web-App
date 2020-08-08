FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_12.x  | bash -
RUN apt-get -y install nodejs
RUN node --version

COPY ./backend ./backend
RUN pip install motor

COPY ./frontend ./frontend
WORKDIR ./frontend
RUN npm ci
RUN npm run build

WORKDIR ../
EXPOSE 80
EXPOSE 8000

COPY ./entrypoint.sh ./entrypoint.sh
CMD ./entrypoint.sh