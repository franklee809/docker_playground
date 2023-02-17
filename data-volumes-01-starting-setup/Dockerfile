FROM node:19-alpine3.16

WORKDIR /app

COPY package.json package.json

RUN npm install

# can ignore this step during development
COPY . /app/.

# VOLUME [ "/app/node_modules" ]

# VOLUME [ "/app/temp" ]

ENTRYPOINT [ "npm", "start" ]

EXPOSE 80
