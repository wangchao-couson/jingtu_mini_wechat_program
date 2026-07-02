Page({
  data: { event: null, statusText: '', detailItems: [] },

  onLoad(options) {
    const id = parseInt(options.id)
    const events = wx.getStorageSync('jingtu_events') || []
    this.setEvent(events.find(e => e.id === id) || null)
  },

  onShow() {
    const o = this.options || {}
    if (o.id) {
      const id = parseInt(o.id)
      const events = wx.getStorageSync('jingtu_events') || []
      this.setEvent(events.find(e => e.id === id) || null)
    }
  },

  setEvent(event) {
    if (!event) {
      this.setData({ event: null, statusText: '', detailItems: [] })
      return
    }

    const statusText = event.status === 'registering' ? '正在出发' : event.status === 'upcoming' ? '活动预告' : '故事回顾'
    const detailItems = [
      { label: '日期', value: event.date },
      { label: '时长', value: event.duration },
      { label: '地点', value: event.location },
      { label: '距离', value: event.distance }
    ]
    this.setData({ event, statusText, detailItems })
  },

  copyWechat() {
    const wechat = this.data.event && this.data.event.leader && this.data.event.leader.wechat
    if (!wechat) return
    wx.setClipboardData({
      data: wechat,
      success: () => wx.showToast({
        title: '微信号已复制，打开微信添加领队',
        icon: 'success',
        duration: 2500
      })
    })
  },

  consultLeader() {
    const event = this.data.event
    if (!event || !event.leader || !event.leader.wechat) return

    wx.setClipboardData({
      data: event.leader.wechat,
      success: () => {
        wx.showModal({
          title: '咨询领队',
          content: '领队微信号已复制\n\n请打开微信添加「' + event.leader.name + '」\n微信号: ' + event.leader.wechat + '\n\n行程、装备和集合信息由领队统一沟通',
          confirmText: '知道了',
          showCancel: false
        })
      }
    })
  },

  previewPhoto(e) {
    const current = e.currentTarget.dataset.src
    const urls = (this.data.event && this.data.event.photos) || []
    if (!current || !urls.length) return
    wx.previewImage({ current, urls })
  },

  stopPhotoMove() {
    return false
  }
})
