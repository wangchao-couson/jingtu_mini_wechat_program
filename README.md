# 京途：北京周边自驾活动小程序

当前第一个版本同时保留两套入口：

- 默认入口：小程序原生静态测试版，不依赖 WebView 域名，可直接上传体验版测试。
- 备用入口：WebView 静态网页版，等业务域名解决后再切回。

## 当前版本功能

- 首页顶部：热门活动轮播，内置 3 个轮播模板。
- 首页下方：活动模板列表，内置 6 个活动模板。
- 活动详情：展示活动介绍、时间、地点、人数、难度、费用、行程安排、费用包含。
- 微信联系：详情页展示个人微信号 `coulson_pro`，支持复制。
- 原生测试页：`pages/native/index`，无需业务域名。
- WebView 备用页：`pages/webview/index`，通过 `<web-view>` 加载线上活动页。
- 暂无登录、角色、表单、支付、审核、后台管理。

## 本地预览网页

```bash
cd /Users/liqiang/Documents/活动报名小程序
python3 -m http.server 5173
```

浏览器打开：

```text
http://localhost:5173
```

## 小程序 WebView 地址

配置文件：

```text
utils/config.js
```

当前预填地址：

```js
WEBVIEW_URL: "https://wangchao-couson.github.io/jingtu_mini_wechat_program/"
```

如果你改用自己的域名，把这里换成你的 HTTPS 活动页地址。

## 当前默认启动页

当前 `app.json` 默认启动：

```text
pages/native/index
```

这意味着你现在可以先不用配置业务域名，直接在微信开发者工具里预览、上传体验版。

等业务域名解决后，如果要切回 WebView，把 `app.json` 的页面顺序改成：

```json
{
  "pages": [
    "pages/webview/index",
    "pages/native/index"
  ]
}
```

## 后续更新活动

如果是 WebView 版本，只需要编辑 `index.html` 顶部脚本里的两个数组：

```js
const banners = [
  // 首页轮播模板
];

const activities = [
  // 活动卡片和详情模板
];
```

如果是当前原生测试版，需要同步编辑：

```text
pages/native/index.js
```

里面的：

```js
const banners = [];
const activities = [];
```

更新后执行：

```bash
git add index.html
git commit -m "更新活动内容"
git push
```

如果使用 GitHub Pages，网页会自动更新。只要 WebView 地址不变，小程序通常不需要重新提交审核。

## 项目结构

```text
活动报名小程序/
  app.js
  app.json
  app.wxss
  project.config.json
  sitemap.json
  index.html                 # 线上活动网页，WebView 备用
  utils/
    config.js                # WebView URL 配置
  pages/
    native/
      index.wxml             # 当前默认原生静态测试页
      index.js
      index.json
      index.wxss
    webview/
      index.wxml             # web-view 备用入口
      index.js
      index.json
      index.wxss
  README.md
```

## 当前免域名测试上线步骤

1. 打开微信开发者工具
2. 导入本项目：

```text
/Users/liqiang/Documents/活动报名小程序
```

3. 使用你的小程序 AppID
4. 预览确认首页、活动详情、复制功能可用
5. 点击上传
6. 到微信公众平台设置体验成员，并生成体验版二维码

这一套走的是 `pages/native/index`，不需要业务域名。

## WebView 正式版三步上线

### 第一步：发布活动网页

推荐先用 GitHub Pages：

1. 打开 GitHub 仓库 `wangchao-couson/jingtu_mini_wechat_program`
2. 进入 `Settings` -> `Pages`
3. `Build and deployment` 选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
4. 保存后等待生成地址：

```text
https://wangchao-couson.github.io/jingtu_mini_wechat_program/
```

如果正式环境要求自有域名或备案域名，可以把 `index.html` 上传到自己的 HTTPS 域名，然后同步修改 `utils/config.js`。

### 第二步：配置微信业务域名

1. 登录微信公众平台
2. 进入小程序后台
3. 打开 `开发管理` -> `开发设置` -> `业务域名`
4. 添加活动网页所在域名
5. 按微信提示下载校验文件，并放到网站根目录
6. 点击校验

注意：WebView 正式环境必须使用 HTTPS 域名，并且域名需要通过微信后台的业务域名校验。若 GitHub Pages 域名无法满足你的账号或主体要求，就需要使用自有域名。

### 第三步：导入、上传、提交审核

1. 打开微信开发者工具
2. 选择 `导入项目`
3. 项目目录选择本仓库本地目录：

```text
/Users/liqiang/Documents/活动报名小程序
```

4. 填写你自己的小程序 AppID
5. 如果需要，把 `project.config.json` 里的 `appid` 从 `touristappid` 改成你的 AppID
6. 在开发者工具中预览，确认 WebView 能打开活动页
7. 点击 `上传`
8. 回到微信公众平台，提交审核
9. 审核通过后发布

上线后，只要小程序 WebView 地址不变，以后更新活动通常只需要更新 `index.html` 并 `git push`。

## 轮播模板字段

```js
{
  title: "百里山水画廊",
  subtitle: "延庆最经典山水自驾线，河谷、公路、村落和观景台一路展开。",
  category: "山水公路",
  activityId: "baili-gallery",
  theme: "linear-gradient(135deg,#174f36 0%,#3b9560 48%,#d89d4a 100%)"
}
```

## 活动模板字段

```js
{
  id: "baili-gallery",
  category: "山水公路",
  title: "延庆百里山水画廊自驾",
  date: "周六/周日可约",
  location: "北京延庆 · 千家店",
  duration: "1天",
  difficulty: "轻松",
  price: "现场纯AA自理",
  people: "6-18人",
  hot: "经典",
  wechat: "coulson_pro",
  intro: "活动介绍文案",
  itinerary: ["09:00 集合", "10:30 进入山水画廊主线"],
  includes: ["线路规划", "车队领航"]
}
```
