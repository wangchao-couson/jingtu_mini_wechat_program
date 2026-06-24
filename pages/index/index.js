const app = getApp()

Page({
  data: {
    statusBarHeight: 20,
    greeting: '早安',
    userInitial: '途',
    recentEvents: [],
    moments: [],
    photos: [],
    announcements: []
  },

  onLoad() {
    const sys = wx.getSystemInfoSync()
    this.setData({ statusBarHeight: sys.statusBarHeight })

    // Greeting
    const hour = new Date().getHours()
    let greeting = '早安'
    if (hour >= 12 && hour < 18) greeting = '下午好'
    else if (hour >= 18) greeting = '晚上好'
    this.setData({ greeting })

    // Load from storage
    const events = wx.getStorageSync('jingtu_events') || []
    this.setData({
      recentEvents: events.filter(e => e.status === 'registering').slice(0, 3),
      moments: wx.getStorageSync('jingtu_moments') || [],
      photos: wx.getStorageSync('jingtu_photos') || [],
      announcements: wx.getStorageSync('jingtu_announcements') || []
    })

    const user = wx.getStorageSync('jingtu_user') || {}
    this.setData({ userInitial: user.nickname ? user.nickname[0] : '途' })
  },

  onShow() {
    const events = wx.getStorageSync('jingtu_events') || []
    this.setData({
      recentEvents: events.filter(e => e.status === 'registering').slice(0, 3)
    })
  }
})