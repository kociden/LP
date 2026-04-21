/**
 * 川上村DAO「レタスペビレッジ」共通データ
 * メインLPおよび10案テンプレート(/municipalities/kawakami/v1〜v10)で共用。
 * コピー・数字・ニュースなどの差し替えはここを編集すればOK。
 */

const B = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export const community = {
  name: 'レタスペビレッジ',
  nameEn: 'LETTUCE-VILLE',
  village: '川上村',
  villageEn: 'KAWAKAMI',
  prefecture: '長野県',
  prefectureEn: 'NAGANO',
  district: '南佐久郡',
  operator: '地域おこし協力隊員 つっちー',
  operatorOrg: '株式会社あるやうむ',
  operatorOrgUrl: 'https://alyawmu.com/',
  catchcopy: 'レタスから、宇宙まで。<br />日本一の村と、つながる。',
  catchcopyAlt1: '100人で耕す、川上村のこれから。',
  catchcopyAlt2: '川上村ファン、はじめませんか？',
  lead: '長野県川上村のDAOコミュニティ「レタスペビレッジ」。村のイベント・体験・人と出会いながら、関係人口の輪をひろげる場所です。',
  shortLead: '長野県川上村のDAOコミュニティ。関係人口を増やす仲間を募集中。',
  lineUrl: 'https://line.me/ti/g2/jWXM52tVZ_ZYify-zXeJD99C4mVFy6cnpaSoYg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default',
  discordUrl: '#',
  instagramUrl: '#',
  threadsUrl: '#',
};

// 運営者プロフィール（※ specialties / activities の中身は土居さんの実情に差し替え推奨）
export const profile = {
  handle: 'つっちー',
  realName: '',                              // 差し替え予定
  role: '川上村 地域おこし協力隊員',
  org: 'レタスペビレッジ運営',
  photo: `${B}images/kawakami/cooperation_person_profile.png`,
  bio: '川上村で地域おこし協力隊として活動しています。村の人と、村外のファンをつなぐDAOコミュニティ「レタスペビレッジ」の立ち上げ・運営を担当しています。',
  // 得意領域（土居さんの実際の得意分野に差し替えてください）
  specialties: [
    'コミュニティ運営',
    'イベント企画・運営',
    'SNS発信（Instagram / Threads）',
    'Web3・DAOの地域活用',
  ],
  // 川上村での活動（実際の活動内容に差し替えてください）
  activities: [
    'LINEオープンチャットの運営・日々の投稿',
    '村内外をつなぐ交流イベントの企画',
    '村の日常・イベントをSNSで発信',
    '村役場・村内議員・村外メンバーとの連携',
  ],
  message: '「ちょっと気になる」くらいで、大丈夫です。まずはLINEオープンチャットを覗いてみてください。川上村とあなたの関わり方を、一緒に見つけていきましょう。',
  tags: ['関係人口', 'DAOコミュニティ', '川上村', 'レタス・宇宙'],
};

// 運営会社プロフィール
export const organization = {
  name: '株式会社あるやうむ',
  nameEn: 'ARUYAUMU INC.',
  role: '運営会社 ／ 地域おこし協力隊DAO',
  url: 'https://alyawmu.com/',
  urlLabel: 'alyawmu.com',
  logo: `${B}images/aruyaumu_logo.png`,
  bio: '地域おこし協力隊DAOおよびレタスペビレッジの運営会社。地域と人をつなぐコミュニティの運営、Web3を活用した地域経済の実験に取り組んでいます。',
  tags: ['運営会社', '地域 × Web3', 'コミュニティ運営'],
};

export const numbers = [
  { value: '100', unit: '+', label: '参加メンバー',     note: '2026.04.16時点' },
  { value: '最短', unit: '',  label: '100名突破記録',   note: 'コミュニティ内' },
  { value: '1/16', unit: '',  label: 'オプチャ開設日', note: '2025年' },
  { value: '月3', unit: '回', label: 'SNS更新',        note: '月・水・金' },
];

export const concepts = [
  {
    icon: '🥬',
    title: 'レタス生産量、日本一の村。',
    body: '夏秋レタスの生産量で日本一。標高の高さと冷涼な気候、火山灰土壌が、シャキッと美味しいレタスを育てます。',
    bullets: [
      '夏秋レタスの一大産地',
      '若手就農者が全国から集まる',
      '農業 × デジタルの可能性',
    ],
  },
  {
    icon: '🚀',
    title: '宇宙飛行士を、輩出した村。',
    body: '標高1,100m、空に近い村。日本人宇宙飛行士・油井亀美也さんの故郷。村の子どもたちは「宇宙に近い」感覚と共に育ちます。',
    bullets: [
      '日本トップクラスの星空',
      'クライミングの聖地・小川山',
      '宇宙への憧れが文化に',
    ],
  },
];

