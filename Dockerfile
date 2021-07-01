FROM node:12

WORKDIR /app
COPY . /app

CMD [ "node", "test.js" ]