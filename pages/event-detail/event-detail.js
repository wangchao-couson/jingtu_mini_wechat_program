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

    const statusText = event.status === 'registering' ? '招募中' : event.status === 'upcoming' ? '即将开始' : '已结束'
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

  joinEvent() {
    const event = this.data.event
    if (!event || !event.leader || !event.leader.wechat) return

    wx.setClipboardData({
      data: event.leader.wechat,
      success: () => {
        wx.showModal({
          title: '加入活动',
          content: '领队微信号已复制\n\n请打开微信添加「' + event.leader.name + '」\n微信号: ' + event.leader.wechat + '\n\n加入活动群后由领队统一安排',
          confirmText: '知道了',
          showCancel: false,
          success: () => {
            const joins = wx.getStorageSync('jingtu_my_joins') || []
            if (!joins.find(r => r.eventId === event.id)) {
              event.currentParticipants++
              const allEvents = wx.getStorageSync('jingtu_events') || []
              wx.setStorageSync('jingtu_events',
                allEvents.map(e => e.id === event.id ? event : e))
              joins.push({
                id: Date.now(),
                eventId: event.id,
                eventTitle: event.title,
                eventDate: event.date,
                eventCover: event.cover,
                time: new Date().toISOString()
              })
              wx.setStorageSync('jingtu_my_joins', joins)
              this.setEvent(event)
            }
          }
        })
      }
    })
  }
})
