const stories = require('../../content/stories.js')

Page({
  data: { story: null, media: [], people: ['C', '王', '泽', '李', '雨', '鹏'] },

  onLoad(options) {
    const story = stories.find(item => item.id === options.id) || stories[0]
    const media = [
      { type: 'video', url: story.coverUrl, label: '视频封面 1' },
      { type: 'image', url: '/assets/images/trips/preview-01.jpg', label: '图片 1' },
      { type: 'image', url: '/assets/images/trips/preview-04.jpg', label: '图片 2' },
      { type: 'video', url: '/assets/images/trips/preview-09.jpg', label: '视频封面 2' },
      { type: 'image', url: '/assets/images/trips/preview-10.jpg', label: '图片 3' }
    ]
    this.setData({ story, media })
    wx.setNavigationBarTitle({ title: story.title })
  }
})
