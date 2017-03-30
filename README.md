movie
================
作为电影爱好者经常上豆瓣找找电影，但是豆瓣电影的某些功能不够便利， 例如无法按评价人数排序，无法按照评分排序，无法记录对每一集电视剧的评论等等。因此有了写这样一个项目的想法。

movie是使用React构建的网页，用来记录和发现电影。

前端部分为[movie](http://github.com/getdaydream/moive/)。用于搜索、展示、标记电影信息。

后端部分为[days-server](http://github.com/getdaydream/days-server)。

爬虫部分为[Douban-Crawler](https://github.com/getdaydream/Douban-Crawler)。电影信息爬取自豆瓣。

## **Stack**
### 前端
* React
* redux
* immutable
* react-router
* material-ui
* webpack 

其他：
* react-redux
* redux-immutable
* redux-thunk

### 后端
* express
* mongoose
* request

### 爬虫
* node-crawler
* cheerio

## 已完成部分预览
![预览](src/img/movie.gif)  

## TODO
### 前端
* 增加自定义标签搜索
* 完成单一电影的展示页面
* 增加标记功能  
* 增加评论功能
* 完成其他页面的功能
* 使用css-modules、less(or sass)、redux

### 后端
* 优化标签搜索功能
* 路由优化
* 解决某些图片无法下载的问题（尝试加入headers无果）
* 加入权限控制

### 爬虫
* 即时更新爬虫信息
* 根据[豆瓣Api V2](https://developers.douban.com/wiki/?title=movie_v2)调整Schema结构
