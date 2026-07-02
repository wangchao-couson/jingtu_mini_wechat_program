const teams = require('../../content/teams.js')
const roles = require('../../content/roles.js')
const site = require('../../content/site.js')

Page({
  data: { team: null, leader: null, site },

  onLoad(options) {
    this.loadTeam(options.id)
  },

  onShow() {
    const options = this.options || {}
    if (options.id) this.loadTeam(options.id)
  },

  loadTeam(id) {
    const team = teams.find(item => item.id === id) || teams[0]
    const leader = roles.find(item => item.id === team.leaderId) || null
    this.setData({ team, leader })
    if (team && team.title) wx.setNavigationBarTitle({ title: team.title })
  },

  copyWechat() {
    const leader = this.data.leader
    if (!leader || !leader.wechat) return
    wx.setClipboardData({
      data: leader.wechat,
      success: () => wx.showToast({ title: '微信号已复制', icon: 'success' })
    })
  },

  openRole() {
    const leader = this.data.leader
    if (!leader || !leader.id) return
    wx.navigateTo({ url: '/pages/role-detail/role-detail?id=' + leader.id })
  },

  previewPhoto(e) {
    const current = e.currentTarget.dataset.src
    const urls = (this.data.team && this.data.team.gallery) || []
    if (!current || !urls.length) return
    wx.previewImage({ current, urls })
  },

  stopPhotoMove() {
    return false
  }
})
