const categories = ["全部", "徒步", "露营", "骑行", "攀岩", "水上", "越野跑"];

const classByCategory = {
  "徒步": { className: "type-hike", symbol: "△" },
  "露营": { className: "type-camp", symbol: "⌂" },
  "骑行": { className: "type-cycle", symbol: "◎" },
  "攀岩": { className: "type-climb", symbol: "◆" },
  "水上": { className: "type-water", symbol: "≈" },
  "越野跑": { className: "type-run", symbol: "↟" }
};

const banners = [
  {
    title: "周末轻徒步模板",
    subtitle: "适合新手、亲子、公司团建，主打短线低门槛。",
    category: "徒步",
    activityId: "trail-mogan"
  },
  {
    title: "星空露营模板",
    subtitle: "营地、烧烤、篝火、日出，适合做高客单活动。",
    category: "露营",
    activityId: "camp-lake"
  },
  {
    title: "城市骑行模板",
    subtitle: "一日往返，路线灵活，适合周期性社群活动。",
    category: "骑行",
    activityId: "cycle-lake"
  }
];

const activities = [
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
    intro: "竹林、古道、溪谷组合的轻量路线，适合第一次参加户外活动的朋友。全程节奏舒适，中途安排补给和拍照点。",
    itinerary: ["08:30 集合签到，领队讲解路线与安全事项", "10:00 进入竹海古道，分组徒步", "12:30 山野午餐与自由拍照", "15:30 完成环线，返程解散"],
    includes: ["专业领队与协作", "户外保险", "公共急救包", "路线组织与活动纪念贴纸"]
  },
  {
    id: "camp-lake",
    category: "露营",
    title: "千岛湖星空露营夜",
    date: "2026-07-12 周六",
    location: "浙江杭州 · 千岛湖",
    duration: "2天1晚",
    difficulty: "休闲",
    price: "499",
    people: "12-22人",
    hot: "高人气",
    leader: "北野",
    wechat: "campfire-072",
    contactText: "添加领队微信，备注“千岛湖露营”，确认帐篷、餐食和自驾拼车信息。",
    intro: "湖边营位、日落晚餐、星空夜谈和次日晨间散步。适合朋友结伴，也适合第一次体验精致露营。",
    itinerary: ["13:30 营地集合，分配装备", "16:30 湖边下午茶和自由活动", "19:00 晚餐、篝火和星空分享", "次日 09:30 早餐后收营"],
    includes: ["营地使用费", "帐篷与基础露营装备", "晚餐与早餐", "户外保险"]
  },
  {
    id: "cycle-lake",
    category: "骑行",
    title: "环太湖日落骑行",
    date: "2026-07-19 周日",
    location: "江苏苏州 · 太湖边",
    duration: "1天",
    difficulty: "中级",
    price: "159",
    people: "20-40人",
    hot: "日落线",
    leader: "青川",
    wechat: "ride-sunset",
    contactText: "扫码进入骑行群，确认车辆要求、头盔要求和集合地点。",
    intro: "沿湖绿道骑行，节奏稳定，傍晚抵达观景点看日落。建议有 20km 以上骑行经验。",
    itinerary: ["14:00 集合检查车辆与护具", "14:30 沿湖绿道骑行", "17:20 日落点休整拍照", "18:30 回到起点解散"],
    includes: ["领骑与收队", "补给水和能量胶", "基础维修工具", "户外保险"]
  },
  {
    id: "climb-yangshuo",
    category: "攀岩",
    title: "阳朔喀斯特攀岩体验",
    date: "2026-08-02 周日",
    location: "广西桂林 · 阳朔",
    duration: "1天",
    difficulty: "体验/进阶",
    price: "899",
    people: "6-12人",
    hot: "小队",
    leader: "石川",
    wechat: "rockup-88",
    contactText: "添加教练微信，备注“阳朔攀岩”，确认身高体重和装备尺码。",
    intro: "由认证教练带队，从安全保护、基础动作到天然岩壁体验，适合想认真尝试攀岩的用户。",
    itinerary: ["09:00 装备领取与安全教学", "10:30 基础动作训练", "13:30 天然岩壁线路体验", "16:30 总结与返程"],
    includes: ["教练指导", "攀岩装备", "场地与保险", "摄影记录"]
  },
  {
    id: "sup-anji",
    category: "水上",
    title: "安吉峡谷桨板漂流",
    date: "2026-08-09 周日",
    location: "浙江安吉 · 峡谷水域",
    duration: "1天",
    difficulty: "新手友好",
    price: "299",
    people: "10-26人",
    hot: "清凉",
    leader: "溪木",
    wechat: "watergo-09",
    contactText: "扫码进水上活动群，确认尺码、换洗衣物和天气安排。",
    intro: "夏季水上活动模板，包含桨板教学、浅水练习和轻漂流体验。全程配救生衣和安全员。",
    itinerary: ["10:00 水域集合，更换装备", "10:40 桨板基础教学", "13:30 峡谷轻漂流", "16:00 返程解散"],
    includes: ["桨板装备", "救生衣", "安全员", "户外保险"]
  },
  {
    id: "run-siming",
    category: "越野跑",
    title: "四明山清晨越野跑",
    date: "2026-08-16 周日",
    location: "浙江宁波 · 四明山",
    duration: "半天",
    difficulty: "中级",
    price: "229",
    people: "12-25人",
    hot: "晨跑",
    leader: "风禾",
    wechat: "trailrun-16",
    contactText: "添加领队微信，备注“四明山越野跑”，确认配速、装备和补给计划。",
    intro: "清晨山脊线越野跑，路线约 12km，包含爬升和林道。适合有跑步基础的队员。",
    itinerary: ["06:30 集合热身", "07:00 开始越野跑", "08:30 山脊补给点", "10:00 完成路线"],
    includes: ["领跑与收队", "补给站", "急救包", "户外保险"]
  }
];

