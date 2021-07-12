FROM node:14.15.4-alpine3.12

WORKDIR /javascript/front

RUN npm install yarn

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3001
CMD [ "yarn", "start" ]