// 画像アセット（public/images/kawakami/ 配下）
// 注：cooperation_person_profile.png は Profile セクション専用。ここには含めない。
export const images = {
  hero:         `${B}images/kawakami/lettuce_field.jpg`,      // ヒーロー用：夕陽のレタス畑
  heroSub:      `${B}images/kawakami/astro_event.jpg`,        // ヒーローサブ：宇宙イベント
  cosmos:       `${B}images/kawakami/astro_event.jpg`,
  cosmos2:      `${B}images/kawakami/astro_event2.jpg`,
  cosmos3:      `${B}images/kawakami/astro_event3.jpg`,
  lettuceField: `${B}images/kawakami/lettuce_field.jpg`,
  idea:         `${B}images/kawakami/kawakami_idea.jpg`,
  meeting1:     `${B}images/kawakami/hybrid_meeting.jpg`,
  meeting2:     `${B}images/kawakami/hybrid_meeting2.jpg`,
  meeting3:     `${B}images/kawakami/hybrid_meeting3.jpg`,
  vicemayor:    `${B}images/kawakami/vicemayor_meeting.jpg`,
  event1:       `${B}images/kawakami/event.jpg`,
  event2:       `${B}images/kawakami/event2.jpg`,
  event3:       `${B}images/kawakami/event3.jpg`,
  dog:          `${B}images/kawakami/dog.jpg`,                // 川上村の犬
  mascot:       `${B}images/kawakami/mascot.jpg`,             // 村のマスコット
  nature:       `${B}images/kawakami/nature.jpg`,             // 自然
  nature2:      `${B}images/kawakami/nature2.jpg`,
  scenary:      `${B}images/kawakami/scenary.jpg`,            // 風景
  station:      `${B}images/kawakami/station.jpg`,            // 駅
  television:   `${B}images/kawakami/television.jpg`,         // TV取材
  marche:       `${B}images/kawakami/マルシェ川上.jpg`,
  dokitaiken:   `${B}images/kawakami/土器体験.jpg`,
};

export const gallery = [
  images.event2, images.event3,
  images.meeting1, images.meeting2, images.meeting3,
  images.idea, images.cosmos, images.vicemayor,
];

export const features = [
  { icon: '💬', title: 'LINEオープンチャットで毎日つながる', body: '村の最新情報・イベント告知をLINEで受け取れます。匿名でも参加できる、気軽なコミュニティです。', image: null },
  { icon: '📸', title: 'SNSで村のリアルを知る',             body: '月・水・金の週3回、Instagram / Threadsを更新。日常・旬の風景・イベントの様子をお届けします。', image: null },
  { icon: '🏕️', title: '現地で体験する',                   body: '活動費は全額、村のイベント・体験・宿泊・飲食へ。来るたびに新しい発見があります。',             image: images.event1 },
  { icon: '🗓️', title: 'イベントを企画する',               body: '川上村で開催するイベントをオープンチャット内で企画・告知できます。やってみたいことを形にできる場です。', image: images.event2 },
  { icon: '🤝', title: '村について考える会議',             body: 'ハイブリッド形式で定期開催。村の未来を一緒に考える、対話の場を設けています。',                  image: images.meeting1 },
  { icon: '🛸', title: 'コアメンへの一歩',                 body: '気が合えばDiscordへ。本気で村を盛り上げる仲間として活動できます。',                              image: images.meeting2 },
];

export const news = [
  {
    date: '2026.04.16',
    tag: 'milestone',
    tagLabel: 'マイルストーン',
    title: 'LINEオープンチャット参加者が100名を突破しました',
    excerpt: '2025年1月の開設から最短記録での100名到達。村内議員・村外大学生・参加者の自主的な認知活動が拡大の原動力に。',
    href: '#',
    image: `${B}images/kawakami/kawakami_idea.jpg`,
  },
  {
    date: '2026.03.20',
    tag: 'event',
    tagLabel: 'イベント',
    title: '春のレタス植え付け体験ツアー(仮)の告知',
    excerpt: '高原野菜のシーズン開幕にあわせて、村内農家との連携イベントを企画中。詳細はオプチャでお知らせします。',
    href: '#',
    image: `${B}images/kawakami/event.jpg`,
  },
  {
    date: '2026.02.10',
    tag: 'press',
    tagLabel: 'プレスリリース',
    title: '川上村DAO「レタスペビレッジ」についての記事がPR TIMESに掲載されました',
    excerpt: 'PR TIMESにて「レタスペビレッジ」の取り組みをご紹介いただきました。コミュニティの背景・構想について、外部メディア向けの解説記事です。',
    href: 'https://prtimes.jp/main/html/rd/p/000000289.000091165.html',
    image: `${B}images/kawakami/vicemayor_meeting.jpg`,
  },
];

