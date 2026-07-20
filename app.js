const spots = [
  {id:'station',name:'今庄駅',category:'rest',lat:35.7717,lng:136.1993,summary:'まち歩きの出発点。観光案内や鉄道の記憶に触れる玄関口。',story:'旧北陸本線とともに発展した今庄を歩くなら、まずは駅前から。周辺案内を確認して、安全にまち歩きを始めましょう。',stamp:true},
  {id:'shuku',name:'今庄宿の町並み',category:'history',lat:35.7733,lng:136.1969,summary:'北国街道の宿場町らしい町家と細い路地が残るエリア。',story:'格子戸や軒先、街道沿いの家並みを眺めながら、交通の要衝として栄えた今庄の時間を感じられます。生活道路のため、車や住民の方に配慮して歩きましょう。',stamp:true},
  {id:'sake',name:'酒蔵のある通り',category:'food',lat:35.7743,lng:136.1957,summary:'今庄の水と風土を生かした酒造りの文化に出会う通り。',story:'今庄には複数の酒蔵があり、宿場町の歴史とともに酒造りが受け継がれてきました。営業日や見学可否は各施設の最新情報を確認してください。',stamp:true},
  {id:'soba',name:'今庄そばの店々',category:'food',lat:35.7727,lng:136.1982,summary:'大根おろしで味わう、素朴で力強い今庄のそば。',story:'鉄道客との関わりも語られる今庄そば。店ごとに麺やつゆ、辛味の個性があります。食べ比べを目的にしたコースにも向きます。',stamp:true},
  {id:'water',name:'旧国鉄給水塔',category:'railway',lat:35.7708,lng:136.1989,summary:'蒸気機関車の時代を伝える、レンガ造りの鉄道遺産。',story:'峠越えを支えた鉄道施設の記憶を今に伝える象徴的な建造物です。立入可能範囲や見学ルールに従ってください。',stamp:true},
  {id:'park',name:'昭和会館周辺',category:'rest',lat:35.7738,lng:136.1988,summary:'散策途中の小休止に向く、まちなかの立ち寄り地点。',story:'宿場町散策の途中で一息つくための候補地点。イベント時は利用状況が変わる場合があります。',stamp:true}
];
const routes=[
  {id:'classic',name:'今庄宿 王道さんぽ',time:'約60分',distance:'約2.0km',spots:['station','shuku','sake','soba','water'],description:'駅から宿場町、酒蔵、そば、鉄道遺産をつなぐ初めての方向けコース。'},
  {id:'food',name:'そばと酒蔵の味めぐり',time:'約45〜90分',distance:'約1.3km',spots:['station','soba','sake','shuku'],description:'営業時間を確認しながら、今庄の食文化を中心に歩くコース。'},
  {id:'rail',name:'鉄道の記憶を歩く',time:'約40分',distance:'約1.2km',spots:['station','water','park'],description:'駅と給水塔を中心に、鉄道と町の関係を感じる短時間コース。'}
];
const categoryNames={history:'歴史',railway:'鉄道',food:'食',rest:'休憩・案内'};
let map, userMarker, routeLine, deferredPrompt;
const markers=new Map();
const stamps=new Set(JSON.parse(localStorage.getItem('imajo-stamps')||'[]'));

