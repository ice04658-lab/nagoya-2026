const airport = '中部國際機場';
const via = 'VIA INN 名古屋新幹線口';
const koko = 'KOKO 酒店 飛驒高山';
const vessel = 'VESSEL INN 榮';
const comfort = '中部國際機場 舒適飯店（Comfort Hotel）';
const vesselMap = 'ベッセルイン栄駅前';
const oldTown = '飛驒高山 三町筋';
const ropeway = '新穗高纜車站';
const jr = ['JR 東海時刻資訊', 'https://railway.jr-central.co.jp/time-schedule/'];
const meitetsu = ['名鐵列車資訊', 'https://www.meitetsu.co.jp/'];
const nohi = ['濃飛巴士路線', 'https://www.nouhibus.co.jp/route_bus/shinhotaka-line/'];

const days = [
  {
    date: '12/07', weekday: '一', city: '名古屋', title: '抵達名古屋',
    summary: '熱田神宮、鰻魚飯與名古屋站夜景。',
    stay: via, hotelMap: via,
    sources: [meitetsu, ['中部國際機場', 'https://www.centrair.jp/']],
    cards: [
      { title: '台北 → 中部國際機場', transport: '飛機', items: [
        ['08:45', '台灣虎航 IT206｜桃園國際機場第一航廈（T1）起飛', '出發機場、航廈與報到櫃檯請依電子機票及航空公司公告再次確認。'],
        ['12:30', '抵達中部國際機場', '', airport]
      ] },
      { title: '機場航廈接駁', transport: '接駁', items: [
        ['13:00', '第二航廈出關後搭航廈間接駁巴士', '行程表註記約每 15 分鐘一班，實際班距、上下車位置與後續交通待確認。', '中部国際空港 第2ターミナル']
      ] },
      { title: '熱田神宮與鰻魚飯', items: [
        ['15:00', '熱田神宮', '📕 御朱印收集提醒：參拜後確認授與所位置、受理時間及初穗料。', '熱田神宮'],
        ['16:00', '熱田蓬萊軒本店', '吃鰻魚飯。表列 16:30 開門，實際營業時間、候位或預約方式待確認。', 'あつた蓬莱軒 本店']
      ] },
      { title: '神宮 → 名古屋', transport: '轉乘', items: [
        ['17:00', '搭名鐵或計程車', '表列名鐵約 30 分鐘、計程車約 20 分鐘。實際車次、車程與票價待確認。', '名古屋站']
      ] },
      { title: '飯店 Check-in', items: [['18:00', via, '', via]] },
      { title: '名古屋站購物與夜景', items: [
        ['19:00', 'JR Gate Tower', '逛街購物。', 'JR Gate Tower 名古屋'],
        ['20:00', 'Sky Promenade', '看夜景。營業時間、最晚入場及票價待確認。', 'Sky Promenade Midland Square 名古屋']
      ] },
      { title: '居酒屋吃炸雞翅', items: [['21:00', '店家待確認']] },
      { title: '回飯店休息', items: [['22:00', '休息']] }
    ]
  },
  {
    date: '12/08', weekday: '二', city: '高山', title: '高山古街散策',
    summary: '宮川朝市、古街小吃、神社與泡湯。',
    stay: koko, hotelMap: 'KOKO HOTEL 飛騨高山',
    sources: [jr, ['濃飛巴士官網', 'https://www.nouhibus.co.jp/']],
    cards: [
      { title: '名古屋 → 高山', transport: '交通待確認', items: [
        ['07:43', '名古屋出發', '表內同列 JR 名古屋站（新幹線出口）與濃飛巴士，交通工具、乘車地點、班次與票價待最終確認。若搭巴士，沿途可看國道風光。', 'JR 名古屋駅 新幹線口'],
        ['約 10:20', '預計抵達高山', '', '高山站']
      ] },
      { title: '飯店寄放行李', items: [['約 10:20', koko, '抵達高山後寄放行李，飯店寄放規則待確認。', 'KOKO HOTEL 飛騨高山']] },
      { title: '高山古街散策', items: [
        ['11:00', '宮川朝市', '行程表註記只到 12:00，當日營業時間待確認。', '高山 宮川朝市'],
        ['12:00', '飛驒高山老街', '逛老街、吃小吃。', oldTown, [['備選正餐 Mikado', 'みかど 高山']]],
        ['13:00', '櫻山八幡宮', '', '桜山八幡宮'],
        ['14:00', '飛驒高山老街', '回老街繼續散步。', oldTown]
      ] },
      { title: '日枝神社', items: [['15:00', '參拜日枝神社', '', '日枝神社 飛騨高山']] },
      { title: '陣屋稻荷神社', items: [['17:00', '參拜陣屋稻荷神社', '表列約 12 分鐘步行，接續晚餐。', '陣屋稲荷神社 高山']] },
      { title: 'Dining Bull 晚餐', items: [['18:00', 'Dining Bull', '營業時間與預約方式待確認。', 'Dining Bull 高山']] },
      { title: '飯店休息與泡湯', items: [['20:00', '休息、泡湯', '浴場開放時間待確認。']] }
    ]
  },
  {
    date: '12/09', weekday: '三', city: '新穗高・名古屋', title: '新穗高雪山日',
    summary: '上午賞雪，下午經高山轉 JR 回名古屋。',
    stay: vessel, hotelMap: vesselMap,
    sources: [nohi, jr],
    cards: [
      { title: '高山 → 新穗高', transport: '濃飛巴士', items: [
        ['07:40', '高山濃飛巴士中心出發', '套票備註：奧飛驒まるごとバリューきっぷ。適用範圍、價格與巴士班次待確認。', '高山濃飛巴士中心'],
        ['09:16', '抵達新穗高纜車站', '', ropeway]
      ] },
      { title: '新穗高賞雪冒險', items: [
        ['09:16', '抵達後搭乘兩段纜車', '表列全程約 25 分鐘，當日營運、天候與票價待確認。', ropeway],
        ['10:00', '西穗高口展望台、頂之森賞雪', '', '西穂高口駅 展望台', [['頂之森', '頂の森 新穂高ロープウェイ']]],
        ['11:00', '山頂咖啡', '喝咖啡、準備下山。店家開放時間待確認。', '新穂高ロープウェイ 西穂高口 カフェ'],
        ['12:15', '搭乘下山纜車']
      ] },
      { title: '新穗高 → 高山', transport: '濃飛巴士', items: [
        ['12:55', '新穗高纜車站搭巴士', '回程班次、票價與雪天行車狀況待確認。', ropeway],
        ['14:31', '抵達高山，轉乘 JR', '', 'JR 高山站']
      ] },
      { title: '高山 → 名古屋', transport: 'JR 特急', items: [
        ['15:34', '主要班次｜JR 特急「飛驒」', '候選班次：14:46（轉乘較趕）、16:33（較晚）。出發前核對時刻、轉乘與訂位，依當天狀況擇一搭乘。', 'JR 高山站'],
        ['18:06', '主要班次抵達名古屋，取行李', '取件位置與可取件時間待確認。', 'JR 名古屋站']
      ] },
      { title: '中部電力 MIRAI TOWER', items: [['20:00', '造訪 MIRAI TOWER', '開放時間、最晚入場及票價待確認。', '中部電力 MIRAI TOWER']] },
      { title: 'PEANUTS Cafe Nagoya', items: [['21:00', '咖啡廳用餐', '表列最晚點餐 21:00，實際營業、最後點餐及預約方式待確認。', 'PEANUTS Cafe Nagoya']] }
    ]
  },
  {
    date: '12/10', weekday: '四', city: '名古屋・榮', title: '大須與榮購物日',
    summary: '大須商店街、PARCO、榮商圈與溫泉浴場。',
    stay: vessel, hotelMap: vesselMap,
    sources: [['名古屋市交通局', 'https://www.kotsu.city.nagoya.jp/']],
    cards: [
      { title: '大須散策', items: [
        ['09:00', '大須觀音寺', '📕 御朱印收集提醒（寺院）：確認納經所受理時間與納經料。', '大須観音'],
        ['10:00', '大須商店街', '逛動漫商品店，可分頭逛。', '大須商店街']
      ] },
      { title: '名古屋 PARCO', items: [
        ['12:00', '一起先逛吉伊卡哇', '門市與開放時間待確認。', 'ちいかわらんど 名古屋パルコ'],
        ['13:00', '西館流行美妝、東館 IP 商品', '可分頭逛，店家與營業時間待確認。', '', [['PARCO 西館', '名古屋PARCO 西館'], ['PARCO 東館', '名古屋PARCO 東館']]]
      ] },
      { title: '榮商圈購物', items: [
        ['15:00', 'GU／UNIQLO', '門市與營業時間待確認。', '', [['GU', 'GU 名古屋 栄'], ['UNIQLO', 'UNIQLO 名古屋 栄']]],
        ['17:00', '榮 LOFT', '', 'ロフト 名古屋 栄']
      ] },
      { title: '回飯店放戰利品', items: [['18:00', vessel, '', vesselMap]] },
      { title: '溫泉浴場', items: [['19:00', '泡湯', '浴場與開放時間待確認。']] },
      { title: '魚河岸本舗 ぴち天 本店', items: [['22:00', '晚間用餐', '12/10 優惠、營業時間、最後點餐及預約方式待確認。', '魚河岸本舗 ぴち天 本店']] }
    ]
  },
  {
    date: '12/11', weekday: '五', city: '犬山・中部機場', title: '犬山半日遊與機場住宿',
    summary: '別小江神社、犬山城下町與天守，晚間前往機場。',
    stay: comfort, hotelMap: 'コンフォートホテル中部国際空港',
    sources: [meitetsu, ['國寶犬山城', 'https://inuyama-castle.jp/']],
    cards: [
      { title: '別小江神社', items: [['09:00', '參拜別小江神社', '📕 御朱印收集提醒：以特色季節限定款聞名，請確認當日授與方式、時間及初穗料。', '別小江神社']] },
      { title: '前往犬山', transport: '轉乘', items: [['10:00', '往犬山城下町移動', '路線、車次與車資待確認。']] },
      { title: '犬山半日遊', items: [
        ['12:00', '犬山城下町', '', '犬山城下町'],
        ['14:00', '三光稻荷神社', '', '犬山 三光稲荷神社'],
        ['16:00', '犬山城登天守', '最後入場時間、票價與當日開放狀況待確認。', '犬山城']
      ] },
      { title: '返回名古屋方向', transport: '轉乘', items: [['17:00', '從犬山返回', '交通工具、轉乘站、班次與車資待確認。']] },
      { title: '領取寄放行李', items: [['18:00', '取行李', '取件位置與可取件時段待確認。']] },
      { title: '找晚餐', items: [['19:00', '晚餐店家待確認']] },
      { title: '前往機場飯店', transport: '轉乘', items: [['20:00', comfort, '交通工具、班次與車資待確認。', 'コンフォートホテル中部国際空港']] }
    ]
  },
  {
    date: '12/12', weekday: '六', city: '中部機場・台灣', title: '搭機返台',
    summary: '機場採買蝦餅與伴手禮，搭機返台。',
    sources: [['中部國際機場', 'https://www.centrair.jp/']],
    cards: [
      { title: '機場採買', items: [['10:00', '購買蝦餅與伴手禮', '店家與營業時間待確認。', airport]] },
      { title: '中部國際機場 → 台灣', transport: '飛機', items: [
        ['13:15', '台灣虎航 IT207｜中部國際機場第二航廈（T2）起飛返台', '請依電子機票及航空公司公告確認航廈、報到櫃檯與登機時間；提前辦理報到。', '中部国際空港 第2ターミナル']
      ] }
    ]
  }
];

