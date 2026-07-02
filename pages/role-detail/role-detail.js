const roles = require('../../content/roles.js')
const site = require('../../content/site.js')

Page({
  data: { role: null, site },

  onLoad(options) {
    this.loadRole(options.id)
  },

  loadRole(id) {
    const role = roles.find(item => item.id === id) || roles[0]
    this.setData({ role })
    if (role && role.name) wx.setNavigationBarTitle({ title: role.name })
  },

  copyWechat() {
    const role = this.data.role
    if (!role || !role.wechat) return
    wx.setClipboardData({
      data: role.wechat,
      success: () => wx.showToast({ title: '微信号已复制', icon: 'success' })
    })
  }
})
