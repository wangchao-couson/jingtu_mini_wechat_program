const WECHAT_ID = "coulson_pro";

const categories = ["全部", "最新预告", "草原湖泊", "山水公路", "长城古镇", "湖库环线", "峡谷公路"];

const classByCategory = {
  "最新预告": "type-sky",
  "草原湖泊": "type-lake",
  "山水公路": "type-forest",
  "长城古镇": "type-cloud",
  "湖库环线": "type-lake",
  "峡谷公路": "type-river"
};

const tripImages = {
  grassA: ["/assets/images/trips/preview-01.jpg", "/assets/images/trips/preview-02.jpg", "/assets/images/trips/preview-03.jpg"],
  grassB: ["/assets/images/trips/preview-04.jpg", "/assets/images/trips/preview-05.jpg", "/assets/images/trips/preview-06.jpg"],
  bonfire: ["/assets/images/trips/preview-07.jpg", "/assets/images/trips/preview-08.jpg", "/assets/images/trips/preview-09.jpg"],
  lake: ["/assets/images/trips/preview-10.jpg", "/assets/images/trips/preview-11.jpg", "/assets/images/trips/preview-12.jpg"],
  road: ["/assets/images/trips/preview-13.jpg", "/assets/images/trips/preview-14.jpg", "/assets/images/trips/preview-15.jpg"],
  beijing: ["/assets/images/baili.jpg", "/assets/images/miyun.jpg", "/assets/images/shidu.jpg"]
};

const banners = [
  {
    title: "乌兰布统草原秘境",
    subtitle: "7.3-7.6，乌兰布统外围 + 多伦湖，4天3晚自驾环线。",
    category: "最新预告",
    activityId: "ulanbutong-duolun",
    images: [...tripImages.grassA, ...tripImages.lake]
  },
  {
    title: "百里山水画廊",
    subtitle: "延庆经典山水自驾线，河谷、公路、村落和观景台一路展开。",
    category: "山水公路",
    activityId: "baili-gallery",
    images: tripImages.beijing
  },
  {
    title: "密云水库环湖",
    subtitle: "水库观景、山路弯道、鱼街午餐，一天往返刚刚好。",
    category: "湖库环线",
    activityId: "miyun-lake",
    images: ["/assets/images/miyun.jpg", "/assets/images/trips/preview-10.jpg", "/assets/images/trips/preview-12.jpg"]
  }
];

