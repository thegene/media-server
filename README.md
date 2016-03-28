# Photo Server

## Description
A simple media server primarily for dev work.

## Usage
First, of course run `npm install` to install the various dependencies, `npm install --production` without dev dependencies.

By default, the media server uses the local `media` directory as its media directory. Copy or symlink your files there, and run `node server` and you have your server!

Alternately you may specify MEDIA_DIRECTORY as an environment variable `MEDIA_DIRECTORY=/data/media node server` and the app will use that directory as your media source.
