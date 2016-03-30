FROM node
MAINTAINER Eugene Westbrook

# handles zombie process etc.
# see also: https://github.com/phusion/baseimage-docker
# RUN sudo apt-get install dumb-init

# Bring the app over and run npm install
RUN mkdir /app
COPY server.js /app
COPY package.json /app
WORKDIR /app
RUN npm install

# set app up to use
RUN mkdir /data
RUN useradd media
RUN chown -R media:media /data
VOLUME /data
USER media

ENV MEDIA_DIRECTORY=/data
CMD ["node", "server.js"]