const mustVisit = new Set([
  '熱田神宮', '高山古街散策', '新穗高賞雪冒險', '大須商店街', '名古屋 PARCO', '犬山城登天守'
]);
const transportColors = {
  'JR 特急': 'rail',
  '濃飛巴士': 'bus',
  '接駁': 'bus',
  '飛機': 'air'
};
const highlight = '<span class="must-visit">必去</span>';
const goshuinSites = new Set(['熱田神宮', '大須觀音寺', '參拜別小江神社']);
const goshuinBadge = '<span class="goshuin-badge" aria-label="御朱印收集地點">📕 御朱印</span>';

const itinerary = document.querySelector('#itinerary');
const navLinks = document.querySelectorAll('.days a');
const escapeHtml = value => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[character]);

function mapLink(query, label = 'Google Maps') {
  const url = new URL('https://www.google.com/maps/search/');
  url.searchParams.set('api', '1');
  url.searchParams.set('query', query);
  return `<a class="map" href="${escapeHtml(url.href)}" aria-label="${escapeHtml(label + '：' + query)}">${escapeHtml(label)} ↗</a>`;
}

function renderOverview() {
  return `
    <div class="section-head"><h2 id="view-title" tabindex="-1">行程總覽</h2><span class="mini">2026 年 12 月</span></div>
    <div class="day-grid">
      ${days.map((day, index) => `
        <a class="day-card tint-${index % 3}" href="#day-${index + 1}">
          <span class="card-meta"><time datetime="2026-12-${escapeHtml(day.date.slice(3))}">DAY ${index + 1} · ${escapeHtml(day.date)}（${escapeHtml(day.weekday)}）</time><span>${escapeHtml(day.city)}</span></span>
          <h3>${escapeHtml(day.title)}</h3>
          <p>${escapeHtml(day.summary)}</p>
          <span class="card-bottom">${day.stay ? '住宿 · ' + escapeHtml(day.stay) : '返台日'}<span aria-hidden="true">↗</span></span>
        </a>`).join('')}
    </div>`;
}

