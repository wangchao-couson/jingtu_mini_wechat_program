Page({
  data: {
    statusBarHeight: 20,
    user: {},
    participations: [],
    visitedPlaces: ['北京·门头沟', '北京·延庆', '北京·怀柔', '河北·丰宁'],
    myPhotos: [],
    myStories: []
  },

  onLoad() {
    const sys = wx.getSystemInfoSync()
    this.setData({ statusBarHeight: sys.statusBarHeight })
    this.loadData()
  },

  onShow() { this.loadData() },

  loadData() {
    const user = wx.getStorageSync('jingtu_user') || {}
    const joins = wx.getStorageSync('jingtu_my_joins') || []
    const photos = wx.getStorageSync('jingtu_photos') || []
    this.setData({
      user,
      participations: joins,
      myPhotos: photos.slice(0, 3),
      myStories: [
        { id: 1, date: '2026-06-20', title: '第一次走完京西古道，马蹄窝太震撼了', event: '京西古道徒步' },
        { id: 2, date: '2026-06-15', title: '海坨山顶的银河，此生难忘', event: '海坨山露营' }
      ]
    })
  },

  goEvents() { wx.switchTab({ url: '/pages/events/events' }) },
  editProfile() { wx.showToast({ title: '编辑功能开发中', icon: 'none' }) },

  showAbout() {
    wx.showModal({
      title: '关于京途',
      content: '京途 | 年轻户外社区\n版本 2.0 MVP\n活动日历 · 照片墙 · 通讯录\n\n北极星指引方向，京途陪伴成长。\n\n所有活动通过微信群组织，小程序仅做展示与连接。',
      showCancel: false
    })
  },

  clearCache() {
    wx.showModal({
      title: '清除缓存',
      content: '确定要清除所有本地数据吗？',
      success: (res) => {
        if (res.confirm) {
          wx.clearStorageSync()
          wx.showToast({ title: '已清除', icon: 'success' })
          setTimeout(() => wx.reLaunch({ url: '/pages/index/index' }), 1000)
        }
      }
    })
  }
})