FROM node:19-alpine3.16

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . /app/.

ENTRYPOINT [ "node", "server.js" ]

EXPOSE 80
