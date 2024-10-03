include Makefile.mk

b: build test
build:
	yarn
	npm run build
test:
	rm -rf loom-jdk
	if [ -f openjdk-19.tar.gz ]; then rm openjdk-19.tar.gz; fi; \
	node index.js
remove-lock-files:
	find . -name "package-lock.json" | xargs -I {} rm {}; \
	find . -name "yarn.lock" | xargs -I {} rm {};
upgrade:
	nvm install --lts
update: remove-lock-files
	git pull; \
	npm install caniuse-lite; \
	npm install -g npm-check-updates; \
	yarn; \
	npx browserslist --update-db; \
	ncu -u; \
	yarn
deps-npm-update: update
deps-plugins-update:
	curl -sL https://raw.githubusercontent.com/jesperancinha/project-signer/master/pluginUpdatesOne.sh | bash -s -- $(PARAMS)
deps-node-update:
	curl -sL https://raw.githubusercontent.com/jesperancinha/project-signer/master/nodeUpdatesOne.sh | bash
deps-quick-update: deps-plugins-update deps-node-update deps-npm-update
accept-prs:
	curl -sL https://raw.githubusercontent.com/jesperancinha/project-signer/master/acceptPR.sh | bash
