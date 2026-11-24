const airport = '中部國際機場';
const vessel = 'VESSEL INN 榮';
const days = [
  {
    date: '12/07', weekday: '一', city: '名古屋', title: '抵達名古屋',
    summary: '熱田神宮散步，逛名古屋站商圈。',
    stay: 'VIA INN 名古屋新幹線口', hotelMap: 'VIA INN 名古屋新幹線口',
    transit: '中部國際機場 → 名鐵名古屋 → 熱田神宮，遊覽後返回名古屋站。機場列車和市區接駁的班次、票價待確認。',
    source: ['名鐵列車資訊', 'https://www.meitetsu.co.jp/'],
    notes: '先確認飯店可寄放行李的時段。神宮各設施及名古屋站店鋪的開放時間待確認。',
    stops: [
      ['抵達後', '抵達中部國際機場', '入境後搭名鐵前往名古屋站，列車班次待確認。', airport],
      ['白天', '熱田神宮', '前往神宮參拜及散步，依入境時間調整停留長度。', '熱田神宮'],
      ['傍晚', '名古屋站購物', '回到車站周邊逛街及用餐。', '名古屋站'],
      ['晚上', '飯店入住', '整理隔天前往高山所需的行李。', 'VIA INN 名古屋新幹線口']
    ]
  },
  {
    date: '12/08', weekday: '二', city: '高山', title: '高山老街散策',
    summary: '宮川朝市、三町筋、高山陣屋與飛驒牛。',
    stay: '高山市區飯店待確認', hotelMap: '',
    transit: '名古屋站 → 高山站，安排 JR 特急「飛驒」。班次、車資和訂位待確認。',
    source: ['JR 東海時刻資訊', 'https://railway.jr-central.co.jp/time-schedule/'],
    notes: '宮川朝市安排在抵達後優先造訪。冬季營業時間及高山陣屋開放時間、門票待確認。',
    stops: [
      ['早上', '名古屋出發', '以能銜接朝市的車次為優先，實際出發時間待確認。', '名古屋站'],
      ['抵達後', '宮川朝市', '沿宮川逛早市，視抵達時間與實際營業情況調整。', '高山 宮川朝市'],
      ['中午前後', '三町筋', '散步古街，安排午餐或小點。', '高山 三町筋'],
      ['下午', '高山陣屋', '參觀歷史建築及展區。', '高山陣屋'],
      ['晚上', '飛驒牛晚餐與住宿', '餐廳、用餐時段及高山住宿待確認。', '高山 飛驒牛']
    ]
  },
  {
    date: '12/09', weekday: '三', city: '新穗高・名古屋', title: '新穗高雪山日',
    summary: '搭濃飛巴士賞雪，下午經高山轉 JR 回名古屋。',
    stay: vessel, hotelMap: 'ベッセルイン栄駅前',
    transit: '高山濃飛巴士中心 ↔ 新穗高纜車，下午回高山站轉 JR 特急「飛驒」至名古屋，再前往榮。巴士、JR 班次、車資、預約規則與轉乘時間待確認。',
    source: ['濃飛巴士新穗高路線', 'https://www.nouhibus.co.jp/route_bus/shinhotaka-line/'],
    notes: '先確認回程巴士與 JR 能銜接，為雪天交通留緩衝。遇纜車停駛，可縮短山區停留並依巴士公告調整。',
    stops: [
      ['早上', '高山濃飛巴士中心', '出發前整理行李，寄放地點與取件時間待確認。', '高山濃飛巴士中心'],
      ['上午至中午', '新穗高纜車賞雪', '依當日營運與天候登山，票價、開放時間待確認。', '新穗高纜車'],
      ['下午', '返回高山、轉 JR', '搭濃飛巴士回高山，取行李後轉 JR 至名古屋。', 'JR 高山站'],
      ['晚上', '入住 VESSEL INN 榮', '抵達名古屋後轉往榮商圈。', 'ベッセルイン栄駅前']
    ]
  },
  {
    date: '12/10', weekday: '四', city: '名古屋・榮', title: '榮商圈購物日',
    summary: '逛 PARCO，收集文具、服飾與生活用品。',
    stay: vessel, hotelMap: 'ベッセルイン栄駅前',
    transit: '以榮、矢場町周邊步行為主。如需搭名古屋市營地下鐵，班次與票價待確認。',
    source: ['名古屋市交通局', 'https://www.kotsu.city.nagoya.jp/'],
    notes: '各品牌的實際門市、樓層與營業時間待確認。地圖連結以榮商圈搜尋門市。',
    stops: [
      ['上午', 'PARCO 與 Collect Point', '從矢場町周邊開始，確認 Collect Point 的實際門市位置。', '名古屋 PARCO', [['Collect Point', 'Collect Point 名古屋 栄']]],
      ['中午前後', 'LOFT', '安排午餐與文具、雜貨購物。', 'ロフト 名古屋 栄'],
      ['下午', 'GU、UNIQLO', '依當天確認的門市位置安排購物順序。', 'GU 名古屋 栄', [['UNIQLO', 'UNIQLO 名古屋 栄']]],
      ['傍晚', '無印良品', '逛生活用品，結束後回飯店整理採買物品。', '無印良品 名古屋 栄']
    ]
  },
  {
    date: '12/11', weekday: '五', city: '犬山・中部機場', title: '神社、犬山城與機場',
    summary: '參拜別小江神社，登犬山城，晚間移動至機場。',
    stay: '中部國際機場周邊飯店待確認', hotelMap: '',
    transit: '榮 → 別小江神社 → 犬山 → 榮取行李 → 中部國際機場。市區接駁、名鐵車次、轉乘站與車資待確認。',
    source: ['名鐵列車資訊', 'https://www.meitetsu.co.jp/'],
    notes: '先確認犬山城開放時間、最晚入場及票價，也確認原飯店寄放與取件規則。',
    stops: [
      ['早上', '別小江神社', '退房後寄放行李，再前往神社參拜。', '別小江神社'],
      ['中午至下午', '犬山城', '由犬山站一帶前往，視時間逛城下町。', '犬山城'],
      ['傍晚', '回榮取行李', '返回 VESSEL INN 榮取件，預留前往機場的轉乘時間。', 'ベッセルイン栄駅前'],
      ['晚上', '入住機場周邊飯店', '飯店名稱和接駁方式待確認。', airport]
    ]
  },
  {
    date: '12/12', weekday: '六', city: '中部機場・台灣', title: '搭機返台',
    summary: '從機場飯店出發，辦理報到後搭機返台。',
    stay: '返台日', hotelMap: '',
    transit: '機場周邊飯店 → 中部國際機場航廈 → 台灣。航班、航廈、報到時間及飯店接駁待確認。',
    source: ['中部國際機場', 'https://www.centrair.jp/'],
    notes: '依航空公司公告確認報到截止、航廈與托運規定，並預留安檢及出境時間。',
    stops: [
      ['出發前', '飯店退房', '確認前往航廈的步行路線或接駁方式。', ''],
      ['依航班安排', '機場報到與出境', '辦理報到、托運、安檢與出境。', airport],
      ['依航班安排', '搭機返台', '起飛與抵達時間待確認。', '']
    ]
  }
];

