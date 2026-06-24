Page({
  data: {
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