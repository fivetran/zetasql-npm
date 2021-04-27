FROM ubuntu:18.04 AS linux-builder
ENV DEBIAN_FRONTEND=noninteractive
ENV BAZEL_VERSION 3.7.2
WORKDIR /zetasql
RUN apt-get update \
  && apt-get install -y curl gnupg \
  && echo "deb [arch=amd64] http://storage.googleapis.com/bazel-apt stable jdk1.8" | tee /etc/apt/sources.list.d/bazel.list \
  && curl https://bazel.build/bazel-release.pub.gpg | apt-key add - \
  && apt-get update \
  && apt-get install -y \
    bazel-$BAZEL_VERSION \
    g++ \
    git \
    make \
    openjdk-8-jdk-headless \
    python \
    python3-distutils \
    tzdata \
  && apt-get autoremove -y \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/*
RUN git clone https://github.com/pgrivachev/zetasql.git . \
  && git checkout dbecdf3e8e5fa3ce96c3b5d066aa252ab74adaed \
  && bazel-$BAZEL_VERSION build ...
COPY ./combine_protos.sh .
RUN chmod +x combine_protos.sh && ./combine_protos.sh

FROM ubuntu:18.04
WORKDIR /zetasql-npm
COPY . .
COPY --from=linux-builder /zetasql/bazel-bin/zetasql/local_service/libremote_server.so ./zetasql/linux-x86-64/
COPY --from=linux-builder /zetasql/protos ./protos
RUN apt-get update \
  && apt-get install -y curl g++ make \
  && curl -fsSL https://deb.nodesource.com/setup_15.x | bash - \
  && apt-get install -y nodejs \
  && npm install
RUN npm run build:all
