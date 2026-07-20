export const categories = [
  { key: 'history', label: '歴史', icon: '🏯', description: '宿場町、峠、鉄道・土木遺産' },
  { key: 'eat', label: '食べる', icon: '🍜', description: 'そば、食事処、カフェ・甘味' },
  { key: 'shop', label: '買う', icon: '🛍', description: '酒蔵、特産品、おみやげ、地元のお店' },
  { key: 'spot', label: 'スポット', icon: '📍', description: '自然、景勝地、ダム、公園' },
  { key: 'play', label: '遊ぶ・体験', icon: '🎿', description: 'アウトドア、温泉、雪遊び' },
  { key: 'stay', label: '泊まる', icon: '🛏', description: '旅館、古民家宿、ゲストハウス' },
  { key: 'access', label: 'アクセス', icon: '🚉', description: '駅、IC、駐車場、交通案内' },
  { key: 'course', label: 'モデルコース', icon: '🚶', description: '徒歩と車で楽しむおすすめルート', route: '/courses' },
  { key: 'event', label: 'イベント', icon: '🎉', description: '季節の行事と地域イベント' }
]

export const spots = [
  { id:'imajo-juku', name:'今庄宿', category:'history', subcategory:'宿場町', tags:['北国街道','町並み','散策'], lat:35.7728, lng:136.1985 },
  { id:'michishirube', name:'文政の道しるべ', category:'history', subcategory:'宿場町', tags:['道標','北国街道','史跡'] },
  { id:'kyoto-house', name:'旧京藤甚五郎家住宅', category:'history', subcategory:'宿場町', tags:['古民家','町家','歴史建築'] },
  { id:'showa-kaikan', name:'昭和会館', category:'history', subcategory:'宿場町', tags:['近代建築','地域文化'] },
  { id:'kotokuen', name:'公徳園・明治殿', category:'history', subcategory:'宿場町', tags:['公園','歴史','散策'] },
  { id:'old-hokuriku', name:'旧北陸線トンネル群', category:'history', subcategory:'鉄道遺産', tags:['トンネル','鉄道遺産','ドライブ'] },
  { id:'water-tower', name:'今庄駅給水塔・給炭台', category:'history', subcategory:'鉄道遺産', tags:['蒸気機関車','鉄道遺産','今庄駅'] },
  { id:'yamanaka-switchback', name:'山中トンネル スイッチバック', category:'history', subcategory:'鉄道遺産', tags:['スイッチバック','トンネル'] },
  { id:'yamanaka-signal', name:'旧北陸本線 山中信号所跡', category:'history', subcategory:'鉄道遺産', tags:['信号所','廃線跡'] },
  { id:'d51', name:'蒸気機関車 D51 481号機', category:'history', subcategory:'鉄道遺産', tags:['D51','蒸気機関車','今庄駅'] },
  { id:'yuo-tunnel', name:'旧北陸本線 湯尾トンネル', category:'history', subcategory:'鉄道遺産', tags:['トンネル','鉄道遺産'] },
  { id:'hiuchi-castle', name:'燧ヶ城跡（火打城跡）', category:'history', subcategory:'城跡・峠', tags:['山城','城跡','登山'] },
  { id:'kinome-pass', name:'北陸道 木ノ芽峠越', category:'history', subcategory:'城跡・峠', tags:['古道','峠','北国街道'] },
  { id:'kinome-castle', name:'木ノ芽峠城跡', category:'history', subcategory:'城跡・峠', tags:['城跡','峠'] },
  { id:'tochinoki-pass', name:'栃ノ木峠', category:'history', subcategory:'城跡・峠', tags:['峠','ドライブ','県境'] },
  { id:'yamanaka-pass', name:'山中峠', category:'history', subcategory:'城跡・峠', tags:['峠','古道','鉄道遺産'] },
  { id:'yuo-pass', name:'湯尾峠', category:'history', subcategory:'城跡・峠', tags:['峠','古道','散策'] },
  { id:'akatan', name:'アカタン砂防堰堤群', category:'history', subcategory:'土木遺産', tags:['砂防堰堤','石積み','ハイキング'], lat:35.788046, lng:136.2690943 },
  { id:'rennyo', name:'蓮如上人旧蹟', category:'history', subcategory:'寺院・史跡', tags:['蓮如上人','浄土真宗','史跡'], lat:35.8095797, lng:136.3342671 },

  { id:'rokusuke', name:'六助', category:'eat', subcategory:'今庄おろしそば', tags:['そば','おろしそば','徒歩圏'] },
  { id:'furusato', name:'ふる里', category:'eat', subcategory:'今庄おろしそば', tags:['そば','おろしそば','徒歩圏'] },
  { id:'chubei', name:'忠兵衛そば', category:'eat', subcategory:'今庄おろしそば', tags:['そば','おろしそば','徒歩圏'] },
  { id:'obachan', name:'ほっと今庄 おばちゃんの店', category:'eat', subcategory:'今庄おろしそば', tags:['そば','今庄駅','徒歩圏'] },
  { id:'tsuchinoeki', name:'土の駅今庄', category:'eat', subcategory:'今庄おろしそば', tags:['そば','ドライブ'] },
  { id:'itadori', name:'いたどり', category:'eat', subcategory:'今庄おろしそば', tags:['そば','ドライブ'] },
  { id:'takura-shokudo', name:'たくら食堂', category:'eat', subcategory:'今庄おろしそば', tags:['そば','ドライブ'] },
  { id:'uoza', name:'今庄食事処 うお座', category:'eat', subcategory:'食事処', tags:['定食','海鮮','ランチ'], lat:35.7741875, lng:136.1959417 },
  { id:'fuwari', name:'ふわり', category:'eat', subcategory:'食事処', tags:['ランチ','軽食','徒歩圏'], lat:35.7728692, lng:136.2007376 },
  { id:'orion', name:'ORION BAKE', category:'eat', subcategory:'カフェ・甘味', tags:['ベーカリー','カフェ','テイクアウト'] },
  { id:'sous-coffee', name:"sou's coffee roastery", category:'eat', subcategory:'カフェ・甘味', tags:['コーヒー','自家焙煎'] },
  { id:'temari', name:'甘味処てまり', category:'eat', subcategory:'カフェ・甘味', tags:['甘味','団子','今庄宿'] },
  { id:'horiguchi', name:'堀口酒造（鳴り瓢）', category:'shop', subcategory:'酒蔵', tags:['日本酒','酒蔵','徒歩圏'] },
  { id:'kitazen', name:'北善商店', category:'shop', subcategory:'酒蔵', tags:['日本酒','酒蔵','徒歩圏'] },
  { id:'hatakeyama', name:'畠山酒造', category:'shop', subcategory:'酒蔵', tags:['日本酒','酒蔵','徒歩圏'] },
  { id:'shirakoma', name:'白駒酒造', category:'shop', subcategory:'酒蔵・歴史', tags:['酒蔵跡','歴史','徒歩圏'] },

  { id:'station-shop', name:'今庄観光協会 売店', category:'shop', subcategory:'お土産', tags:['特産品','観光案内','今庄駅'], lat:35.773232, lng:136.1986508 },
  { id:'genome', name:'GENOME REAL STORE', category:'shop', subcategory:'ショップ', tags:['アウトドア','アパレル'] },
  { id:'kurashiya', name:'暮らしや', category:'shop', subcategory:'お土産・生活雑貨', tags:['生活雑貨','工芸品','今庄宿'], lat:35.7723362, lng:136.1973736 },
  { id:'takaya', name:'ギフトセンタータカヤ', category:'shop', subcategory:'お土産', tags:['特産品','ギフト'], lat:35.7725578, lng:136.1977277 },
  { id:'yoshigo', name:'吉五商店', category:'shop', subcategory:'食品・特産品', tags:['食品','お土産','地元商店'], lat:35.7706526, lng:136.199932 },
  { id:'takano', name:'高野由平商店（甘露梅肉）', category:'shop', subcategory:'食品・特産品', tags:['甘露梅肉','梅','老舗'], lat:35.7705262, lng:136.200146 },

  { id:'yasha', name:'夜叉ヶ池', category:'spot', subcategory:'自然・景勝地', tags:['登山','ハイキング','伝説'], lat:35.672385, lng:136.2902333 },
  { id:'hirono', name:'広野ダムふるさと公園', category:'spot', subcategory:'公園・ダム', tags:['ダム','公園','桜'], lat:35.7137448, lng:136.258741 },
  { id:'masutani', name:'桝谷ダム', category:'spot', subcategory:'ダム・景勝地', tags:['ダム','ドライブ','紅葉'], lat:35.740788, lng:136.2491287 },
  { id:'hinogawa-sakura', name:'日野川沿い桜並木', category:'spot', subcategory:'花・景勝地', tags:['桜','花見','春'], lat:35.7921063, lng:136.2060944 },
  { id:'nabekura', name:'鍋倉山（弘法寺）登り口', category:'spot', subcategory:'登山・ハイキング', tags:['登山','展望','弘法寺'], lat:35.7801551, lng:136.1961507 },

  { id:'asobase', name:'ASOBASE cafe & Lounge', category:'play', subcategory:'キャンプ・アウトドア', tags:['キャンプ','カフェ','BBQ'], lat:35.7226032, lng:136.1507928 },
  { id:'ski365', name:'今庄365スキー場', category:'play', subcategory:'スキー場', tags:['スキー','スノーボード','冬'], lat:35.7232687, lng:136.1483891 },
  { id:'yasuragi', name:'今庄365温泉 やすらぎ', category:'play', subcategory:'温泉', tags:['温泉','日帰り入浴','サウナ'], lat:35.7229537, lng:136.1486816 },
  { id:'poppo', name:'D51ぽっぽ広場', category:'play', subcategory:'公園', tags:['D51','子ども','遊具'], lat:35.7725422, lng:136.2013614 },
  { id:'retreat', name:'リトリートたくら', category:'play', subcategory:'アウトドア施設', tags:['キャンプ','自然体験','BBQ'], lat:35.7921739, lng:136.2672023 },

  { id:'luru', name:"sou's minka Luru（流留）", category:'stay', subcategory:'古民家宿', tags:['一棟貸し','古民家','今庄宿'] },
  { id:'kaneori', name:'今庄の宿 かねおり', category:'stay', subcategory:'旅館', tags:['旅館','温泉','和室'], lat:35.7729035, lng:136.2010271 },
  { id:'kawabataya', name:'旅館 川端屋', category:'stay', subcategory:'旅館', tags:['旅館','和室','長期滞在'], lat:35.7742534, lng:136.1956942 },
  { id:'tamamuraya', name:'地域まるっと体感宿 玉村屋', category:'stay', subcategory:'ゲストハウス', tags:['古民家','地域体験','今庄宿'], lat:35.7712301, lng:136.1987536 },

  { id:'station', name:'今庄駅', category:'access', subcategory:'鉄道', tags:['JR','駅','観光案内'], lat:35.7732, lng:136.1986 },
  { id:'ic', name:'今庄IC', category:'access', subcategory:'高速道路', tags:['北陸自動車道','車'] },
  { id:'taxi', name:'今庄タクシー', category:'access', subcategory:'タクシー', tags:['交通','予約'] },
  { id:'parking', name:'今庄宿 観光駐車場', category:'access', subcategory:'駐車場', tags:['駐車場','今庄宿'] }
]

export const getSpot = id => spots.find(spot => spot.id === id)
export const getCategory = key => categories.find(category => category.key === key)
