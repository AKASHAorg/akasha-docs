build:	install build.docs
install:
	git submodule update --init --recursive && \
	yarn run bootstrap
build.docs:
	export NODE_ENV='production' && \
	yarn run build
