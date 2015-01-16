BUILDDIR := ./build
TESTDIR := ./test
BIN := ./node_modules/.bin

build-test: node_modules
	@$(BIN)/duo --stdout index.js > $(BUILDDIR)/build.js
	@$(BIN)/duo --stdout $(TESTDIR)/index.js > $(BUILDDIR)/tests.js \
		--development

test: build build-test
	@$(BIN)/duo-test \
		-c 'make build && make build-test' \
		--build build/tests.js \
		--reporter spec \
		browser

node_modules:
	npm install

clean:
	rm -rf ./node_modules ./build ./components

$(BUILDDIR):
	mkdir -p $(BUILDDIR)

phony: build build-test tests