function initMap(){
  map=L.map('map',{zoomControl:true}).setView([35.7727,136.1980],16);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
  spots.forEach(s=>{const m=L.marker([s.lat,s.lng]).addTo(map).bindPopup(`<strong>${s.name}</strong><br>${s.summary}<br><button onclick="openSpot('${s.id}')">詳しく見る</button>`);markers.set(s.id,m);});
}
function renderSpots(filter='all'){
  const list=document.getElementById('spotList');
  list.innerHTML=spots.filter(s=>filter==='all'||s.category===filter).map(s=>`<article class="spot-card"><button onclick="openSpot('${s.id}')"><span class="badge">${categoryNames[s.category]}</span><h3>${s.name}</h3><p>${s.summary}</p><strong>詳しく見る →</strong></button></article>`).join('');
}
function renderRoutes(){document.getElementById('routeList').innerHTML=routes.map(r=>`<article class="route-card"><span class="badge">モデルコース</span><h3>${r.name}</h3><div class="route-meta"><span>${r.time}</span><span>${r.distance}</span></div><p>${r.description}</p><button class="secondary-button" onclick="showRoute('${r.id}')">地図に表示</button></article>`).join('')}
function renderStamps(){document.getElementById('stampCount').textContent=stamps.size;document.getElementById('stampList').innerHTML=spots.filter(s=>s.stamp).map(s=>`<div class="stamp ${stamps.has(s.id)?'collected':''}">${stamps.has(s.id)?'✓ ':''}${s.name}</div>`).join('')}
window.openSpot=function(id){const s=spots.find(x=>x.id===id);document.getElementById('dialogContent').innerHTML=`<span class="badge">${categoryNames[s.category]}</span><h2>${s.name}</h2><p>${s.story}</p><ul class="detail-list"><li>位置情報や営業時間は公開前に現地確認</li><li>私有地・生活道路への立入りに注意</li></ul><div class="dialog-actions"><button class="secondary-button" onclick="focusSpot('${s.id}')">地図で見る</button>${s.stamp&&!stamps.has(s.id)?`<button class="primary-button" onclick="collectStamp('${s.id}')">試作スタンプを押す</button>`:'<span class="badge">スタンプ取得済み</span>'}</div>`;document.getElementById('spotDialog').showModal()}
window.focusSpot=function(id){const s=spots.find(x=>x.id===id);document.getElementById('spotDialog').close();switchView('mapView');map.setView([s.lat,s.lng],18);markers.get(id).openPopup()}
window.collectStamp=function(id){stamps.add(id);localStorage.setItem('imajo-stamps',JSON.stringify([...stamps]));renderStamps();openSpot(id)}
window.showRoute=function(id){const r=routes.find(x=>x.id===id);const pts=r.spots.map(sid=>{const s=spots.find(x=>x.id===sid);return [s.lat,s.lng]});if(routeLine)map.removeLayer(routeLine);routeLine=L.polyline(pts,{weight:6,opacity:.75,dashArray:'10 8'}).addTo(map);switchView('mapView');map.fitBounds(routeLine.getBounds(),{padding:[25,25]})}
function switchView(id){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===id));document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.view===id));if(id==='mapView')setTimeout(()=>map.invalidateSize(),100)}
function locate(){const status=document.getElementById('locationStatus');if(!navigator.geolocation){status.textContent='この端末は位置情報に対応していません';return}status.textContent='現在地を確認しています…';navigator.geolocation.getCurrentPosition(pos=>{const p=[pos.coords.latitude,pos.coords.longitude];if(userMarker)userMarker.setLatLng(p);else userMarker=L.circleMarker(p,{radius:9,weight:4,fillOpacity:1}).addTo(map).bindPopup('現在地');map.setView(p,17);userMarker.openPopup();status.textContent=`現在地を表示中（誤差 約${Math.round(pos.coords.accuracy)}m）`},err=>{status.textContent=err.code===1?'位置情報の利用が許可されていません':'現在地を取得できませんでした'},{enableHighAccuracy:true,timeout:10000,maximumAge:30000})}

document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>switchView(t.dataset.view)));
document.getElementById('startWalkBtn').addEventListener('click',()=>{switchView('mapView');document.getElementById('mapView').scrollIntoView({behavior:'smooth'})});
document.getElementById('locateBtn').addEventListener('click',locate);
document.getElementById('categoryFilter').addEventListener('change',e=>renderSpots(e.target.value));
document.getElementById('closeDialogBtn').addEventListener('click',()=>document.getElementById('spotDialog').close());
document.getElementById('resetStampsBtn').addEventListener('click',()=>{if(confirm('スタンプをすべて消しますか？')){stamps.clear();localStorage.removeItem('imajo-stamps');renderStamps()}});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;document.getElementById('installBtn').hidden=false});
document.getElementById('installBtn').addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;document.getElementById('installBtn').hidden=true});
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
initMap();renderSpots();renderRoutes();renderStamps();
