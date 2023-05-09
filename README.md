# EchocloudCli
bash 分支

主要作为 脚手架使用
<h1 align="center">echo-cloud-collection</h1>

## 简介

`echo-cloud-collection`是一个免费开源的中后台模板你，使用了`React18(18.2.0)`、`vite2(2.9.0)`、`react-router-dom v6(6.2.2)`、`less` `antd v5(5.2.1) `等前端技术框架进行开发

项目基础：

- 了解`React Hook`相关 Api
- 掌握`Vite2`插件机制、构建配置
- 熟悉`Ract-router-dom v6`新特性
- 熟悉antd对应的UI组件库

## 特性

- 技术栈：React18/React-router-dom v6/vite2
- Javascript 版本
- 可自定义主题
- 国际化方案
- Mock 数据方案
- 暗夜模式
- Antd Design UI 库

### 1、项目参考资料

Yarn 参考资料：https://yarnpkg.com/getting-started/install

typora软件下载地址:https://en.softonic.com/download/typora/windows/post-download

yarn命令指南:https://classic.yarnpkg.com/en/docs/cli/create

Vite参考资料:https://vitejs.dev/

React参考资料:https://reactjs.org/

项目依赖包使用Yarn进行管理node_modules以来选项

### 2、yarn有如下的三个优点:

速度快: Yarn 缓存了每个下载过的包，再次使用时无需重复下载。同时它是并行的，因此安装速度更快

安全: 在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。

可靠: 使用详细、简洁的锁文件格式和明确的安装算法，使 Yarn 能够在不同系统上保证无差异的工作。

### 3、vite项目构建

使用 create-vite 脚手架生成基础模板

yarn create vite

我在安装时提供的命令行选项那里，选择了 React + JavaScript。

eslint代码规范配置，后续补充

我们需要使用Eslint做代码规范化配置

先安装 eslint：

yarn add eslint -D

然后初始化eslint配置：

yarn eslint --init

### 4、开发中遇到的问题记录

#### 4.1 安装过程中遇到的问题记录

##### 4.1.1问题一

E:\workspace\hmi\ErrorImage\yarn 初始化项目报错.jpg

错误内容描述：

yarn create v1.22.19

[1/4] Resolving packages...

[2/4] Fetching packages...

[3/4] Linking dependencies...

[4/4] Building fresh packages...

success Installed "create-vite@4.0.0" with binaries:

      - create-vite
      - cva

[######################################################################] 70/70The filename, directory name, or volume label syntax is incorrect.

error Command failed.

Exit code: 1

Command: D:\Software\nodejs\node_global\node_modules\bin\create-vite

Arguments: 

Directory: E:\workspace\hmi

Output:

info Visit https://yarnpkg.com/en/docs/cli/create for documentation about this command.

错误原因

yarn的安装包默认是在c盘的而我yarn安装在D盘的所以就会报这样的错误

使用命令查看位置

yarn global dir

解决办法

1.将yarn的全局路径改到D盘就行了，在D盘创建yarn文件夹在文件下创建一个golbal和cache文件夹

2.执行下列命令

yarn config set global-folder "D:\Software\nodejs\node_global"

yarn config set cache-folder "D:\Software\nodejs\node_cache"

Dynamic require of "path" is not supported

查看 vite的版本如果是3.1.x不支持commonJS，所以要改为
import { resolve } from 'path'

##### 4.1.2问题二

执行yarn build报错
[vite:css-post] [esbuild css minify] Transform failed with 1 error:
<stdin>:2487:198: ERROR: Unterminated string token

X [ERROR] Unterminated string token

    <stdin>:2487:198:
      2487 │ ...��͛/|�*�%'2��e� P��]H][��2�r��
           ╵                                      ^


error during build:
Error: [esbuild css minify] Transform failed with 1 error:
<stdin>:2487:198: ERROR: Unterminated string token
    at failureErrorWithLog (E:\workspace\202303281824dev_main_traffic_light\hdmap2\hmi\node_modules\esbuild\lib\main.js:1575:15)
    at E:\workspace\202303281824dev_main_traffic_light\hdmap2\hmi\node_modules\esbuild\lib\main.js:814:29
    at responseCallbacks.<computed> (E:\workspace\202303281824dev_main_traffic_light\hdmap2\hmi\node_modules\esbuild\lib\main.js:680:9)
    at handleIncomingPacket (E:\workspace\202303281824dev_main_traffic_light\hdmap2\hmi\node_modules\esbuild\lib\main.js:735:9)
    at Socket.readFromStdout (E:\workspace\202303281824dev_main_traffic_light\hdmap2\hmi\node_modules\esbuild\lib\main.js:656:7)
    at Socket.emit (node:events:513:28)
    at addChunk (node:internal/streams/readable:315:12)
    at readableAddChunk (node:internal/streams/readable:289:9)
    at Socket.Readable.push (node:internal/streams/readable:228:10)
    at Pipe.onStreamRead (node:internal/stream_base_commons:190:23)
error Command failed with exit code 1.

原因分析
vite版本与esbuild版本不匹配，vite编译解析打包css样式存在问题

解决方案
参考资料：https://cn.vitejs.dev/guide/
依次执行下面命令，然后再进行yarn build即可

```
yarn remove vite
yarn cache clean --force
yarn add vite
```




## 文档

正在编写中......

## 准备

- `Node`: 版本建议 >= 12.0.0 [下载链接](https://nodejs.org/zh-cn/download/)
- `Git`: [版本管理工具](https://www.git-scm.com/download)
- `Visual Studio Code`: [最新版本](https://code.visualstudio.com/Download/)
  - [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)- 脚本代码检查
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
  - [Stylelin](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化

## 安装使用

- 获取代码

```sh

```

- 安装依赖

```sh
yarn install
```

- 运行

```sh
yarn start
```

- 打包

```sh
yarn build
```

- 本地预览

```sh
yarn preview
```

## 预览截图
- 登录页

- 仪表盘

- 资源

- 按钮组件

- 设置

- 404

## 浏览器支持

本地开发推荐使用`Chrome 80+` 浏览器

支持现代浏览器, 不支持 IE




在react项目中，配置了eslint，但在 npm start 时，给了这样的提示：React version not specified in eslint-plugin-react settings
解决方案：
在eslint.json文件中指定react版本号
  "settings": {
        "react":{
          /**
          * "detect" automatically picks the version you have installed.
          * You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
          * default to latest and warns if missing 
          */
          "version":"999.999.999" // It will default to "detect" in the future
          //"version": 'detect'
          //"version": "16.12.0"
        }
    },


##  <IDEWrapper style={{marginTop:"10px"}}>
##      <Wrapper>
##            <DiffEditor
##            height={"75vh"}
##            width={"90vw"}
##            original={code}
##          />
##      </Wrapper>
##   </IDEWrapper>
