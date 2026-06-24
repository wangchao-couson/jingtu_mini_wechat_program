Page({
  data:{
    statusBarHeight:20,user:{},participations:[],topCompanions:[],
    visitedPlaces:['北京·门头沟','北京·延庆','北京·怀柔','河北·丰宁'],
    memoryText:'那晚星空下，我们裹着睡袋聊了一个通宵',
    memoryMeta:'2026年6月 · 海坨山 · 和小鹿、大牛、墨墨一起'
  },
  onLoad(){const s=wx.getSystemInfoSync();this.setData({statusBarHeight:s.statusBarHeight});this.load()},
  onShow(){this.load()},
  load(){
    const u=wx.getStorageSync('jingtu_user')||{};
    const j=wx.getStorageSync('jingtu_my_joins')||[];
    // Mock companion ranking
    const comps=[
      {id:1,name:'阿杰',bio:'走过26座山，还在路上',count:5},
      {id:2,name:'大牛',bio:'退伍军人，最靠谱的收队',count:5},
      {id:3,name:'小雨',bio:'喜欢边走边画的手帐女孩',count:4}
    ];
    // Rotate memory text
    const mems=[
      {t:'那晚星空下，我们裹着睡袋聊了一个通宵',m:'2026年6月 · 海坨山 · 和小鹿、大牛、墨墨一起'},
      {t:'马蹄窝前,阿杰讲起了古道的故事，大家听得入神',m:'2026年6月 · 京西古道 · 和山鹰、墨墨、小雨一起'},
      {t:'策马奔腾后篝火升起，老王的故事让所有人都安静了',m:'2026年6月 · 坝上草原 · 和老王、小鱼儿、Alex一起'}
    ];
    const mem=mems[Math.floor(Math.random()*mems.length)];
    this.setData({user:u,participations:j,topCompanions:comps,memoryText:mem.t,memoryMeta:mem.m})
  },
  goEvents(){wx.switchTab({url:'/pages/events/events'})},
  editProfile(){wx.showToast({title:'编辑功能开发中',icon:'none'})},
  showAbout(){wx.showModal({title:'关于京途',content:'京途 | 年轻户外社区\\n版本 3.0 · 同学录\\n\\n和有趣的人，一起去探索更广阔的世界。\\n\\n北极星指引方向，京途陪伴成长。',showCancel:false})}
})