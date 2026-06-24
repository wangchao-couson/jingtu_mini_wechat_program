// 京途 · 年轻户外社区 · 微信小程序
// 产品形态：活动日历 + 照片墙 + 通讯录
// 所有交易通过微信群完成，小程序仅做展示和连接

App({
  onLaunch() {
    const userData = wx.getStorageSync('jingtu_user')
    if (!userData) {
      wx.setStorageSync('jingtu_user', {
        id: 1,
        nickname: '京途同学',
        avatar: '',
        city: '北京',
        bio: '热爱自然，在路上遇见更好的自己',
        tags: ['徒步', '摄影', '旅行'],
        joinDate: '2026-03-15',
        totalEvents: 7,
        totalKm: 143,
        totalDays: 15
      })
    }

    const seeded = wx.getStorageSync('jingtu_seeded')
    if (!seeded) {
      wx.setStorageSync('jingtu_events', getSeedEvents())
      wx.setStorageSync('jingtu_classmates', getSeedClassmates())
      wx.setStorageSync('jingtu_photos', getSeedPhotos())
      wx.setStorageSync('jingtu_announcements', getSeedAnnouncements())
      wx.setStorageSync('jingtu_moments', getSeedMoments())
      wx.setStorageSync('jingtu_seeded', true)
    }
  },

  globalData: { userInfo: null }
})

