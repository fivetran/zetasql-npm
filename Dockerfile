FROM node:19
ARG package_name

ADD . /build
WORKDIR /build

RUN uname -a \
  && npm ci \
  && cd ${package_name} \
  && ls -la lib/zetasql \
  && ./e2e.sh
