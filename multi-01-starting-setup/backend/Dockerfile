FROM node:19-bullseye

WORKDIR /www/html/app

COPY package.json /

RUN npm install

COPY . .

EXPOSE 80

ENV MONGODB_USERNAME=admin
ENV MONGODB_PASSWORD=12345678

CMD ["npm", "start"]