function getSeedEvents() {
  return [
    {
      id: 1,
      title: '京西古道徒步穿越',
      cover: '/assets/images/trips/preview-01.jpg',
      date: '7月5日 周六', duration: '1天',
      location: '北京 · 门头沟',
      distance: '12km', difficulty: '★☆☆☆☆',
      maxParticipants: 30, currentParticipants: 22,
      tags: ['入门', '古道', '文化'],
      status: 'registering',
      description: '京西古道是北京最经典的徒步路线之一，沿途可见马蹄窝、古村落、烽火台遗址。全程约12公里，上升300米，适合新手入门。',
      schedule: '08:00 苹果园集合 → 09:30 圈门 → 12:00 峰口庵午餐 → 14:30 马蹄窝 → 16:00 大台 → 17:30 返回',
      includes: ['往返交通', '户外保险', '领队服务', '简易午餐'],
      gear: '运动鞋、防晒帽、1L水、小背包',
      leader: { name: '阿杰', wechat: 'ajie_outdoor', qrcode: '' },
      photos: ['/assets/images/trips/preview-01.jpg', '/assets/images/trips/preview-02.jpg', '/assets/images/trips/preview-03.jpg'],
      participants: [{ name: '小明' }, { name: '小红' }, { name: '大伟' }]
    },
    {
      id: 2,
      title: '海坨山星空露营 · 两日一夜',
      cover: '/assets/images/trips/preview-04.jpg',
      date: '7月12-13日', duration: '2天1夜',
      location: '北京 · 延庆',
      distance: '8km', difficulty: '★★☆☆☆',
      maxParticipants: 25, currentParticipants: 18,
      tags: ['露营', '星空', '日出'],
      status: 'registering',
      description: '海坨山是北京第二高峰，夏季山顶草甸如茵，夜晚星空璀璨。我们将露营在山顶，迎接第二天的壮美日出。',
      schedule: 'Day1: 08:00出发 → 10:30大海坨村 → 15:00登顶 → 搭帐篷 → BBQ → 星空观测\nDay2: 05:00日出 → 08:00收营 → 10:00下山 → 15:00返京',
      includes: ['露营装备', '晚餐BBQ', '早餐', '户外保险', '领队服务'],
      gear: '登山鞋、冲锋衣、头灯、防蚊液',
      leader: { name: '小鹿', wechat: 'deer_photo', qrcode: '' },
      photos: ['/assets/images/trips/preview-04.jpg', '/assets/images/trips/preview-05.jpg'],
      participants: [{ name: '小鹿' }, { name: '大牛' }]
    },
    {
      id: 3,
      title: '雁栖湖环湖骑行 · 休闲游',
      cover: '/assets/images/trips/preview-06.jpg',
      date: '7月6日 周日', duration: '半天',
      location: '北京 · 怀柔',
      distance: '25km', difficulty: '★☆☆☆☆',
      maxParticipants: 20, currentParticipants: 14,
      tags: ['骑行', '休闲', '湖景'],
      status: 'registering',
      description: '沿着雁栖湖环湖绿道骑行，一路湖光山色，途经日出东方酒店、雁栖塔。全程25公里，路面平坦，适合所有人。',
      schedule: '09:00 集合 → 09:30出发 → 12:00环湖 → 12:30午餐 → 14:00结束',
      includes: ['自行车租赁', '头盔', '午餐简餐', '保险'],
      gear: '运动服、墨镜、防晒霜',
      leader: { name: 'Alex', wechat: 'alex_bike', qrcode: '' },
      photos: ['/assets/images/trips/preview-06.jpg', '/assets/images/trips/preview-07.jpg'],
      participants: []
    },
    {
      id: 4,
      title: '箭扣长城探险 · 高级路线',
      cover: '/assets/images/trips/preview-08.jpg',
      date: '7月19日 周六', duration: '1天',
      location: '北京 · 怀柔',
      distance: '10km', difficulty: '★★★★☆',
      maxParticipants: 15, currentParticipants: 8,
      tags: ['长城', '探险', '高级'],
      status: 'upcoming',
      description: '箭扣长城是明长城最险峻的一段，未经修缮的野长城保留了原始风貌。需要一定攀爬经验。',
      schedule: '06:30集合 → 08:00箭扣 → 12:00正北楼 → 15:00慕田峪 → 17:00返程',
      includes: ['往返交通', '专业领队', '保险', '路餐'],
      gear: '登山鞋必备、手套、头盔、2L水、能量补给',
      leader: { name: '山鹰', wechat: 'eagle_climb', qrcode: '' },
      photos: ['/assets/images/trips/preview-08.jpg'],
      participants: []
    },
    {
      id: 5,
      title: '香巴拉夜爬 · 城市夜景',
      cover: '/assets/images/trips/preview-09.jpg',
      date: '7月11日 周五', duration: '半天',
      location: '北京 · 香山',
      distance: '8km', difficulty: '★☆☆☆☆',
      maxParticipants: 40, currentParticipants: 35,
      tags: ['夜爬', '夜景', '社交'],
      status: 'registering',
      description: '傍晚出发，沿香巴拉路线登山，在鬼笑石俯瞰北京夜景。轻松休闲，适合下班后放松。',
      schedule: '18:30 香山 → 19:30 好汉坡 → 20:30 鬼笑石 → 22:00结束',
      includes: ['领队服务', '头灯借用', '保险'],
      gear: '运动鞋、薄外套、水',
      leader: { name: '阿杰', wechat: 'ajie_outdoor', qrcode: '' },
      photos: ['/assets/images/trips/preview-09.jpg'],
      participants: []
    },
    {
      id: 6,
      title: '坝上草原骑马 · 两日行',
      cover: '/assets/images/trips/preview-10.jpg',
      date: '6月28-29日', duration: '2天1夜',
      location: '河北 · 丰宁',
      distance: '骑马15km', difficulty: '★★☆☆☆',
      maxParticipants: 30, currentParticipants: 30,
      tags: ['骑马', '草原', '篝火'],
      status: 'finished',
      description: '坝上草原骑马体验，篝火晚会住蒙古包。30位同学已满员出发！',
      schedule: 'Day1: 07:00出发 → 12:00坝上 → 14:00骑马 → 19:00篝火\nDay2: 05:00日出 → 09:00徒步 → 16:00返京',
      includes: ['往返交通', '蒙古包', '骑马', '三正一早', '篝火', '保险'],
      gear: '长裤、运动鞋、防晒、驱蚊',
      leader: { name: '小鹿', wechat: 'deer_photo', qrcode: '' },
      photos: ['/assets/images/trips/preview-10.jpg', '/assets/images/trips/preview-11.jpg', '/assets/images/trips/preview-12.jpg'],
      participants: []
    }
  ]
}

