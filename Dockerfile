FROM node:lts-alpine3.15

RUN apk update && apk upgrade
RUN apk add git

RUN yarn global add yo generator-norgate-av
RUN chown -R node:node /usr/local/lib/node_modules

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

RUN chown -R node:node /usr/src/app
USER node
ENTRYPOINT [ "yo", "norgate-av" ]
