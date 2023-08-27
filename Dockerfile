FROM node:alpine AS development
ENV NODE_ENV development

WORKDIR /react-app

COPY ./package.json /react-app
RUN npm install

EXPOSE 3001

RUN npm install

CMD npm start