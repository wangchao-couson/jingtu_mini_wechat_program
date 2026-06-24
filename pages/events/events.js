Page({
  data:{tab:'open',all:[],list:[]},
  onLoad(){const e=wx.getStorageSync('jingtu_events')||[];this.setData({all:e});this.filter()},
  onShow(){const e=wx.getStorageSync('jingtu_events')||[];this.setData({all:e});this.filter()},
  switchTab(e){this.setData({tab:e.currentTarget.dataset.tab});this.filter()},
  filter(){
    const m={open:'registering',soon:'upcoming',done:'finished'};
    const faceMap={1:['阿','山','墨','雨','S'],2:['小','大','墨','雨','A'],3:['A','鱼','大','S'],4:['山','阿','老'],5:['阿','墨','S','大'],6:['小','老','鱼','A','大']};
    let l=this.data.all.filter(x=>x.status===m[this.data.tab]).map(e=>({...e,faceList:faceMap[e.id]||['阿','小','大'].slice(0,3)}));
    this.setData({list:l})
  }
})