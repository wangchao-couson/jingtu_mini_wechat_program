const site = require('../../content/site.js')
const stories = require('../../content/stories.js')

Page({
  data: {
    statusBarHeight: 20,
    stories: [],
    sloganTop: '和有趣的人',
    sloganBottom: '一起去探索更广阔的世界'
  },

  onLoad() {
    const sys = wx.getSystemInfoSync()
    this.setData({ statusBarHeight: sys.statusBarHeight })
    this.loadStories()
  },

  onShow() { this.loadStories() },

  loadStories() {
    this.setData({ stories })
  },

  openFirstStory() {
    const first = this.data.stories[0]
    if (!first) return
    wx.navigateTo({ url: '/pages/story/story?id=' + first.id })
  }
})