function renderCard({ title, transport, items }) {
  return `
    <li class="timeline-card${transport ? ' transport-card' : ''}">
      <div class="timeline-meta">
        <span class="period">${escapeHtml(items[0][0])}</span>
        ${transport ? `<span class="transport-label ${transportColors[transport] ?? 'transfer'}">${escapeHtml(transport)}</span>` : ''}
      </div>
      <h3>${escapeHtml(title)} ${mustVisit.has(title) ? highlight : ''}</h3>
      <ul class="card-items" role="list">
        ${items.map(([time, name, detail, place, extra = []], index) => `
          <li class="card-item">
            ${index ? `<span class="period">${escapeHtml(time)}</span>` : ''}
            <div>
              <p class="item-name">${escapeHtml(name)} ${mustVisit.has(name) ? highlight : ''} ${goshuinSites.has(name) ? goshuinBadge : ''}</p>
              ${detail ? `<p class="item-note">${escapeHtml(detail)}</p>` : ''}
              ${place || extra.length ? `<div class="actions">
                ${place ? mapLink(place) : ''}
                ${extra.map(([label, query]) => mapLink(query, label)).join('')}
              </div>` : ''}
            </div>
          </li>`).join('')}
      </ul>
    </li>`;
}


/* 每日旅行小任務：依當日已排定活動設計，完全不需要多跑景點。 */
const dailyQuests = [
  [
    { id: 'd1-photo', icon: '📸', title: '日本第一張合照', detail: '在熱田神宮或名古屋站附近拍下這趟旅行的第一張合照。' },
    { id: 'd1-unagi', icon: '🍱', title: '鰻魚飯開箱', detail: '如果有順利用餐，記錄今天的鰻魚飯照片。' },
    { id: 'd1-wings', icon: '🍗', title: '名古屋手羽先挑戰', detail: '晚餐有機會時，試試名古屋特色炸雞翅。' },
    { id: 'd1-view', icon: '🌃', title: '夜景尋找亮點', detail: '在 Sky Promenade 找到最喜歡的一片夜景。' },
    { id: 'd1-souvenir', icon: '🎁', title: '第一份小紀念', detail: '在名古屋站找到一件讓你想帶回家的小物。' }
  ],
  [
    { id: 'd2-beef', icon: '🥩', title: '飛驒牛美食獵人', detail: '在高山吃到一種飛驒牛料理，拍照記錄。' },
    { id: 'd2-gohei', icon: '🍡', title: '尋找五平餅', detail: '逛古街時找找飛驒地區的五平餅，有賣再試吃。' },
    { id: 'd2-street', icon: '🏘️', title: '古街繪本取景', detail: '在三町筋拍一張像日系繪本封面的街景照。' },
    { id: 'd2-goshuin', icon: '📕', title: '神社參拜小紀錄', detail: '到櫻山八幡宮或日枝神社時，記下最喜歡的一個細節；御朱印依授與時間決定。' },
    { id: 'd2-snack', icon: '🍮', title: '高山甜點尋寶', detail: '在既定老街路線找一款沒吃過的在地甜點。' }
  ],
  [
    { id: 'd3-snow', icon: '❄️', title: '雪山第一張照片', detail: '在開放的安全觀景區拍一張雪景；沒有積雪就改拍山景。' },
    { id: 'd3-coffee', icon: '☕', title: '山上的暖心一杯', detail: '若店家營業，在山頂喝一杯熱飲。' },
    { id: 'd3-view', icon: '🏔️', title: '尋找最美山峰', detail: '在西穗高口展望台挑選一座最喜歡的山峰合照。' },
    { id: 'd3-friend', icon: '🧣', title: '冬日雙人照', detail: '用圍巾或毛帽當主題拍張雙人冬日合照。' },
    { id: 'd3-peanuts', icon: '🥜', title: '史努比的小驚喜', detail: '如果 PEANUTS Cafe 營業且來得及，找一款最喜歡的主題小物。' }
  ],
  [
    { id: 'd4-chiikawa', icon: '🧸', title: '吉伊卡哇尋寶', detail: '在 PARCO 找到你覺得最可愛的一項吉伊卡哇商品。' },
    { id: 'd4-osu', icon: '🎮', title: '動漫小店發現', detail: '在大須商店街發現一家以前沒逛過的動漫周邊店。' },
    { id: 'd4-partner', icon: '💝', title: '替旅伴挑禮物', detail: '在既定購物路線選一件小禮物或拍照推薦給旅伴。' },
    { id: 'd4-snack', icon: '🍡', title: '大須散步點心', detail: '有遇到感興趣的小吃時，選一款一起分著吃。' },
    { id: 'd4-loft', icon: '✏️', title: 'LOFT 文具寶藏', detail: '在榮 LOFT 找到最想帶回台灣的一件文具或雜貨。' }
  ],
  [
    { id: 'd5-castle', icon: '🏯', title: '犬山城最佳角度', detail: '在開放參觀區域拍一張最喜歡的犬山城照片。' },
    { id: 'd5-goshuin', icon: '📕', title: '御朱印收集日', detail: '別小江或三光稻荷神社如有授與，收集一枚御朱印。' },
    { id: 'd5-dango', icon: '🍡', title: '犬山城下町點心', detail: '找一款犬山城下町看起來最誘人的小點心。' },
    { id: 'd5-wish', icon: '⛩️', title: '旅程心願', detail: '在參拜時想一個今年最想完成的小目標。' },
    { id: 'd5-photo', icon: '📷', title: '最後一張名古屋合照', detail: '離開名古屋前，留下你們最喜歡的一張合照。' }
  ],
  [
    { id: 'd6-ebi', icon: '🍤', title: '蝦餅伴手禮達成', detail: '在機場挑選一款蝦餅伴手禮帶回台灣。' },
    { id: 'd6-favorite', icon: '💌', title: '六天旅行 MVP', detail: '各自選出這趟最喜歡的景點，互相分享原因。' },
    { id: 'd6-snack', icon: '🛍️', title: '最後的伴手禮', detail: '在登機前確認還有沒有想買的小禮物。' },
    { id: 'd6-album', icon: '📸', title: '精選三張旅行照', detail: '各自挑出三張最喜歡的旅行照片。' },
    { id: 'd6-next', icon: '✈️', title: '下一趟旅行願望', detail: '回程時和旅伴聊聊下一次最想去哪裡。' }
  ]
];
const questStoragePrefix = 'nagoya-2026-quest-v1-day-';
function readQuestState(index) {
  const key = questStoragePrefix + (index + 1);
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    const validIds = dailyQuests[index].map(quest => quest.id);
    if (saved && validIds.includes(saved.id)) return { id: saved.id, done: saved.done === true };
  } catch { /* localStorage 可能未開放，仍可使用本次頁面狀態 */ }
  return { id: dailyQuests[index][0].id, done: false };
}
const questStates = dailyQuests.map((_, index) => readQuestState(index));
function storeQuestState(index) {
  try {
    localStorage.setItem(questStoragePrefix + (index + 1), JSON.stringify(questStates[index]));
  } catch { /* 保留本次分頁的互動狀態 */ }
}
function renderQuest(index) {
  const state = questStates[index];
  const quest = dailyQuests[index].find(entry => entry.id === state.id);
  return `
    <section class="travel-quest" aria-labelledby="travel-quest-title">
      <div class="quest-heading">
        <div>
          <p class="quest-eyebrow">DAY ${index + 1} · BONUS QUEST</p>
          <h3 id="travel-quest-title">🎲 今日旅行小挑戰</h3>
        </div>
        <span class="quest-state">${state.done ? '🎉 已完成' : '✨ 等你解鎖'}</span>
      </div>
      <p class="quest-name">${quest.icon} ${escapeHtml(quest.title)}</p>
      <p class="quest-detail">${escapeHtml(quest.detail)}</p>
      <div class="quest-actions">
        <label class="quest-check">
          <input type="checkbox" data-quest-done="${index}" ${state.done ? 'checked' : ''}>
          <span>任務完成！</span>
        </label>
        <button type="button" class="quest-reroll" data-quest-reroll="${index}">🎲 換一題</button>
      </div>
      <p class="quest-help">純趣味挑戰，不必為了完成任務繞路或影響趕車。進度只保存在這支手機。</p>
    </section>`;
}
function rerollQuest(index) {
  const state = questStates[index];
  const alternatives = dailyQuests[index].filter(quest => quest.id !== state.id);
  if (alternatives.length === 0) return;
  const next = alternatives[Math.floor(Math.random() * alternatives.length)];
  questStates[index] = { id: next.id, done: false };
  storeQuestState(index);
  const card = itinerary.querySelector('.travel-quest');
  if (card) card.outerHTML = renderQuest(index);
}

