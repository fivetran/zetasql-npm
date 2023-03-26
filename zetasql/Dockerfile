FROM node:current

ADD . /build
WORKDIR /build

RUN uname -a \
  && npm install --prefix .. \
  && npm run build:all \
  && ls -la lib/zetasql \
  && ./e2e.sh
