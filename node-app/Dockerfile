FROM node:19-alpine3.16

WORKDIR /app

# use to prevent npm install cache invalidate during image build process
COPY package.json /app/package.json

RUN npm install

COPY . /app

EXPOSE 80

CMD ["node", "server.js"]