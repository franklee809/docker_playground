FROM node:19-alpine3.16

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . /app/.

# VOLUME [ "/app/node_modules" ]

ENTRYPOINT [ "npm", "start" ]

EXPOSE 80
