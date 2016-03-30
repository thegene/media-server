# Photo Server

## Description
A simple media server primarily for dev work.

## Usage

### Running locally with node
First, of course run `npm install` to install the various dependencies, `npm install --production` without dev dependencies.

By default, the media server uses the local `media` directory as its media directory. Copy or symlink your files there, and run `node server` and you have your server!

Alternately you may specify MEDIA_DIRECTORY as an environment variable `MEDIA_DIRECTORY=/data/media node server` and the app will use that directory as your media source.

### Running as a Docker container
This app is available as a docker container. All you need to do to run it is pull it down, and run it specifying a volume to mount to /data: `docker run -v /path/to/static/dir:/data -d -p 3000:3000 thegene/media`
