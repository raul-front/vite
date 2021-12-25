BUCKET=raul-demo
PROJECT=vite


install:
	rm -rf node_modules
	rm -f npm-lock.yaml
	pnpm install

build-release:
	rm -rf dist
	pnpm build:release

# release:
# 	git checkout release
# 	git merge master
# 	git push origin release
# 	git checkout master

# github action 自动部署
deploy:
	curl https://devtools.qiniu.com/qshell-v2.6.1-linux-amd64.tar.gz | tar zxv; \
	chmod +x qshell; \
	./qshell account ${AK} ${SK} raul; \
	# 删除原文件
	./qshell listbucket2 --prefix '${PROJECT}/' ${BUCKET} -o todelete.txt
	./qshell batchdelete --force ${BUCKET} -i todelete.txt
	rm todelete.txt
	# 上传新文件
	./qshell qupload2 --src-dir=./dist/ --overwrite --bucket=${BUCKET}
