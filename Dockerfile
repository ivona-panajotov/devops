FROM node:latest

WORKDIR /Docker

COPY package*.json ./

RUN npm i

COPY /app .

CMD ["npm","start"]