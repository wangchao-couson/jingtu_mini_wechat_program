Page({
  data: { classmate: null, profile: null },

  onLoad(options) {
    const id = parseInt(options.id)
    const classmates = wx.getStorageSync('jingtu_classmates') || []
    const classmate = classmates.find(c => c.id === id) || null
    this.setData({ classmate, profile: this.buildProfile(classmate) })
  },

  buildProfile(classmate) {
    if (!classmate) return null
    const isCC = classmate.nickname === 'CC'
    const firstTag = classmate.tags && classmate.tags[0] ? classmate.tags[0] : '同行'
    const contacts = isCC ? ['摄影师阿泽', '领队老王', '小李'] : ['CC', '摄影师阿泽', '小雨']
    return {
      roleLine: isCC ? '共创同学 / 路线灵感池建议人' : firstTag + '同路人',
      contributions: isCC
        ? ['提出「路线灵感池」建议', '参与京途小程序共创', '把南太行故事整理成周末特种兵自驾记录']
        : ['参与京途故事记录', '协助新人融入队伍', '在活动中贡献 ' + firstTag + ' 经验'],
      activities: isCC
        ? ['紫荆关漂流', '乌兰布统草原日落', '南太行周末特种兵组队自驾']
        : ['紫荆关漂流', '京西古道徒步', '坝上草原回忆队'],
      contacts: contacts.map(name => ({ name, initial: name[0] })),
      contactsText: contacts.join(' · ')
    }
  },

  copyWechat() {
    const wechat = this.data.classmate && this.data.classmate.wechat
    if (!wechat) {
      wx.showToast({ title: '未设置微信号', icon: 'none' })
      return
    }
    wx.setClipboardData({
      data: wechat,
      success: () => wx.showToast({ title: '微信号已复制，可沟通同行故事', icon: 'success', duration: 2200 })
    })
  }
})
