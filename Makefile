install:
	rm -rf node_modules
	pnpm install

build:
	rm -rf dist
	pnpm run build:release
