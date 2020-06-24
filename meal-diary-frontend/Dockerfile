FROM node:12

WORKDIR /app

ADD ["package.json", "package-lock.json", "/app/"]

RUN npm install

ADD . /app

CMD ["npm", "start"]
