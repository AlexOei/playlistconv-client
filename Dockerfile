FROM node:12.19.0-alpine

RUN mkdir -p /client
WORKDIR /client

COPY package.json /client
COPY package-lock.json /client

RUN npm install

COPY . /client

CMD ["npm","run", "build"]

