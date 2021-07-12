FROM node:14.15.4-alpine3.12

WORKDIR /javascript/backend

RUN yarn add @nestjs/cli@7.6.0

COPY package.json .

RUN yarn

COPY . .

CMD [ "tail", "-f", "/dev/null" ]