function renderDay(day, index) {
  return `
    <div class="section-head"><h2 id="view-title" tabindex="-1">${escapeHtml(day.title)}</h2><span class="mini">DAY ${index + 1} · ${escapeHtml(day.date)}（${escapeHtml(day.weekday)}）</span></div>
    <p class="summary">${escapeHtml(day.summary)} 以下為行程表所列時間，交通與營業資訊請於出發前核對。</p>
    <ol class="timeline route-enter" role="list" aria-label="每日時間軸">
      ${day.cards.map(renderCard).join('')}
    </ol>
    ${renderQuest(index)}
    ${day.sources ? `<section class="trip-note">
      <h3>交通與營運查詢</h3>
      <div class="actions">${day.sources.map(([label, url]) =>
        `<a href="${escapeHtml(new URL(url).href)}">${escapeHtml(label)} ↗</a>`).join('')}</div>
    </section>` : ''}
    <section class="trip-note stay">
      <h3>當晚住宿</h3>
      <p>${day.stay ? escapeHtml(day.stay) : '返台，無住宿安排。'}</p>
      ${day.hotelMap ? `<div class="actions">${mapLink(day.hotelMap, '飯店地圖')}</div>` : ''}
    </section>
    <div class="day-pager">
      ${index > 0 ? `<a href="#day-${index}">← 前一天</a>` : '<a href="#overview">← 行程總覽</a>'}
      ${index < days.length - 1 ? `<a href="#day-${index + 2}">下一天 →</a>` : '<a href="#overview">行程總覽 →</a>'}
    </div>`;
}

