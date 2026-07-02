const teams = require('../../content/teams.js')
const roles = require('../../content/roles.js')
const site = require('../../content/site.js')

Page({
  data: {
    tab: 'open',
    all: [],
    list: [],
    hero: site.discoverHero,
    routeIdeas: [
      { title: '阿那亚', recommender: 'CC 推荐', reason: '适合周末放松、拍照、看海。', cover: '/assets/images/trips/preview-15.jpg', count: 12, status: '收集中' },
      { title: '玉渡山', recommender: '京途领队推荐', reason: '北京周边稳定徒步路线，适合新人。', cover: '/assets/images/trips/preview-07.jpg', count: 18, status: '可成行' }
    ]
  },

  onLoad() {
    this.setData({ all: this.decorateTeams(teams) })
    this.filter()
  },

  onShow() {
    this.setData({ all: this.decorateTeams(teams) })
    this.filter()
  },

  switchTab(e) {
    this.setData({ tab: e.currentTarget.dataset.tab })
    this.filter()
  },

  decorateTeams(items) {
    const roleMap = roles.reduce((map, role) => {
      map[role.id] = role
      return map
    }, {})
    const faceMap = {
      'team-haituo-camp': ['小', '鹿', '墨', '雨', 'S'],
      'team-jingxi-trail': ['阿', '山', '墨', '雨'],
      'team-yanqi-ride': ['A', '鱼', '大', 'S'],
      'team-jiankou-greatwall': ['山', '阿', '老'],
      'team-bashang-memory': ['小', '老', '鱼', 'A']
    }
    return items.map(team => {
      const faceList = faceMap[team.id] || ['京', '途', '山']
      const currentCount = parseInt((team.peopleText || '').split('/')[0], 10) || faceList.length
      return {
        ...team,
        leader: roleMap[team.leaderId] || {},
        faceList,
        extraPeopleText: Math.max(currentCount - faceList.length, 0),
        template: { label: team.kind || '京途队伍', tone: team.status === 'finished' ? 'field' : 'forest' }
      }
    })
  },

  filter() {
    const statusMap = { open: 'registering', soon: 'upcoming', done: 'finished' }
    const list = this.data.all.filter(team => team.status === statusMap[this.data.tab])
    this.setData({ list })
  }
})
