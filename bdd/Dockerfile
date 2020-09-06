FROM mongo:4.2.7

WORKDIR /usr/share/immo_files

COPY ./dump ./
COPY ./mongorestore.sh /docker-entrypoint-initdb.d/
