FROM node:12

RUN npm install --global typescript

WORKDIR /app

ADD ["package.json", "package-lock.json", "/app/"]

RUN npm install

ADD . /app

RUN tsc

CMD "npm" "run" "start:prod"