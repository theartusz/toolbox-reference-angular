FROM nginx:1.13.6-alpine

COPY dist /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
