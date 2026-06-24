Page({
  data: {
    currentTab: 'registering',
    allEvents: [],
    filteredEvents: []
  },

  onLoad() {
    this.loadEvents()
  },

  onShow() {
    this.loadEvents()
  },

  loadEvents() {
    const events = wx.getStorageSync('jingtu_events') || []
    this.setData({ allEvents: events })
    this.filterEvents()
  },

  switchTab(e) {
    const tab = e.currentTarget.dataset.tab
    this.setData({ currentTab: tab })
    this.filterEvents()
  },

  filterEvents() {
    const filtered = this.data.allEvents.filter(e => e.status === this.data.currentTab)
    this.setData({ filteredEvents: filtered })
  }
})