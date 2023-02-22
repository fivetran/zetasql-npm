FROM node:current

ADD . /build
WORKDIR /build

RUN uname -a \
  && ls ./lib/zetasql \
  && npm ci \
  && npm run build:all \
  && ls -la lib/zetasql \
  && ./e2e.sh