function getSeedClassmates() {
  return [
    { id: 1, nickname: '阿杰', avatar: '', city: '北京', bio: '走过26座山，还在路上', tags: ['徒步', '露营', '骑行'], eventCount: 42, commonEvents: 5, wechat: 'ajie_outdoor' },
    { id: 2, nickname: '小鹿', avatar: '', city: '北京', bio: '户外摄影师，用镜头记录山野', tags: ['摄影', '露营', '旅行'], eventCount: 28, commonEvents: 3, wechat: 'deer_photo' },
    { id: 3, nickname: '山鹰', avatar: '', city: '北京', bio: '攀岩爱好者，挑战自我极限', tags: ['攀岩', '徒步', '探险'], eventCount: 35, commonEvents: 4, wechat: 'eagle_climb' },
    { id: 4, nickname: 'Alex', avatar: '', city: '北京', bio: '骑行穿越中国，下一站西藏', tags: ['骑行', '旅行', '摄影'], eventCount: 19, commonEvents: 2, wechat: 'alex_bike' },
    { id: 5, nickname: '小雨', avatar: '', city: '北京', bio: '喜欢边走边画的手帐女孩', tags: ['徒步', '读书', '旅行'], eventCount: 14, commonEvents: 4, wechat: 'rainy_journal' },
    { id: 6, nickname: '大牛', avatar: '', city: '北京', bio: '退伍军人，最靠谱的收队', tags: ['徒步', '露营', '运动'], eventCount: 31, commonEvents: 5, wechat: 'daniu_strong' },
    { id: 7, nickname: '墨墨', avatar: '', city: '北京', bio: '互联网打工人，周末必进山', tags: ['徒步', '摄影', '创业'], eventCount: 22, commonEvents: 2, wechat: 'momo_404' },
    { id: 8, nickname: 'Sunny', avatar: '', city: '上海', bio: '新北京人，探索京郊每个角落', tags: ['徒步', '骑行', '旅行'], eventCount: 8, commonEvents: 1, wechat: 'sunny_bj' },
    { id: 9, nickname: '老王', avatar: '', city: '北京', bio: '退休后开始徒步，越走越年轻', tags: ['徒步', '读书', '露营'], eventCount: 56, commonEvents: 1, wechat: 'laowang_hike' },
    { id: 10, nickname: '小鱼儿', avatar: '', city: '北京', bio: '心理咨询师，用自然疗愈心灵', tags: ['徒步', '露营', '摄影'], eventCount: 16, commonEvents: 3, wechat: 'fish_heal' }
  ]
}

function getSeedPhotos() {
  return [
    { id: 1, url: '/assets/images/trips/preview-01.jpg', event: '京西古道', user: '阿杰', time: '3天前' },
    { id: 2, url: '/assets/images/trips/preview-02.jpg', event: '京西古道', user: '小鹿', time: '3天前' },
    { id: 3, url: '/assets/images/trips/preview-03.jpg', event: '京西古道', user: '墨墨', time: '3天前' },
    { id: 4, url: '/assets/images/trips/preview-04.jpg', event: '海坨山露营', user: '大牛', time: '5天前' },
    { id: 5, url: '/assets/images/trips/preview-05.jpg', event: '海坨山露营', user: '小鹿', time: '5天前' },
    { id: 6, url: '/assets/images/trips/preview-06.jpg', event: '雁栖湖骑行', user: 'Alex', time: '1周前' }
  ]
}

function getSeedAnnouncements() {
  return [
    { id: 1, text: '\U0001f389 欢迎新同学！本周有15位新伙伴加入京途', time: '2小时前' },
    { id: 2, text: '\U0001f4f7 京途影展第一季开始征稿，用照片讲你的户外故事', time: '1天前' },
    { id: 3, text: '\u26a0\ufe0f 夏季户外安全提示：注意防暑、防蚊、防雷雨', time: '3天前' }
  ]
}

function getSeedMoments() {
  return [
    { user: '阿杰', action: '完成了', target: '京西古道徒步', time: '3天前' },
    { user: '小鹿', action: '分享了', target: '海坨山星空照片', time: '5天前' },
    { user: '小雨', action: '第一次参加', target: '户外徒步活动', time: '1周前' },
    { user: '山鹰', action: '发起了新活动', target: '箭扣长城探险', time: '2天前' },
    { user: '墨墨', action: '完成了', target: '雁栖湖环湖骑行', time: '1周前' }
  ]
}
