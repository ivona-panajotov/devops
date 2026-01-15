FROM node:iron-slim

WORKDIR /Docker

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm","start"]