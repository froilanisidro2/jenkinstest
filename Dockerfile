FROM node:18-alpine

WORKDIR /app

USER root

COPY package*.json ./

RUN npm install

USER node

COPY . /app

EXPOSE 3002

CMD [ "node","server.js" ]