export const steps = [
  { n: '01', title: 'LINEオープンチャットに参加',       body: 'まずは入口へ。匿名でも参加できて、いつでも退出できます。気負わずに覗いてみてください。' },
  { n: '02', title: '川上村の情報・イベントを知る',     body: '村のリアルタイムな情報や、現地イベント・体験プログラムが届きます。気になるものから参加してみてください。' },
  { n: '03', title: '気が合ったらDiscordへ(コアメン)',  body: '「もっと深く関わりたい」と思ったら、コアメンとしてDiscordへ。村を一緒に盛り上げる活動が始まります。' },
];

export const faqs = [
  { q: '川上村に住んでいなくても参加できますか？',          a: 'もちろんです。むしろ「村外から関わる人」を増やしたくて運営しています。住んでいなくても、行ったことがなくても歓迎です。' },
  { q: '参加に費用はかかりますか？',                        a: 'LINEオープンチャット・Discordの利用は無料です。現地イベント参加時の交通費・宿泊費・飲食費等は自己負担となります。' },
  { q: '「DAO」って難しそう。Web3の知識は必要ですか？',     a: '一切不要です。「みんなで自律的に村を盛り上げるコミュニティ」くらいの気持ちでOK。専門用語が分からなくても、運営がサポートします。' },
  { q: '顔出し・本名は必要ですか？',                        a: '不要です。ニックネーム・匿名で参加可能。慣れてきたらご自身のタイミングでオープンにする方が多いです。' },
  { q: '実際に川上村に行く必要はありますか？',              a: '必須ではありません。オンラインだけで十分関われます。ただ、現地イベントに参加すると体験がより豊かになるので、タイミングが合えばぜひ。' },
  { q: 'Discord(コアメン)では何をしていますか？',           a: 'イベントの企画・告知、村に関する対話、プロジェクト立ち上げ、メンバー同士の雑談など。LINEで馴染んできた方が自然にDiscordへ移る流れです。' },
  { q: 'どんな人が参加していますか？',                      a: '村民、村内議員、村外の大学生、地域に関心のある社会人など様々。年齢・職業を問わず、川上村に興味がある人たちが集まっています。' },
  { q: '退出したくなったらどうすれば？',                    a: 'いつでも自由に退出できます。引き止めや確認の連絡は一切ありませんので、安心してご参加ください。' },
  { q: '運営は誰ですか？',                                  a: '川上村 地域おこし協力隊員の「つっちー」と、地域おこし協力隊DAOを運営する株式会社あるやうむ（alyawmu.com）の共同運営です。村役場・村内外メンバーと連携しながら進めています。' },
];

// 10案カタログ（/municipalities/kawakami/index.astro で使用）
export const variants = [
  { n: '01', slug: 'v1',  title: '和モダン',         desc: '縦書き・墨色・余白の美学。日本の伝統的な格と奥行きで川上村を表現。', accent: '#2d2926' },
  { n: '02', slug: 'v2',  title: 'アースカラー',     desc: '土・緑・暖色のテクスチャ。レタス畑と高原の温もりを前面に。',       accent: '#8B6914' },
  { n: '03', slug: 'v3',  title: 'ミニマル白',       desc: '大胆な余白とタイポグラフィだけ。情報を削ぎ落とした洗練。',         accent: '#111' },
  { n: '04', slug: 'v4',  title: 'ダークモード',     desc: '宇宙の漆黒。星空とDAO/Web3の先進性を融合。',                       accent: '#00D4AA' },
  { n: '05', slug: 'v5',  title: '雑誌エディトリアル', desc: '非対称グリッド・大胆な文字組み。ドキュメンタリー風の読み物。',     accent: '#C84B31' },
  { n: '06', slug: 'v6',  title: 'ネオブルータリズム', desc: '太罫線・原色・ハードシャドウ。生々しく強いインパクト。',           accent: '#FF4500' },
  { n: '07', slug: 'v7',  title: 'グラスモーフィズム', desc: '透過とぼかし、空と山のグラデ。未来的で幻想的。',                   accent: '#764ba2' },
  { n: '08', slug: 'v8',  title: '昭和レトロ',       desc: '地方広報誌のような手触り。マスタード×深緑のノスタルジー。',         accent: '#8b2e1a' },
  { n: '09', slug: 'v9',  title: 'ポップカラフル',   desc: 'ビビッド原色・有機曲線。明るく親しみやすい。',                     accent: '#FF6B9D' },
  { n: '10', slug: 'v10', title: 'フォトジャーナル', desc: '写真主役のドキュメンタリー風。重みと落ち着き。',                   accent: '#5c7b6d' },
];
