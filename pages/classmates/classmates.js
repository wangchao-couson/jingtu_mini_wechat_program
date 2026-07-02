Page({
  data: {
    dailyLine: '因为一次出发，认识一群人。',
    networkNodes: [
      { name: '你', role: '中心', x: 50, y: 48 },
      { name: 'CC', role: '共创', x: 22, y: 28 },
      { name: '领队老王', role: '领队', x: 76, y: 24 },
      { name: '摄影师阿泽', role: '摄影', x: 24, y: 72 },
      { name: '小李', role: '志愿者', x: 68, y: 72 },
      { name: '小雨', role: '多次同行', x: 50, y: 15 }
    ],
    peopleCards: [],
    allClassmates: [],
    filteredClassmates: [],
    totalCount: 0,
    allTags: ['徒步', '骑行', '露营', '摄影', '旅行', '创业', '读书', '运动', '攀岩', '探险'],
    activeTag: '',
    searchKey: ''
  },

  onLoad() {
    this.loadClassmates()
  },

  onShow() {
    this.loadClassmates()
  },

  loadClassmates() {
    const classmates = wx.getStorageSync('jingtu_classmates') || []
    const peopleCards = [
      { id: 1, name: 'CC', role: '共创同学', cover: '/content/images/person-cc.jpg', desc: '热爱旅行 · 擅长提建议' },
      { id: 9, name: '领队老王', role: '领队', cover: '/content/images/person-leader.jpg', desc: '路线设计 · 安全第一' },
      { id: 2, name: '摄影师阿泽', role: '摄影师', cover: '/content/images/person-photographer.jpg', desc: '记录故事 · 捕捉光影' },
      { id: 6, name: '小李', role: '志愿者', cover: '/content/images/magazine-portrait.jpg', desc: '热心靠谱 · 组织协作' }
    ]
    this.setData({ allClassmates: classmates, totalCount: classmates.length, peopleCards })
    this.doFilter()
  },

  setTag(e) {
    this.setData({ activeTag: e.currentTarget.dataset.tag })
    this.doFilter()
  },

  onSearch(e) {
    this.setData({ searchKey: e.detail.value })
    this.doFilter()
  },

  showAllClassmates() {
    wx.pageScrollTo({ selector: '#classmate-list', duration: 320 })
  },

  doFilter() {
    let list = this.data.allClassmates
    if (this.data.activeTag) {
      list = list.filter(c => c.tags.includes(this.data.activeTag))
    }
    if (this.data.searchKey) {
      const kw = this.data.searchKey.toLowerCase()
      list = list.filter(c =>
        c.nickname.toLowerCase().includes(kw) ||
        c.bio.toLowerCase().includes(kw) ||
        c.city.toLowerCase().includes(kw)
      )
    }
    this.setData({ filteredClassmates: list })
  }
})
