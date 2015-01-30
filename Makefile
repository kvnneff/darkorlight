BUILDDIR := ./build
TESTDIR := ./test
BIN := ./node_modules/.bin

build: node_modules builddir
	@$(BIN)/duo --stdout index.js > $(BUILDDIR)/build.js
	@$(BIN)/duo --stdout index.css > $(BUILDDIR)/build.css
	@$(BIN)/suitcss build/build.css build/build.css

builddir:
	mkdir -p $(BUILDDIR)

node_modules:
	npm install duo suitcss-preprocessor

clean:
	rm -rf ./node_modules ./build ./components

.PHONY: build clean