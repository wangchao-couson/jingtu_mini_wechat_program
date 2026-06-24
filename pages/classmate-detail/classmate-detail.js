Page({
  data: { classmate: null },

  onLoad(options) {
    const id = parseInt(options.id)
    const classmates = wx.getStorageSync('jingtu_classmates') || []
    this.setData({ classmate: classmates.find(c => c.id === id) || null })
  },

  copyWechat() {
    const wechat = this.data.classmate && this.data.classmate.wechat
    if (!wechat) {
      wx.showToast({ title: '未设置微信号', icon: 'none' })
      return
    }
    wx.setClipboardData({
      data: wechat,
      success: () => wx.showToast({ title: '微信号已复制，打开微信添加', icon: 'success', duration: 2000 })
    })
  }
})