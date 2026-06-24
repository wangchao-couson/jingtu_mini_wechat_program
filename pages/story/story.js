Page({
  data: { webUrl: '' },
  onLoad(options) {
    const id = options.id || '1'
    const base = 'https://cloud1-1gs986nt7c23f0a5.tcloudbaseapp.com'
    this.setData({ webUrl: `${base}/index.html?id=${id}` })
  }
})
