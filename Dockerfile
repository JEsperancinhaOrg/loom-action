ARG LINUX=ubuntu:22.10
ARG LOOM=19-loom+6-625
FROM $LINUX
ARG LOOM
RUN apt-get -qq update
RUN apt-get -qq -y install curl
RUN curl https://download.java.net/java/early_access/loom/6/openjdk-${LOOM}_linux-x64_bin.tar.gz --output openjdk-19.tar.gz
RUN tar -xvzf openjdk-19.tar.gz
RUN mv jdk-19 loom-jdk
RUN rm *.tar.gz
ENV JAVA_HOME=/loom-jdk
ENV PATH=/loom-jdk/bin:$PATH
ENTRYPOINT tail -f >> /dev/null