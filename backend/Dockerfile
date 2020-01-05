FROM node:latest

RUN mkdir -p /app/backend
WORKDIR /app/backend

COPY package.json /app/backend
COPY package-lock.json /app/backend

RUN npm install
RUN npm install -g nodemon

COPY . /app/backend

CMD ["npm", "run", "start"]
