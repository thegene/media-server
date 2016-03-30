FROM node
MAINTAINER Eugene Westbrook

# Bring the app over and run npm install
RUN mkdir /app
COPY server.js /app
COPY package.json /app
WORKDIR /app
RUN npm install

# handles zombie process etc.
RUN wget -O dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.0.1/dumb-init_1.0.1_amd64
RUN chmod +x dumb-init

# set app up to use
RUN mkdir /data
RUN useradd media
RUN chown -R media:media /data
VOLUME /data
USER media
ENV MEDIA_DIRECTORY=/data

CMD ["./dumb-init", "node", "server.js"]
