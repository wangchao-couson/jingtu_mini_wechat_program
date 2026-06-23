# 山野集合：户外活动静态展示页

当前第一个版本已经简化为纯静态网页，适合放进微信小程序 WebView 或公众号菜单中展示。页面只做活动发布和展示：用户浏览活动，点击详情后通过微信群二维码样式卡片或个人微信号联系报名。

## 当前版本功能

- 首页顶部：热门活动轮播，内置 3 个轮播模板。
- 首页下方：活动模板列表，内置 6 个活动模板。
- 活动详情：展示活动介绍、时间、地点、人数、难度、费用、行程安排、费用包含。
- 联系报名：详情页展示微信群二维码样式卡片和个人微信号，支持复制微信号。
- 静态 WebView：没有登录、角色、报名表单、支付、审核、后台管理。
- 纯前端单文件：`index.html` 内含 HTML、CSS、JS、SVG，不依赖外部图片和接口。

## 打开预览

直接用浏览器打开：

```bash
open index.html
```

或者启动静态服务：

```bash
python3 -m http.server 5173
```

访问：

```text
http://localhost:5173
```

## 后续更新活动

只需要编辑 [index.html](/Users/liqiang/Documents/活动报名小程序/index.html) 顶部脚本里的两个数组：

```js
const banners = [
  // 首页轮播模板
];

const activities = [
  // 活动卡片和详情模板
];
```

更新后把新的网页文件上传到你的静态托管服务即可。微信小程序 WebView 地址不变时，通常只需要更新网页内容，不需要重新提交小程序审核。

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

- `activityId` 对应某个活动的 `id`，点击轮播会进入该活动详情。
- `theme` 是轮播背景渐变色。
- `category` 会决定 SVG 装饰图案。

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

## WebView 接入建议

正式发布时可以采用：

```text
微信小程序壳
  pages/webview/index
    <web-view src="https://你的域名/outdoor/index.html" />

静态网页托管
  index.html
```

这样以后增删活动、调整轮播、改详情文案时，只更新静态网页服务器上的 `index.html`。只要 WebView 的域名和业务范围符合微信要求，活动内容更新不需要重新发小程序版本。

## 项目结构

```text
活动报名小程序/
  index.html   # 静态 WebView 展示页
  README.md    # 使用和更新说明
```

## 暂时隐藏的功能

以下功能当前版本不展示，后续需要时可以重新设计再加回来：

- 角色账号
- 在线报名表
- 微信/支付宝模拟支付
- 我的报名
- 活动审核
- 管理后台
- CSV 导出
