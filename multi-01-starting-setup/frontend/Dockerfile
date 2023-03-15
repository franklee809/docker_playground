FROM node:19-bullseye

WORKDIR /www/html/app

COPY package.json /

RUN npm update

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
