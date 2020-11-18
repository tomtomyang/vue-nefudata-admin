# 数据东林vue框架说明

> auth：tomtomyoung
>
> blog：[https://tomtomyoung.gitee.io/](https://tomtomyoung.gitee.io/)
>
> 远程仓库地址：https://gitee.com/tomtomyoung/nefudata.git

## 文件结构说明

```
src
 |--assets                  公用文件夹
 |     |
 |     |--fonts             iconfont公用字体图标
 |     |--styles            全局公用样式            
 |     |--imgs              图片文件夹
 |
 |--utils                   全局公用js工具包
 |     |
 |     |--citydata.js       中国省市文件
 |     |--directives.js     对话框拖拽插件
 |     |--filter.js         全局过滤器定义组件
 |
 |--api                     api请求接口统一管理文件夹
 |
 |--components              存放页面小组件
 |     |
 |     |--breadcrumb        面包屑导航组件
 |
 |--plugins                 插件配置文件夹
 |     |
 |     |--axios.js          axios配置文件
 |     |--element.js        elementUI配置文件
 |     |--quillEditor.js    富文本编辑器配置文件
 |
 |--router                  路由文件夹
 |     |
 |     |--index.js          vue-router路由配置文件
 |
 |--store                   vuex文件夹
 |     |
 |     |--modules           vuex modules文件夹
 |     |--index.js          vuex配置文件
 |
 |--views                   存放页面
 |     | 
 |     |--dbmanage          数据库管理文件夹
 |     |
 |     |--error
 |     |     |
 |     |     |--404.vue     404错误页
 |     |     |--401.vue     401错误页
 |     |
 |     |--home              主页文件夹
 |     |     |
 |     |     |--Welcome.vue 欢迎页组件
 |     |
 |     |--others            剩余文件夹以此类推
 |     |
 |     |--Layout.vue        页面整体架构组件
 |     |--Login.vue         登录页面组件
 |
 |--App.vue                 根组件
 |
 |--main-dev.js             开发环境下配置   
 |--main-prod.js            生产环境下配置
 
 
 |--README.md               框架文件说明
 |--RELEASE.md              版本更新说明
 |
 |--vue.config.js           打包配置文件
 |--bable.config.js         bable插件配置文件
 |
 |--package.json            项目需要的npm插件配置
 |
 |--LICENSE                 项目开源许可证
 |--.gitignore              git忽略文件

```

## 版本更新说明

### 0.0 版本更新

初始化框架：


```
1. echarts;                        图表插件
2. less;                           css预处理语言
3. normalize.css;                  css reset
4. elementUI;                      UI组件库
5. quillEditor;                    富文本编辑器
6. table-with-tree-grid;           表格内树形图
7. axios;                          http库     
8. vuex;                           组件共享区
9. lodash;                         JS工具库                           
10. path-to-regexp;                url处理工具
11. transform-remove-console;      发布环境下去除console
12. 可拖拽dialog;                   elementUI dialog拖拽插件
13. nprogress                      加载动画
14. iconfont                       字体图标

```


### 0.1 版本更新
1. 添加公共面包屑导航。
2. 修改用于生产环境打包的`main-prod.js`文件。
3. 修改全局样式`global`和全局动画`transition`为`less`格式，并添加全局变量。

### 0.2 版本更新
1. 修改文件结构，`components`作为页面小组件文件夹，`views`作为页面大组件文件夹。
2. 修改`router/index.js`，修改路由结构。
3. 更改公共面包屑导航显示路径，使之更加合理。

### 0.3 版本更新
1. 修改文件结构：全局样式文件为`assets/styles`,全局js工具文件为`assets/utils`。
2. 修复路由错误。
3. 添加开源许可证。
4. 允许设置全局less变量。

### 0.4 版本更新
1. 修改文件结构，`assets/imgs`用于存放图片文件。
2. 更新`README.md`，编写文件结构说明。
3. 更改目录结构，将`utils`文件夹拿到`src`文件夹下。

### 0.5 版本更新
1. 将项目使用的接口API单独封装，拿到`api`文件夹下。
2. 实现统一管理接口api，用于界面渲染的api请求通过`import`导入方法进行调用，用于状态控制和组件共享的api通过`...mapXXX`进行引入，或者使用vuex的其他调用方法。
3. 将`RELEASE.md`文件合并至`README.md`文件中。

### 0.6 版本更新
1. 融合`form-generator`，给模板添加拖拽自定义布局并生成代码功能。
2. 添加401、404错误页。
3. 添加`连接数据库，配置数据源，临时查询`功能。

### 0.7 版本更新
1. 修改`连接数据库，配置数据源，临时查询`功能。
2. 添加`设置`页面。
3. 重新规划项目结构，主要是`views`文件夹。
4. 重新规划路由配置，更新`router/index.js`。
5. 更改页面ui样式，将面包屑导航移入头部，增加内容区域面积。
6. 更改icon样式。



