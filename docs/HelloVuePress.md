---
title: 【Vue】VuePress 架設與常用指令
date: 2018-04-30 10:27:26
description: 如何使用 Vue 建立自己的部落格
meta:
  - name: description
    content: 關於第一次使用 VuePress
  - name: keywords # keywords
    content: theme vuepress
---

# VuePress 

----

### 什麼是 VuePress

一個幫你結合 Vue 框架與 .md 檔解析的靜態網站架設工具

[為什麼不使用其他的架站工具?](https://vuepress.vuejs.org/zh/guide/#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E6%98%AF)

----

### 快速安裝

```shell
npm init -y
npm install vuepress
echo "# Hello VuePress" > README.md
vuepress dev
```

----

### 配置主題
#### 內建主題

```
vi .vuepress/config
```

#### 自訂主題

```
vi theme/Layout.vue
or
npm install vuepress-theme-xxx -g
```

----

### 設定自己的 component
```
.vuepress/components/
```

----

### 部屬

```shell script
vuepress build
cd .vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:youraccount/youraccount.github.io.git master
cd -
```

----

