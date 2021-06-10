# xx-official-website

#### 辛鑫科技新版官网

#### 项目地址

[git 地址]http://gitlab.ickabay.com/H5/xx-official-website

#### 服务器地址

服务器地址： 47.100.188.72 (8.210.212.196 该服务器地址停用)

<!-- http://new.hzxinxinkeji.com -->

"http://www.hzxinxinkeji.com"

#### 线上访问地址

[正式地址] http://www.hzxinxinkeji.com

#### 注意

更新服务器最新代码需要注意：
1、进入/usr/share/nginx/html 目录后，
2、执行 mv new_xinxinkeji back_new_xinxinkeji (目的是将 new_xinxinkeji 文件移动到 back_new_xinxinkeji 中，方便查看最新更新的文件，因为当前打包后的文件哈希值和前一次打包的文件哈希值不一样，不能覆盖前面的文件，必须先把旧的文件移除掉，再更新新的文件)
3、unzip new_xinxinkeji.zip (解压打包后的压缩文件)
备注：若找到更好的方法解决文件不能覆盖的问题也可以自行尝试

### 搜索引擎搜索到你的网站(添加 meta 标签)

```html
第一步： 如何让搜索引擎找到你的网站，在你的页面页头<head
></head>之间加入如下语句：

<meta
  name="keywords"
  content="CSDN.NET,博客,学习,论坛,CSDN,全球最大的中文IT社区（这里是写你网站的关键字，在搜索引擎搜索此关键字能找到你的网站，如：博客、学习、论坛、CSDN等等，每个关键字之间用英文的逗号分隔开）"
/>
<meta
  name="description"
  content="CSDN.NET官网（这里是写你网站的描述，如：博客、学习、论坛、CSDN等等，每个描述之间用英文的逗号分隔开）"
/>

第二步：
打开网址：http://www.baidu.com/search/url_submit.html，出现以下界面，在里面添加你的网站地址，然后点击提交。
```

#### 运行及打包

- 常用命令

```bash

  # 运行项目
  yarn serve

  # 以指定环境打包项目
  # 目前环境有dev、test、prod，具体以项目的.env相关文件
  yarn build:环境名； 例如：打包正式服 yarn build:prod

```

#### 第三方插件

- wowjs

  ```bash

    # 常用的类名
    fadeInLeft、fadeInRight、fadeIn、fadeInDown、fadeInLeft、fadeInUp

  ```

#### 结构

#### 代码规范

- 代码规范的目的是提高项目的可维护性。
- 请阅读以上目录结构，了解每个文件和文件夹的作用，按照项目结构风格来编程。
- 项目已配置 eslint + prettier，需要自行配置好编辑器才能生效。

#### vscode 相关配置

- KoroFileHeader (文件头部注释说明，cart + alt + i), 根据个人喜好自行选择

  1、安装 KoroFileHeader 插件
  2、打开 vscode 设置的 setting.json 添加如下配置

```bash

"fileheader.customMade": {
  "Author": "wangshengxian",
  "Date": "Do not edit",
  "LastEditors": "wangshengxian",
  "LastEditTime": "Do not edit",
  "Desc": ""
}


```

- eslint：

  1、安装 eslint 插件。
  2、打开 vscode 设置的 settings.json，添加以下配置：

```bash

"eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue-html",
    "vue"
  ],
"eslint.options": {
  "plugins": ["html"]
},


```

- prettier：

  1、安装 prettier 插件。
  2、打开 vscode 设置的 settings.json，添加以下配置：

```bash

"[html]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[css]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[less]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[scss]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[vue]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"vetur.format.defaultFormatter.html": "js-beautify-html",
"vetur.format.defaultFormatterOptions": {
  "prettier": {
    "eslintIntegration": true,
    "singleQuote": true,
    "semi": true
  }
},


```

- 还需要安装个插件：EditorConfig for VS Code (用来自动识别项目的.editorconfig 文件配置，保持编辑器编码风格的统一。)

  根路径下添加.editorconfig 文件，添加如下配置

```bash

  # https://editorconfig.org
  root = true

  [*]
  charset = utf-8
  indent_style = space
  indent_size = 2
  end_of_line = crlf
  insert_final_newline = true
  trim_trailing_whitespace = true

  [*.md]
  insert_final_newline = false
  trim_trailing_whitespace = false


```
