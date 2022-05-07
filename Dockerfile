ARG LINUX=ubuntu:22.10
ARG LOOM=19-loom+6-625
FROM $LINUX

RUN apt-get -qq update
RUN apt-get -qq -y install curl
ENV LOOM_URL='https://download.java.net/java/early_access/loom/6/openjdk-'$LOOM'_linux-x64_bin.tar.gz'
RUN curl $LOOM_URL --output openjdk-19.tar.gz
RUN tar -xvzf openjdk-19.tar.gz