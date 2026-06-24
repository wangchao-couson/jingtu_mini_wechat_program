const app = getApp()
Page({
  data: {
    statusBarHeight: 20,
    greeting: '早安',
    userInitial: '途',
    companionCount: 6,
    totalKm: 143,
    stories: []
  },

  onLoad() {
    const sys = wx.getSystemInfoSync()
    this.setData({ statusBarHeight: sys.statusBarHeight })
    const h = new Date().getHours()
    this.setData({ greeting: h < 12 ? '早安' : h < 18 ? '下午好' : '晚上好' })
    this.loadStories()
  },

  onShow() { this.loadStories() },

  loadStories() {
    const events = wx.getStorageSync('jingtu_events') || []
    const faceMap = {
      1: ['阿','山','墨','雨','S'],
      2: ['小','大','墨','雨','A'],
      3: ['A','鱼','大','S','墨'],
      4: ['山','阿','老'],
      5: ['阿','墨','S','大','雨'],
      6: ['小','老','鱼','A','大']
    }
    const quotes = {
      2: '凌晨三点我们裹着睡袋坐在山顶，头顶的银河像一条发光的河。没有人说话，但所有人都知道这一刻会记很久。',
      1: '京西古道上的马蹄窝有几百年的历史。阿杰说，这条路古代商人走了上千年，今天我们22个人也走了一遍。',
      6: '篝火晚会上老王讲了他走川藏线的故事，小鹿弹了吉他。我突然觉得，这群人真好啊。',
      3: '25公里环湖，阳光洒在湖面上。Alex说这是他今年骑得最开心的一次。',
      4: '箭扣长城险峻壮美，山鹰带我们用绳索攀上了一段野长城。虽然累，但那种成就感无与伦比。',
      5: '鬼笑石上俯瞰北京城万家灯火，大家掏出手机拍个不停，然后安静地看了很久。'
    }
    const months = { 1:'6月',2:'6月',3:'6月',4:'7月',5:'7月',6:'6月' }
    const subTitles = {
      1:'在马蹄窝前，我们和历史打了个照面',
      2:'那一夜的银河，我们谁都没说话',
      3:'环湖25公里，阳光像碎金撒在湖面',
      4:'攀上野长城的那一段，心跳比风还响',
      5:'在鬼笑石俯瞰万家灯火，我们安静了很久',
      6:'策马奔腾和篝火旁的真心话'
    }

    const stories = events.map(e => ({
      ...e,
      month: months[e.id] || '7月',
      subtitle: subTitles[e.id] || '',
      faceList: faceMap[e.id] || ['阿','小','大'],
      quote: quotes[e.id] || ''
    }))
    this.setData({ stories })
  }
})