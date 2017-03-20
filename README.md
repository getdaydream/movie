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
* material-ui
* react-router
* immutable
* webpack  

### 后端
* express
* mongoose
* request

### 已完成部分预览
![主页](src/img/2017-03-20-1.png)  


![标签分类](src/img/2017-03-20-2.png)  

## TODO
### 前端
* 增加自定义标签搜索
* 完成单一电影的展示页面
* 增加标记功能  
* 增加评论功能
* 完成其他页面的功能
* 使用css-modules、less、redux

### 后端
* 优化标签搜索功能
* 路由优化
* 解决某些图片无法下载的问题（尝试加入headers无果）
* 加入权限控制

### 爬虫
* 即时信息的爬取


