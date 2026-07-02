const routeIdeas = require('../../content/route-ideas.js')

Page({
  data: { route: null },

  onLoad(options) {
    const route = routeIdeas.find(item => item.id === options.id) || routeIdeas[0]
    this.setData({ route })
    if (route && route.title) wx.setNavigationBarTitle({ title: route.title })
  },

  recommend() {
    wx.showModal({
      title: '路线灵感池',
      content: '这条路线正在共创中。你可以先联系领队或在群里补充建议，成熟后会发布为正式出发。',
      confirmText: '知道了',
      showCancel: false
    })
  }
})
