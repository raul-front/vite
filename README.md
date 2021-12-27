
<!-- [![Node.js CI](https://github.com/611803/vite/actions/workflows/deploy.yml/badge.svg)](https://github.com/611803/vite/actions/workflows/deploy.yml)
[![node](https://img.shields.io/node/v/vite.svg)](https://nodejs.org/en/about/releases)
[![](https://img.shields.io/badge/vue3-3.2.25-brightgreen.svg)](https://v3.vuejs.org/)
[![](https://img.shields.io/badge/vite-2.7.7-brightgreen.svg)](https://vitejs.dev/)
[![](https://img.shields.io/badge/elementPlus-1.2.0beta.6-brightgreen.svg)](https://element-plus.org/)
[![](https://img.shields.io/badge/eslint-v7.32.0-blue.svg)](https://www.npmjs.com/package/eslint)
[![](https://img.shields.io/badge/stylelint-v14.2.0-informational.svg)](https://www.npmjs.com/package/stylelint)
[![node](https://img.shields.io/github/license/611803/vite.svg)](https://github.com/611803/vite/blob/master/LICENSE) -->

[![Node.js CI](https://github.com/611803/vite/actions/workflows/deploy.yml/badge.svg)](https://github.com/611803/vite/actions/workflows/deploy.yml)
[![Node](https://img.shields.io/node/v/vite.svg)](https://nodejs.org/en/about/releases)
[![Vue](https://img.shields.io/badge/vue3-3.2.25-brightgreen.svg)]()
[![Vite](https://img.shields.io/badge/vite-2.7.7-brightgreen.svg)]()
[![ElementPlus](https://img.shields.io/badge/elementPlus-1.2.0beta.6-brightgreen.svg)]()
[![Eslint](https://img.shields.io/badge/eslint-v7.32.0-informational.svg)]()
[![Stylelint](https://img.shields.io/badge/stylelint-v14.2.0-informational.svg)]()
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-informational.svg)](https://github.com/standard/standard/blob/master/docs/README-zhcn.md)
[![License](https://img.shields.io/github/license/611803/vite.svg)](https://github.com/611803/vite/blob/master/LICENSE)
[![Author](https://img.shields.io/badge/author-1803-orange.svg)](https://github.com/611803)

<!-- [![](https://img.shields.io/npm/v/eslint.svg?label=eslint)]()
[![](https://img.shields.io/npm/v/stylelint.svg?label=stylelint)]() -->

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

# 打包运行
1. 安装依赖
```
pnpm install
```
2. 运行开发环境
```
pnpm dev
```
3. 打包测试环境
```
pnpm build:test
```
4. 打包预发布环境
```
pnpm build:pre
```
5. 打包生产环境
```
pnpm build:release
```

# 环境变量
开发环境可以新建 `.env.local` 文件，并在里面编写环境变量，必须以 `VITE_APP_` 开头，eg:
```
# 配置
VITE_APP_TEST=test

# 获取

import.meta.env.VITE_APP_TEST
```
