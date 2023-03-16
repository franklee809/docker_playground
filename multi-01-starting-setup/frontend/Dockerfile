FROM node:19-bullseye

WORKDIR /www/html/app

COPY package.json /

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
