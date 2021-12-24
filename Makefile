install:
	rm -rf node_modules
	rm -f npm-lock.yaml
	pnpm install

build-release:
	rm -rf dist
	pnpm build:release

release:
	git checkout release
	git merge master
	git push origin release
	git checkout master
