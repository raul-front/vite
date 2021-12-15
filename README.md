# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


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
开发环境可以新建 `.env.local` 文件，并在里面编写环境变量，必须以 `VITE_APP_` 开头
