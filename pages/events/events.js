Page({
  data:{tab:'open',all:[],list:[]},
  onLoad(){const e=wx.getStorageSync('jingtu_events')||[];this.setData({all:e});this.filter()},
  onShow(){const e=wx.getStorageSync('jingtu_events')||[];this.setData({all:e});this.filter()},
  switchTab(e){this.setData({tab:e.currentTarget.dataset.tab});this.filter()},
  filter(){
    const m={open:'registering',soon:'upcoming',done:'finished'};
    const faceMap={1:['阿','山','墨','雨','S'],2:['小','大','墨','雨','A'],3:['A','鱼','大','S'],4:['山','阿','老'],5:['阿','墨','S','大'],6:['小','老','鱼','A','大']};
    const templateMap={
      1:{type:'trail',label:'古道徒步',tone:'forest'},
      2:{type:'camp',label:'星空露营',tone:'night'},
      3:{type:'ride',label:'湖畔骑行',tone:'lake'},
      4:{type:'climb',label:'长城进阶',tone:'stone'},
      5:{type:'night',label:'城市夜爬',tone:'ember'},
      6:{type:'grass',label:'草原周末',tone:'field'}
    };
    let l=this.data.all.filter(x=>x.status===m[this.data.tab]).map(e=>({
      ...e,
      faceList:faceMap[e.id]||['阿','小','大'].slice(0,3),
      template:templateMap[e.id]||{type:'trail',label:'京途活动',tone:'forest'}
    }));
    this.setData({list:l})
  }
})
