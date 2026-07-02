const site = require('../../content/site.js')
const stories = require('../../content/stories.js')

Page({
  data: {
    statusBarHeight: 20,
    dailyLine: '',
    stories: [],
    months: ['六月', '五月', '四月', '三月']
  },

  onLoad() {
    const sys = wx.getSystemInfoSync()
    this.setData({ statusBarHeight: sys.statusBarHeight })
    this.loadStories()
  },

  onShow() { this.loadStories() },

  loadStories() {
    const day = new Date().getDate()
    const dailyLine = site.dailyLines[day % site.dailyLines.length]
    this.setData({ dailyLine, stories })
  }
})
