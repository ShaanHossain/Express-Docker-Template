FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

EXPOSE 8000
CMD [ "yarn", "serve" ]