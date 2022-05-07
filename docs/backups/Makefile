build:
	docker build -t test .
build-with-args:
	docker build -t test  --build-arg LINUX=ubuntu:22.10 --build-arg LOOM=19-loom+6-625 .
docker:
	docker run test
test: build docker
test-with-args: build-with-args test docker
