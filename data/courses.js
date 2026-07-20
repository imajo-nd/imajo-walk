export const courses = [
  {
    id: 'sake-walk', title: '酒蔵めぐり', icon: '🍶', transport: '徒歩', duration: '約60〜90分',
    lead: '今庄宿を歩きながら、酒造りの歴史と町並みを楽しむコース。',
    spots: ['horiguchi','kitazen','shirakoma','hatakeyama']
  },
  {
    id: 'souvenir-walk', title: 'おみやげめぐり', icon: '🎁', transport: '徒歩', duration: '約45〜60分',
    lead: '今庄ならではの食品や特産品、暮らしの品を探す町歩き。',
    spots: ['station-shop','yoshigo','takano','kurashiya','takaya']
  },
  {
    id: 'soba-walk', title: '今庄おろしそば巡り', icon: '🍜', transport: '徒歩', duration: '約60〜90分',
    lead: '今庄駅と宿場町周辺で、個性豊かなそば店を巡る徒歩版。',
    spots: ['rokusuke','furusato','chubei','obachan','fuwari']
  },
  {
    id: 'soba-drive', title: '今庄おろしそば巡り', icon: '🚗', transport: '車', duration: '約2〜3時間',
    lead: '徒歩圏の店に郊外の名店を加えた、今庄全域のおろしそば巡り。',
    spots: ['rokusuke','furusato','chubei','obachan','fuwari','tsuchinoeki','takura-shokudo','itadori']
  },
  {
    id: 'pass-drive', title: '峠めぐり', icon: '⛰', transport: '車', duration: '約2〜3時間',
    lead: '交通の要衝だった今庄を、四つの峠から体感する歴史ドライブ。',
    spots: ['kinome-pass','yamanaka-pass','yuo-pass','tochinoki-pass']
  }
]

export const getCourse = id => courses.find(course => course.id === id)
