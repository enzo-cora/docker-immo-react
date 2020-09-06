FROM nginx:1.18
WORKDIR /etc/nginx/conf.d
RUN rm default.conf
COPY conf.d/ .
COPY html /var/www/html

