FROM node:current

ADD . /build
WORKDIR /build

RUN uname -a \
  && node -v \
  && ls \
  && pwd \
  && npm ci \
  && npm run build:all \
  && ls -la lib/zetasql \
  && ./e2e.sh