function decorateActivity(activity) {
  const meta = classByCategory[activity.category] || classByCategory["徒步"];
  return {
    ...activity,
    className: meta.className,
    symbol: meta.symbol,
    qrCells: buildQrCells(activity.wechat)
  };
}

function buildQrCells(seed) {
  const chars = Array.from(seed || "wechat");
  return Array.from({ length: 25 }, (_, index) => {
    const code = chars[index % chars.length].charCodeAt(0) + index * 17;
    return code % 3 !== 0 || index === 0 || index === 4 || index === 20 || index === 24;
  });
}

const decoratedActivities = activities.map(decorateActivity);
const decoratedBanners = banners.map((banner) => {
  const meta = classByCategory[banner.category] || classByCategory["徒步"];
  return { ...banner, className: meta.className, symbol: meta.symbol };
});

Page({
  data: {
    banners: decoratedBanners,
    activities: decoratedActivities,
    filteredActivities: decoratedActivities,
    categories,
    activeCategory: "全部",
    searchText: "",
    selectedActivity: null
  },

  onSearch(event) {
    this.setData({ searchText: event.detail.value }, () => this.renderList());
  },

  setCategory(event) {
    this.setData({ activeCategory: event.currentTarget.dataset.category }, () => this.renderList());
  },

  renderList() {
    const { activeCategory, searchText } = this.data;
    const query = searchText.trim().toLowerCase();
    const filteredActivities = decoratedActivities.filter((activity) => {
      const categoryHit = activeCategory === "全部" || activity.category === activeCategory;
      const searchHit = !query || [activity.title, activity.category, activity.location, activity.difficulty, activity.leader].join(" ").toLowerCase().includes(query);
      return categoryHit && searchHit;
    });
    this.setData({ filteredActivities });
  },

  openActivity(event) {
    const id = event.currentTarget.dataset.id;
    const selectedActivity = decoratedActivities.find((activity) => activity.id === id);
    if (!selectedActivity) return;
    this.setData({ selectedActivity });
    wx.pageScrollTo({ scrollTop: 0, duration: 180 });
  },

  goHome() {
    this.setData({ selectedActivity: null });
    wx.pageScrollTo({ scrollTop: 0, duration: 180 });
  },

  scrollToList() {
    wx.pageScrollTo({ selector: "#activityList", duration: 240 });
  },

  copyWechat() {
    const { selectedActivity } = this.data;
    if (!selectedActivity) return;
    wx.setClipboardData({
      data: selectedActivity.wechat,
      success() {
        wx.showToast({ title: "微信号已复制", icon: "success" });
      }
    });
  }
});
