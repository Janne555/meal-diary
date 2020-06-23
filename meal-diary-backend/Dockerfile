FROM node:12

RUN npm install --global typescript

WORKDIR /app

ADD ["package.json", "package-lock.json", "/app/"]

RUN npm install

ADD . /app

CMD "npm" "run" "start:prod"