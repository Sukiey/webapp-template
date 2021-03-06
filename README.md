# webapp-template
基于koa2，umijs，antd-pro5 的 web 应用模板项目。

## 技术栈

客户端

* umijs
* antd-pro5
* react
* dva

服务端

* koa2
* koa-router 路由
* koa-nunjucks-2 模板引擎
* koa-static 静态资源管理

## 项目搭建过程

* [umijs 重新指定项目根目录](https://github.com/Sukiey/webapp-template/issues/1)
* [koa server nodemon 实现代码热更新](https://blog.csdn.net/qq_38859502/article/details/94358238)
* [npm script 并行执行多条命令](https://www.cnblogs.com/joyco773/p/11403804.html)
* [前后端项目混合应用开发](https://github.com/Sukiey/webapp-template/issues/5)

## 构建和本地部署

> 使用 docker 构建应用并部署在本地
>
> * [官方文档](https://docs.docker.com/engine/reference/commandline/push/)
> * [参考文档](https://hujb2000.gitbooks.io/docker-flow-evolution/content/cn/basis/dockerfiledetail.html)
> * [docker基本概念和常用操作总结](https://github.com/Sukiey/webapp-template/issues/4)
* build docker image

``` BASH
# BASH
docker build -t ${your_name}/${image_name}:${tag} .

```

* 启动容器

``` BASH
# BASH
docker run --rm -d -p 80:3000 ${your_name}/${image_name}:${tag}

# eg. docker run --rm -d -p 80:3000 zhangss2017/centos:0.1.0
# --rm 容器退出后随之将其删除
# -d 后台运行
# -p 指定端口映射 前者（80）为外界访问应用的端口，后者（3000）是Dockerfile里EXPOSE指定的端口
```

* 同步镜像到 docker hub

``` BASH
# BASH
docker push ${your_name}/${image_name}:${tag}

```
