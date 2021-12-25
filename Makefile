BUCKET=raul-demo
PROJECT=vite
LOGKEY=a99d00bcfee24cb960f7f2afabaee53c


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

# # github action 自动部署
# deploy:
# 	curl https://devtools.qiniu.com/qshell-v2.6.1-linux-amd64.tar.gz | tar zxv; \
# 	chmod +x qshell; \
# 	./qshell account ${AK} ${SK} raul; \
# 	# 删除原文件
# 	./qshell listbucket2 --prefix '${PROJECT}/' ${BUCKET} -o todelete.txt
# 	./qshell batchdelete --force ${BUCKET} -i todelete.txt
# 	rm todelete.txt
# 	# 上传新文件
# 	./qshell qupload2 --src-dir=./dist/ --overwrite --bucket=${BUCKET}

# # 本地提交部署
# localDeploy:
# 	rm -rf ./dist
# 	pnpm run build:release
# 	# 本地已安装 qshell 并登陆
# 	# 删除原文件
# 	qshell listbucket2 --prefix '${PROJECT}/' ${BUCKET} -o todelete.txt
# 	qshell batchdelete --force ${BUCKET} -i todelete.txt
# 	rm todelete.txt
# 	# 删除本地数据，到达上传所有文件；每次上传都有日志，上传前会对比文件
# 	rm -rf /Users/jianguopu/.qshell/qupload/${LOGKEY}
# 	# 上传新文件
# 	qshell qupload2 --src-dir=./dist/ --overwrite --bucket=${BUCKET}
