const WECHAT_ID = "coulson_pro";

const categories = ["全部", "山水公路", "长城古镇", "草原天路", "湖库环线", "峡谷公路"];

const classByCategory = {
  "山水公路": "type-green",
  "长城古镇": "type-gold",
  "草原天路": "type-blue",
  "湖库环线": "type-teal",
  "峡谷公路": "type-orange"
};

const banners = [
  {
    title: "百里山水画廊",
    subtitle: "延庆最经典山水自驾线，河谷、公路、村落和观景台一路展开。",
    category: "山水公路",
    activityId: "baili-gallery",
    image: "/assets/images/baili.jpg"
  },
  {
    title: "古北水镇 · 司马台",
    subtitle: "夜景古镇加长城视野，适合周末轻度假和家庭自驾。",
    category: "长城古镇",
    activityId: "gubei-simatai",
    image: "/assets/images/shidu.jpg"
  },
  {
    title: "密云水库环湖",
    subtitle: "水库观景、山路弯道、鱼街午餐，一天往返刚刚好。",
    category: "湖库环线",
    activityId: "miyun-lake",
    image: "/assets/images/miyun.jpg"
  }
];

const activities = [
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
    image: "/assets/images/baili.jpg",
    wechat: WECHAT_ID,
    intro: "从延庆城区出发，沿滦赤路进入千家店镇，串联硅化木、滴水壶、乌龙峡谷一带的山水公路。路线弯道舒展、停车点多，是北京周边非常成熟的一日自驾线路。",
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
    image: "/assets/images/shidu.jpg",
    wechat: WECHAT_ID,
    intro: "北京东北方向的轻度假自驾线，适合朋友、情侣和亲子。白天看古北口山势与长城，傍晚进入古北水镇，夜间可远眺司马台长城灯光。",
    itinerary: ["D1 10:00 北京出发，京承高速前往密云", "D1 12:30 古北口午餐，下午游览古镇", "D1 19:00 夜景自由活动", "D2 09:30 睡到自然醒，周边短途观景", "D2 14:00 返程"],
    includes: ["路线规划", "住宿建议", "停车与入园提示", "餐食/住宿/门票自理"]
  },
  {
    id: "grassland-road",
    category: "草原天路",
    title: "张北草原天路周末自驾",
    date: "夏秋周末可约",
    location: "河北张家口 · 张北",
    duration: "2天1晚",
    difficulty: "中等",
    price: "现场纯AA自理",
    people: "4-16人",
    hot: "夏秋",
    expired: false,
    image: "/assets/images/baili.jpg",
    wechat: WECHAT_ID,
    intro: "从北京出发北上张家口，体验草原天路东线或西线的开阔视野。适合夏季避暑和秋季看风车、草坡、落日。",
    itinerary: ["D1 08:00 北京集合出发", "D1 12:30 张北午餐后进入草原天路", "D1 17:30 落日观景，入住张北", "D2 09:30 继续草原公路轻巡游", "D2 15:00 返程"],
    includes: ["两日路线规划", "车队节奏控制", "住宿区域建议", "油费/过路费/住宿自理"]
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
    image: "/assets/images/miyun.jpg",
    wechat: WECHAT_ID,
    intro: "适合第一次参加自驾活动的轻松线路，围绕密云水库周边观景道路、鱼街午餐和山间咖啡点设计，不赶路，重点是舒服地看山看水。",
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
    image: "/assets/images/shidu.jpg",
    wechat: WECHAT_ID,
    intro: "北京西南方向经典峡谷自驾线，沿拒马河谷前行，适合看山谷、河道、栈道和周边农家餐。路线成熟，停车补给相对方便。",
    itinerary: ["08:30 北京西南集合出发", "10:30 进入十渡河谷段", "12:30 农家午餐", "14:00 观景/轻徒步自由活动", "16:30 返程"],
    includes: ["线路规划", "停车点建议", "车队领航", "游玩项目自理"]
  },
  {
    id: "baihua-cuan",
    category: "山水公路",
    title: "百花山 · 爨底下古村线",
    date: "周末一日/两日",
    location: "北京门头沟 · 斋堂",
    duration: "1-2天",
    difficulty: "中等",
    price: "现场纯AA自理",
    people: "4-12人",
    hot: "山路",
    expired: true,
    image: "/assets/images/baili.jpg",
    wechat: WECHAT_ID,
    intro: "门头沟西线山路自驾，适合喜欢山路和古村氛围的车友。可根据季节选择百花山观景、爨底下古村停留或斋堂周边轻度假。",
    itinerary: ["09:00 门头沟集合，确认路况", "10:30 山路观景段行驶", "12:30 斋堂午餐", "14:00 爨底下古村/百花山方向游览", "16:30 返程或留宿"],
    includes: ["山路路线规划", "车队安全提醒", "古村/住宿建议", "门票/餐饮/住宿自理"]
  }
];

function decorateActivity(activity) {
  return {
    ...activity,
    className: classByCategory[activity.category] || "type-green"
  };
}

const decoratedActivities = activities.map(decorateActivity);
const decoratedBanners = banners.map((banner) => ({
  ...banner,
  className: classByCategory[banner.category] || "type-green"
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
    wx.setClipboardData({
      data: WECHAT_ID,
      success() {
        wx.showToast({ title: "微信号已复制", icon: "success" });
      }
    });
  }
});