const activities = [
  {
    id: "ulanbutong-duolun",
    category: "最新预告",
    title: "乌兰布统草原秘境 + 多伦湖环线",
    date: "7.3 18:00 - 7.6 20:00",
    location: "北京 → 围场 → 乌兰布统外围 → 多伦湖",
    duration: "4天3晚",
    difficulty: "中等",
    price: "约1150元，现场纯AA自理",
    people: "20人精品小团",
    hot: "最新",
    expired: false,
    images: [...tripImages.grassA, ...tripImages.grassB, ...tripImages.bonfire, ...tripImages.lake],
    wechat: WECHAT_ID,
    intro: "京东同事专属精品小团，自北京出发，经围场、御道口草原、乌兰布统外围小众点位和多伦湖环湖公路，组成一条不折返的草原湖泊自驾环线。路线主打原生态草原、白桦林、骑马体验、篝火烤羊排和高原湖泊日落。",
    highlights: [
      { title: "环线不折返", desc: "每天景观不重复，自驾体验更完整。" },
      { title: "小众原生态", desc: "避开主景区人流，深入乌兰布统外围点位。" },
      { title: "双日落体验", desc: "草原丘陵日落与高原湖泊日落各有氛围。" },
      { title: "牧民骑马", desc: "私家牧道穿越草原白桦林，新手友好。" },
      { title: "篝火烤羊排", desc: "牧民合规场地，炭火烤羊排和星空篝火。" },
      { title: "同好社群", desc: "纯京东同事社群，结识志同道合的伙伴。" }
    ],
    itinerary: [
      "Day 1：17:00 京东总部集合出发，约 21:30 抵达围场县城，入住酒店休整。",
      "Day 2：御道口草原森林风景区随停随拍，下午 1.5 小时牧民私家牧道骑马，傍晚草原日落，夜晚烤羊排 + 篝火。",
      "Day 3：深入乌兰布统外围原生态草原，小河头白桦林、烟子窑湖、金鸽牧场等小众点位，傍晚抵达多伦县。",
      "Day 4：多伦湖 41 公里环湖公路自驾，6 大观景台随停随拍，午餐后返程北京。"
    ],
    includes: [
      "费用 AA：住宿约 290 元，餐饮约 280 元，门票约 40 元，骑马约 130 元，油费过路费约 210 元，车主补贴约 150 元，公共物资约 50 元。",
      "费用多退少补，明细公示；有车无车均可，车队统一调配拼车。",
      "集合地点：京东总部。"
    ]
  },
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
    expired: false,
    images: ["/assets/images/baili.jpg", "/assets/images/trips/preview-13.jpg", "/assets/images/trips/preview-14.jpg"],
    wechat: WECHAT_ID,
    intro: "从延庆城区出发，沿滦赤路进入千家店镇，串联硅化木、滴水壶、乌龙峡谷一带的山水公路。路线弯道舒展、停车点多，是北京周边非常成熟的一日自驾线路。",
    highlights: [],
    itinerary: ["09:00 延庆集合，确认车队编号和对讲频率", "10:30 进入百里山水画廊主线，沿途观景停靠", "12:30 千家店午餐，休整补给", "14:00 继续前往乌龙峡谷/滴水壶方向", "16:30 返程，北京城区傍晚抵达"],
    includes: ["线路规划", "车队领航", "停车点建议", "午餐/门票 AA 或自理"]
  },
  {
    id: "gubei-simatai",
    category: "长城古镇",
    title: "古北水镇 · 司马台夜景线",
    date: "周末两天一晚",
    location: "北京密云 · 古北口",
    duration: "2天1晚",
    difficulty: "休闲",
    price: "现场纯AA自理",
    people: "4-12人",
    hot: "夜景",
    expired: false,
    images: ["/assets/images/shidu.jpg", "/assets/images/trips/preview-04.jpg", "/assets/images/trips/preview-05.jpg"],
    wechat: WECHAT_ID,
    intro: "北京东北方向的轻度假自驾线，适合朋友、情侣和亲子。白天看古北口山势与长城，傍晚进入古北水镇，夜间可远眺司马台长城灯光。",
    highlights: [],
    itinerary: ["D1 10:00 北京出发，京承高速前往密云", "D1 12:30 古北口午餐，下午游览古镇", "D1 19:00 夜景自由活动", "D2 09:30 睡到自然醒，周边短途观景", "D2 14:00 返程"],
    includes: ["路线规划", "住宿建议", "停车与入园提示", "餐食/住宿/门票自理"]
  },
  {
    id: "miyun-lake",
    category: "湖库环线",
    title: "密云水库环湖观景线",
    date: "周六/周日可约",
    location: "北京密云 · 水库周边",
    duration: "1天",
    difficulty: "轻松",
    price: "现场纯AA自理",
    people: "6-20人",
    hot: "亲子",
    expired: false,
    images: ["/assets/images/miyun.jpg", "/assets/images/trips/preview-10.jpg", "/assets/images/trips/preview-11.jpg"],
    wechat: WECHAT_ID,
    intro: "适合第一次参加自驾活动的轻松线路，围绕密云水库周边观景道路、鱼街午餐和山间咖啡点设计，不赶路，重点是舒服地看山看水。",
    highlights: [],
    itinerary: ["09:30 密云集合，车队说明", "10:30 水库观景点拍照", "12:00 鱼街午餐", "14:00 山间咖啡/村落散步", "16:00 返程"],
    includes: ["路线规划", "观景点建议", "领航车", "餐饮消费自理"]
  },
  {
    id: "shidu-road",
    category: "峡谷公路",
    title: "房山十渡峡谷公路线",
    date: "周末一日",
    location: "北京房山 · 十渡",
    duration: "1天",
    difficulty: "轻松",
    price: "现场纯AA自理",
    people: "6-18人",
    hot: "峡谷",
    expired: true,
    images: ["/assets/images/shidu.jpg", "/assets/images/trips/preview-06.jpg", "/assets/images/trips/preview-07.jpg"],
    wechat: WECHAT_ID,
    intro: "北京西南方向经典峡谷自驾线，沿拒马河谷前行，适合看山谷、河道、栈道和周边农家餐。路线成熟，停车补给相对方便。",
    highlights: [],
    itinerary: ["08:30 北京西南集合出发", "10:30 进入十渡河谷段", "12:30 农家午餐", "14:00 观景/轻徒步自由活动", "16:30 返程"],
    includes: ["线路规划", "停车点建议", "车队领航", "游玩项目自理"]
  }
];

function decorateActivity(activity) {
  return {
    ...activity,
    className: classByCategory[activity.category] || "type-sky",
    coverImage: activity.images[0]
  };
}

const decoratedActivities = activities.map(decorateActivity);
const decoratedBanners = banners.map((banner) => ({
  ...banner,
  className: classByCategory[banner.category] || "type-sky",
  coverImage: banner.images[0]
}));

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
      const searchHit = !query || [activity.title, activity.category, activity.location, activity.difficulty].join(" ").toLowerCase().includes(query);
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
    if (!selectedActivity || selectedActivity.expired) return;
    wx.setClipboardData({
      data: WECHAT_ID,
      success() {
        wx.showToast({ title: "微信号已复制", icon: "success" });
      }
    });
  }
});
