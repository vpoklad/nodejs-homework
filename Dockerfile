FROM node:16

WORKDIR /usr/src/

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 7000

CMD ["node", "./bin/server.js"]