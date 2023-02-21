FROM node:19-alpine3.16

WORKDIR /app

COPY package.json package.json

RUN npm install

# can ignore this step during development
COPY . /app/.

ARG DEFAULT_PORT=80

# VOLUME [ "/app/node_modules" ]

# VOLUME [ "/app/temp" ]

ENV APP_PORT ${DEFAULT_PORT}

ENTRYPOINT [ "npm", "start" ]

EXPOSE $APP_PORT
