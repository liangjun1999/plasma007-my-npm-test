# 如何编写一个自己的包，然后发布包、维护包？
# 环境准备
## 安装`node`的环境 
学习`npm`包管理首先得要安装好`Node.js`环境,这个就自行搜索查看相关教程安装，这里不详细展开细说了
## 更新`npm`工具版本
`Node.js`自带`npm`,但是一般自带的`npm`版本会比最新版要低一下，可以手动更新`npm`的版本到最新 
```js
npm install npm@latest -g
```
## `npm`账号注册
我们发布包到`npmjs`上，那么我们就需要有一个自己的`npm`账号，大家可以通过
[npm官网](https://www.npmjs.com/signup "注册npm账号")自行注册，以便后续学习使用。
# `npm`的基本使用  
## 一、体验初始化`npm`项目 
在准备好环境后，我们先来体验一下初始化npm项目的流程。 输入`npm init`命令后，按照提示输入对应内容，这里我们暂时不需要输入任何内容，一直回车让其保持为空就行。
1. 在指定路径下使用terminal工具执行以下命令，创建一个新文件夹,并切换到该目录下
    ```js
    mkdir npmtest
    cd npmtest
    ```
2. 执行`npm`初始化命令，然后一直回车，会出现以下输出
    ```js
    npm init

    /*
    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.

    See `npm help init` for definitive documentation on these fields
    and exactly what they do.

    Use `npm install <pkg>` afterwards to install a package and
    save it as a dependency in the package.json file.

    Press ^C at any time to quit.
    package name: (npmtest)
    version: (1.0.0)
    description: 
    git repository:
    keywords: 
    author: 
    license: (ISC)
    About to write to ***********\npmtest\package.json:

    {
      "name": "npmtest",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }


    Is this OK? (yes) yes
    */
    ```
3. 执行完初始化命令后，在项目目录文件中会出现一个`package.json`文件，文件内容如下：
   ```json
    {
      "name": "npmtest",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
   ```
4. 此时的目录树结构如下：
    ```js
    ├─npmtest
    |  ├─package.json
    ```
5. 通过这个过程，我们可以看到使用`npm`包对项目进行包装其实是非常简单的，管理也是非常简单，对依赖的管理也很简单，只有一个`package.json`文件。
## 二、配置基本用户信息
1. 设置初始化默认的用户名、邮箱、license，设置好这个以后就不用我们自己再一个个根据命令行提示设置
   ```js
    npm set init.author.email "双引号里填写自己的邮箱"
    npm set init.author.name "双引号里填写自己的名字"
    npm set init.license "双引号里填写证书类型"
    // 例如：我自己设置的默认信息如下
    npm set init.author.email "897317986@qq.com"
    npm set init.author.name "plasma007"
    npm set init.license "MIT"
   ```
2. 我们现在可以使用`npm init -y`命令进行快速的初始化了
   ```js
    npm init -y
   ```
3. 我们可以看到在`package.json`文件中，`author license`的值就是我们设置的默认值。
   ```js
    Wrote to ****\npmtest\package.json:
    {
      "name": "npmtest",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "plasma007 <897317986@qq.com>",
      "license": "MIT"
    }
   ```
## 三、创建并发布一个自己的package 
在前面的步骤中我们已经体验了如果初始化`npm`项目，现在我们则来创建并发布自己的包。
1. 创建一个文件夹，并打开该路径，这里建议文件夹名称与包名保持一致（要发布的包不能重名，这里应该取一个与众不同的包名来替换`plasma007-my-npm-test`）  
   ```js
    mkdir plasma007-my-npm-test
    cd ./plasma007-my-npm-test
   ```
   此时的目录树结构：
   ```js
   ├─plasma007-my-npm-test
   |
   ```
2. 创建一个简单的脚本文件 `lib/index.js` (什么名字都可以，用作入口文件一般同包名或者使用index)， 写一个简单的函数如下:  
    ```js
    const printMsg = () => {
      console.log("This is a message from the demo package");
    }

    module.exports = {
      printMsg
    }
    ```
    此时的目录树结构：
    ```js
    ├─plasma007-my-npm-test
    |  ├─index.js
    ```
3. `npm`初始化项目
    ```js
    npm init

    // 按提示输入项目相关信息,自己输入后命名为输入的名字，package名可以在后面的package.json配置文件中修改
    package name: (默认文件夹名) plasma007-my-npm-test
    // 默认版本号是1.0.0 同上
    version: (1.0.0)
    // 对包的详细描述
    description: 这是我学习npm包管理的第一个项目尝试 
    // 入口文件，默认是index.js
    entry point: (index.js)
    // test命令
    test command: 
    // 项目的git仓库地址，比如github、gitee等
    git repository:
    // 关键字
    keywords: mytest
    // 项目作者名
    author: plasma007
    // 包的许可证类型，默认ISC
    license: (ISC) MIT
    ```
    此时的目录树结构：
    ```js
    ├─plasma007-my-npm-test
    ├─lib
    |  ├─index.js
    ├─package.json

    ```
4. 初始化项目成功后提示相关信息已写入`/plasma007-my-npm-test/package.json`中，回车
    ```js
    About to write to ****\plasma007-my-npm-test\package.json:

    {
      "name": "plasma007-my-npm-test",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "plasma007 <897317986@qq.com>",
      "license": "MIT"
    }

    Is this OK? (yes) yes
    ```
5. 如果还没有登录`npm`账号，则需要先登录，如果登录失败有可能是后文中`常见问题列表 1. 无法登录npm`的情况，可按照里面的方法解决。 
    ```js
    npm login
    // 按提示输入用户名和密码，密码输入时不显示
    Username: plasma007 // 分别输入自己的账号密码
    Password:
    ``` 
6. 将写好的包发布
    ```js
    npm publish 
    // npm 会提示很多信息，如果最后没报错 且最后一行是 + xxxx@1.0.0 就代表发布成功了
    ```
7. 接下来验证一下自己的包是否已成功发布。在另外的目录下创建新的目录,并打开
    ```js
    mkdir testnpm
    cd ./testnpm
    ```
8. npm安装刚才发布的包  `npm install ` + 包名，包名是自己的包名，不要写错了。  
    ```js
    npm install plasma007-my-npm-test
    ```
9. 创建一个`test.js`文件，引入包里的函数 
    ```js
    import { printMsg } from 'plasma007-my-npm-test';

    printMsg()
    ```    
10. 修改`package.json`文件里面的配置，添加一个启动脚本、修改文件类型为`module`  
    ```js
    {
        ...,
        "script" : {
            "dev" : "node ./test.js"
        },
        "type" : "module"
        ...
    }
    ```
11. 执行脚本命令，控制台会输出`This is a message from the demo package`, 说明自己发布的包能够正常引入  
    ```js
    npm run dev

    // 显示
    > dev
    > node ./testnpm1.js

    This is a message from the demo package
    ```

# NPM进阶  

## package的README文件
1. 该文件必须在包项目的根路径  
2. 该文件只能跟随包版本更新而更新  

## package的版本更新  
```js
npm version patch // 如果没有预发布号则直接升级小号，如果有预发布则直接去掉  
npm publish
```
## package发布后的地址是`https://npmjs.com/package/包名`  

## 添加忽略文件  
1. 方案1：采用白名单策略,在`package,json`中指定打包的文件，这样可以有效防止因为疏忽或者其它一些原因导致一些不想公开或者不必要的文上传到公开的仓库中  
```js
{
    ...,
    "files": [    "/lib"  ]  //一定要在/，  不然会  */lib  都会被识别到
    ...
}
```
2. 方案2：采用`.npmignore`文件添加忽略文件，指定的文件名将不会被打包，但是存在bug,有可能某些文件会被打包跟随发布而公开 

## `script` 脚本命令传参
向`npm`脚本传参需要在参数前加 `--` ,然后JS脚本通过`process.env.参数名`来取值,eg:
```js
// 执行脚本命令时，后面追加参数 name="plasma007"
npm run dev -- name="plasma007"
// 脚本文件中取出参数
let name = process.env.npm_config_name;
```

# 常见错误列表
## 1. 无法登录npm
   使用`npm login`命令时，如果提示的信息是`npm notice Log in on https://registry.npm.taobao.org/`则登录时会报错, 这时我们需要将`npm`源切换回默认源，源切换命令如下：
  ```js
  // 切换回默认的npm源
  npm config set registry https://registry.npmjs.org/
  // 切换到淘宝源
  npm config set registry http://registry.npm.taobao.org/
  // 查看当前源
  npm get registry 
  ```