const itinerary = document.querySelector('#itinerary');
const navLinks = document.querySelectorAll('.days a');
const mapLink = (query, label = 'Google Maps') =>
  '<a class="map" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query) + '">' + label + ' ↗</a>';

function renderOverview() {
  return `
    <div class="section-head"><h2 id="view-title" tabindex="-1">行程總覽</h2><span class="mini">2026 年 12 月</span></div>
    <div class="day-grid">
      ${days.map((day, index) => `
        <a class="day-card tint-${index % 3}" href="#day-${index + 1}">
          <span class="card-meta"><time datetime="2026-12-${day.date.slice(3)}">${day.date}（${day.weekday}）</time><span>${day.city}</span></span>
          <h3>${day.title}</h3>
          <p>${day.summary}</p>
          <span class="card-bottom">${index === 5 ? '返台日' : '住宿 · ' + day.stay}<span aria-hidden="true">↗</span></span>
        </a>`).join('')}
    </div>`;
}

function renderDay(day, index) {
  return `
    <div class="section-head"><h2 id="view-title" tabindex="-1">${day.title}</h2><span class="mini">${day.date}（${day.weekday}）</span></div>
    <p class="summary">${day.summary} 時段為行程順序建議，實際班次與時間待確認。</p>
    <div class="detail-grid">
      <ol class="timeline" aria-label="每日時間軸">
        ${day.stops.map(([time, title, detail, query, extra = []]) => `
          <li><span class="period">${time}</span><div><h3>${title}</h3><p>${detail}</p>
          <div class="actions">${query ? mapLink(query) : ''}${extra.map(([label, place]) => mapLink(place, label)).join('')}</div>
          </div></li>`).join('')}
      </ol>
      <div class="trip-notes">
        <section><h3>住宿</h3><p>${day.stay}</p>${day.hotelMap ? mapLink(day.hotelMap, '飯店地圖') : ''}</section>
        <section><h3>交通與班次</h3><p>${day.transit}</p><a href="${day.source[1]}">${day.source[0]} ↗</a></section>
        <section><h3>出發前確認</h3><p>${day.notes}</p></section>
      </div>
    </div>
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
  itinerary.innerHTML = index < 0 ? renderOverview() : renderDay(days[index], index);
  navLinks.forEach(link => {
    if (link.hash === (match ? hash : '#overview')) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  if (moveFocus) {
    const title = document.querySelector('#view-title');
    title.focus({ preventScroll: true });
    title.scrollIntoView({ block: 'start' });
  }
}

renderRoute();
window.addEventListener('hashchange', () => renderRoute(true));

const storageKey = 'nagoya-2026-packing';
const packing = document.querySelector('#packing');
const items = [...packing.querySelectorAll('input')];
const count = document.querySelector('#packing-count');
const storageStatus = document.querySelector('#packing-status');
let saved = [];
try {
  const stored = JSON.parse(localStorage.getItem(storageKey));
  if (Array.isArray(stored)) saved = stored;
} catch {
  storageStatus.hidden = false;
}
items.forEach(item => { item.checked = saved.includes(item.value); });

function updateCount() {
  const checked = items.filter(item => item.checked).map(item => item.value);
  count.textContent = `已勾選 ${checked.length} / ${items.length}`;
  return checked;
}

updateCount();
packing.addEventListener('change', () => {
  const checked = updateCount();
  try {
    localStorage.setItem(storageKey, JSON.stringify(checked));
    storageStatus.hidden = true;
  } catch {
    storageStatus.hidden = false;
  }
});
