b: build test
build:
	yarn
	npm run build
test:
	rm -rf loom-jdk
	if [ -f openjdk-19.tar.gz]; then rm openjdk-19.tar.gz; fi; \
	node index.js