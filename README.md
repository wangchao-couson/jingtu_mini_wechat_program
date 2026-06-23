# 山野集合：户外活动 WebView 小程序

当前第一个版本采用“微信小程序壳 + WebView 静态网页”的方式。小程序只负责打开线上活动页，活动内容全部在网页里维护。以后更新活动时，只改网页并重新发布网页，不需要改小程序代码。

## 当前版本功能

- 首页顶部：热门活动轮播，内置 3 个轮播模板。
- 首页下方：活动模板列表，内置 6 个活动模板。
- 活动详情：展示活动介绍、时间、地点、人数、难度、费用、行程安排、费用包含。
- 联系报名：详情页展示微信群二维码样式卡片和个人微信号，支持复制微信号。
- 微信小程序壳：`pages/webview/index` 通过 `<web-view>` 加载线上活动页。
- 暂无登录、角色、报名表单、支付、审核、后台管理。

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

## 后续更新活动

只需要编辑 `index.html` 顶部脚本里的两个数组：

```js
const banners = [
  // 首页轮播模板
];

const activities = [
  // 活动卡片和详情模板
];
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
  index.html                 # 线上活动网页
  utils/
    config.js                # WebView URL 配置
  pages/
    webview/
      index.wxml             # web-view 入口
      index.js
      index.json
      index.wxss
  README.md
```

## 微信小程序三步上线

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
  title: "周末轻徒步模板",
  subtitle: "适合新手、亲子、公司团建，主打短线低门槛。",
  category: "徒步",
  activityId: "trail-mogan",
  theme: "linear-gradient(135deg,#174f36 0%,#3b9560 48%,#d89d4a 100%)"
}
```

## 活动模板字段

```js
{
  id: "trail-mogan",
  category: "徒步",
  title: "莫干山竹海轻徒步",
  date: "2026-07-05 周日",
  location: "浙江湖州 · 莫干山",
  duration: "1天",
  difficulty: "新手友好",
  price: "199",
  people: "16-30人",
  hot: "热门",
  leader: "阿岚",
  wechat: "shanwalk-001",
  contactText: "扫码进活动咨询群，发送“莫干山”获取集合点、装备清单和报名方式。",
  intro: "活动介绍文案",
  itinerary: ["08:30 集合签到", "10:00 开始徒步"],
  includes: ["专业领队与协作", "户外保险"]
}
```