function renderRoute(moveFocus = false) {
  const hash = window.location.hash;
  const match = /^#day-([1-6])$/.exec(hash);
  if (moveFocus && !match && hash !== '#overview' && hash !== '') return;
  const index = match ? Number(match[1]) - 1 : -1;
  document.querySelector('#overview').hidden = index >= 0;
  document.querySelectorAll('[data-overview]').forEach(section => { section.hidden = index >= 0; });
  itinerary.innerHTML = index < 0 ? renderOverview() : renderDay(days[index], index);
  navLinks.forEach(link => {
    if (link.hash === (match ? hash : '#overview')) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  const activeLink = navLinks[index + 1];
  const dates = activeLink.parentElement;
  dates.scrollLeft = activeLink.offsetLeft - dates.clientWidth / 2 + activeLink.offsetWidth / 2;
  if (moveFocus) {
    const title = document.querySelector('#view-title');
    title.focus({ preventScroll: true });
    (index < 0 ? document.querySelector('#overview') : dates).scrollIntoView({ block: 'start' });
  }
}

renderRoute();
window.addEventListener('hashchange', () => renderRoute(true));
itinerary.addEventListener('click', event => {
  const button = event.target.closest('[data-quest-reroll]');
  if (button) rerollQuest(Number(button.dataset.questReroll));
});
itinerary.addEventListener('change', event => {
  if (!event.target.matches('[data-quest-done]')) return;
  const index = Number(event.target.dataset.questDone);
  questStates[index].done = event.target.checked;
  storeQuestState(index);
  const card = itinerary.querySelector('.travel-quest');
  if (card) card.outerHTML = renderQuest(index);
});

const taipeiDate = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Taipei', year: 'numeric', month: '2-digit', day: '2-digit'
});
const dayLength = 86_400_000;
const departure = Date.UTC(2026, 11, 7);
const lastDay = Date.UTC(2026, 11, 12);
const countdown = document.querySelector('#countdown');

