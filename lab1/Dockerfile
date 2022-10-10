FROM node:lts-alpine3.15 as build-stage

WORKDIR /opt/app

COPY public /opt/app/public
COPY src /opt/app/src
COPY package*.json /opt/app/package.json

RUN npm install
RUN npm run build

FROM nginx
COPY --from=build-stage /opt/app/build/ /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80