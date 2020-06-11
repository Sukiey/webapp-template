FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN ls -l

RUN npm install --registry=https://registry.npm.taobao.org && npm run build

EXPOSE 3000

CMD node build/server.js
