FROM node:18-alpine as base

WORKDIR /base

RUN apk add gettext

COPY ./package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn compile
###

FROM node:18-alpine as code

WORKDIR /app

COPY yarn.lock ./
COPY --from=base /base/dist /base/package.json /base/.env ./
COPY --from=base /base/prisma ./prisma

RUN yarn install --production

RUN yarn prisma generate 

CMD [ "yarn","start" ]