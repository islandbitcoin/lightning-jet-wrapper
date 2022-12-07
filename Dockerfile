FROM python:3.9-alpine

# arm64 or amd64
ARG PLATFORM
# aarch64 or x86_64
ARG ARCH

RUN apk update && apk add --no-cache --virtual build-dependencies \
  procps make gcc g++ curl wget bash sudo nodejs npm

RUN wget https://github.com/mikefarah/yq/releases/download/v4.6.3/yq_linux_${PLATFORM}.tar.gz -O - |\
  tar xz && mv yq_linux_${PLATFORM} /usr/bin/yq

WORKDIR /app/
COPY lightning-jet/ /app/

RUN npm install --build-from-source --python=$(which python3)

ENV PATH="/app:${PATH}"

ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
RUN chmod a+x /usr/local/bin/docker_entrypoint.sh
