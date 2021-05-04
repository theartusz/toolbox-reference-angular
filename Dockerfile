FROM nginx:1.20.0-alpine

COPY ./dist/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
