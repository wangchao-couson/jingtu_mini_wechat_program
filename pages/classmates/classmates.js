Page({
  data: {
    dailyLine: '因为一次活动，认识了一群人。',
    networkNodes: [
      { name: 'Carson', role: '共创', x: 48, y: 12 },
      { name: 'CC', role: '路线灵感', x: 18, y: 42 },
      { name: '老王', role: '故事', x: 68, y: 42 },
      { name: '小鹿', role: '摄影', x: 35, y: 72 },
      { name: '阿杰', role: '领队', x: 78, y: 74 }
    ],
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
    this.setData({ allClassmates: classmates, totalCount: classmates.length })
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