function updateCountdown() {
  const date = Object.fromEntries(taipeiDate.formatToParts(new Date()).map(({ type, value }) => [type, Number(value)]));
  const today = Date.UTC(date.year, date.month - 1, date.day);
  const elapsed = (today - departure) / dayLength;
  let message = '旅行完成 ♡';
  if (elapsed < 0) message = `距離出發還有 ${-elapsed} 天`;
  else if (elapsed === 0) message = '今天出發！✈️';
  else if (today <= lastDay) message = `旅行第 ${elapsed + 1} 天`;
  countdown.textContent = message;
}

updateCountdown();
// Taipei is UTC+8 throughout the trip. Refresh at the next Taipei midnight
// and when a suspended tab becomes visible again.
function scheduleCountdown() {
  const untilMidnight = dayLength - ((Date.now() + 8 * 3_600_000) % dayLength);
  setTimeout(() => {
    updateCountdown();
    scheduleCountdown();
  }, untilMidnight);
}
scheduleCountdown();
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) updateCountdown();
});
window.addEventListener('pageshow', updateCountdown);

function setupChecklist(id) {
  const checklist = document.getElementById(id);
  const items = [...checklist.querySelectorAll('input')];
  const count = document.getElementById(`${id}-count`);
  const storageStatus = document.getElementById(`${id}-status`);
  const storageKey = `nagoya-2026-${id}`;
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (Array.isArray(saved)) items.forEach(item => { item.checked = saved.includes(item.value); });
  } catch {
    storageStatus.hidden = false;
  }

  function updateCount() {
    const checked = items.filter(item => item.checked).map(item => item.value);
    count.textContent = `已勾選 ${checked.length} / ${items.length}`;
    return checked;
  }

  updateCount();
  checklist.addEventListener('change', () => {
    const checked = updateCount();
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
      storageStatus.hidden = true;
    } catch {
      storageStatus.hidden = false;
    }
  });
}

setupChecklist('packing');
setupChecklist('prep');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(error => {
      console.warn('離線快取無法啟用', error);
    });
  });
}
