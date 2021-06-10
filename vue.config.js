const Path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
// 预渲染插件
const PrerenderSpaPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer;

console.log("-----proxyCode:", process.env.VUE_APP_PROXY_CODE);

console.log("-----nodeEnv:", process.env.NODE_ENV);

console.log("-----serverENV:", process.env.VUE_APP_SERVER_ENV);

console.log("-----serverURL:", process.env.VUE_APP_SERVER_URL);

let projectName = "new_xinxinkeji"; // TODO 根据自己的项目来更改打包后文件名

module.exports = {
  publicPath: "/",
  outputDir: `${projectName}`, // 打包生成的文件存储目录
  assetsDir: "static",
  lintOnSave: true, // 是否在保存的时候检查
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  // 添加webpack配置
  configureWebpack: (config) => {
    // 预渲染配置
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new PrerenderSpaPlugin({
          // 生成文件的路径，也可以和webpack打包的一致
          // 目录只能有一级，如果层次大于一级，在生成的时候不会有任何的错误提示，在预渲染的时候只会卡着不动
          staticDir: Path.join(__dirname, projectName),
          // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
          routes: ["/", "/solution", "/news"],
          // 这个很重要，如果没有配置这段，也不会进行预编译
          // 预渲染代理接口
          // server: {
          //   proxy: {
          //     '/api': {
          //       target: 'http://localhost:9018',
          //       secure: false
          //     }
          //   }
          // },
          renderer: new Renderer({
            // 触发渲染的时间，用于获取数据后再保存渲染结果
            renderAfterTime: 10000,
            headless: false,
            renderAfterDocumentEvent: "render-event", // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
            // inject: {
            //   //默认挂在window.__PRERENDER_INJECTED对象上，可以通过window.__PRERENDER_INJECTED.foo在预渲染页面取值
            //   foo: "bar",
            // },
            // args: ["--no-sandbox", "--disable-setuid-sandbox"],
          }),
        })
      );
    }
    // 生产环境去掉console
    if (
      process.env.NODE_ENV === "production" &&
      process.env.VUE_APP_SERVER_ENV === "prod"
    ) {
      // 返回一个将会被合并的对象
      return {
        optimization: {
          minimizer: [
            new TerserPlugin({
              sourceMap: false,
              terserOptions: {
                compress: {
                  drop_console: true,
                },
              },
            }),
          ],
        },
      };
    }
    // 定义快捷路径标识
    const myAlias = {
      "@": Path.resolve(__dirname, "./src"),
      public: Path.resolve(__dirname, "./public"),
    };
    // 性能提示
    let myPerformance = {};
    if (process.env.NODE_ENV === "production") {
      myPerformance = {
        hints: "warning",
        maxEntrypointSize: 1024000,
        maxAssetSize: 1024000,
      };
    }
    // 更新config
    config.resolve.alias = {
      ...config.resolve.alias,
      ...myAlias,
    };
    config.performance = {
      ...config.performance,
      ...myPerformance,
    };
  },
  // 修改webpack配置
  chainWebpack: (config) => {
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    // 修复HMR, 实现热更新(代码改变后，自动刷新页面，不用再手动刷新)
    config.resolve.symlinks(true);
  },
  // 开发环境服务配置
  devServer: {
    host: "0.0.0.0",
    port: "8080",
    // open: true, // 项目启动后自动打开浏览器
    // https: false,
    proxy: {
      "/official": {
        target: process.env.VUE_APP_SERVER_URL,
        ws: true,
        changeOrigin: true,
        // secure: false,
        pathRewrite: {
          "^/official": "",
        },
      },
    },
  },

  // 第三方插件
  pluginOptions: {},
  // PWA插件相关配置
  pwa: {},
};
