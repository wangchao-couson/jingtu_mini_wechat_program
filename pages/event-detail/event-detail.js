Page({
  data: { event: null, hasJoined: false },

  onLoad(options) {
    const id = parseInt(options.id)
    const events = wx.getStorageSync('jingtu_events') || []
    const event = events.find(e => e.id === id)
    // Check if already joined
    const myJoins = wx.getStorageSync('jingtu_my_joins') || []
    const joined = myJoins.some(r => r.eventId === id)
    this.setData({ event: event || null, hasJoined: joined })
  },

  onShow() {
    const options = this.options || {}
    if (options.id) {
      const id = parseInt(options.id)
      const events = wx.getStorageSync('jingtu_events') || []
      const event = events.find(e => e.id === id)
      const myJoins = wx.getStorageSync('jingtu_my_joins') || []
      const joined = myJoins.some(r => r.eventId === id)
      this.setData({ event: event || null, hasJoined: joined })
    }
  },

  copyWechat() {
    const wechat = this.data.event && this.data.event.leader && this.data.event.leader.wechat
    if (!wechat) return
    wx.setClipboardData({
      data: wechat,
      success: () => wx.showToast({ title: '微信号已复制，打开微信添加领队', icon: 'success', duration: 2500 })
    })
  },

  joinEvent() {
    const event = this.data.event
    if (!event) return

    // Copy wechat first
    const wechat = event.leader && event.leader.wechat
    if (wechat) {
      wx.setClipboardData({
        data: wechat,
        success: () => {
          wx.showModal({
            title: '加入活动',
            content: '领队微信号已复制到剪贴板\\n\\n请打开微信添加领队「' + event.leader.name + '」\\n微信号: ' + wechat + '\\n\\n加入活动群后由领队统一安排',
            confirmText: '知道了',
            showCancel: false,
            success: () => {
              // Record join
              const myJoins = wx.getStorageSync('jingtu_my_joins') || []
              const already = myJoins.find(r => r.eventId === event.id)
              if (!already) {
                event.currentParticipants++
                wx.setStorageSync('jingtu_events',
                  (wx.getStorageSync('jingtu_events') || []).map(e => e.id === event.id ? event : e))
                myJoins.push({
                  id: Date.now(),
                  eventId: event.id,
                  eventTitle: event.title,
                  eventDate: event.date,
                  eventCover: event.cover,
                  time: new Date().toISOString()
                })
                wx.setStorageSync('jingtu_my_joins', myJoins)
                this.setData({ event, hasJoined: true })
              }
            }
          })
        }
      })
    }
  }
})