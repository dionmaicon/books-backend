FROM node:12.14.0-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install && npm install -g nodemon

COPY . /app

CMD ["npm", "run", "start"]
