# 地域おこし協力隊DAO — LP

## セットアップ

```bash
npm install
```

## 開発サーバー起動

```bash
npm run dev
```

http://localhost:4321/ が開きます。

## 構成

このリポジトリは「**デザイン案（たたき台）**」と「**各自治体の本番LP**」の2種類を含みます。

- `/` — 10案のデザインたたき台一覧
- `/municipalities` — 自治体別の本番LP一覧
- `/municipalities/<slug>` — 各自治体の本番LP

## デザイン案一覧（たたき台 v1〜v10）

| # | デザイン名 | URL | 方向性 |
|---|---|---|---|
| 01 | 和モダン | `/v1-wa-modern` | 縦書き・墨色・余白の美学 |
| 02 | アースカラー | `/v2-earth` | 暖色・テクスチャ・有機的 |
| 03 | ミニマル白 | `/v3-minimal` | 大胆な余白・タイポグラフィ主役 |
| 04 | ダークモード | `/v4-dark` | DAO/Web3の先進性 |
| 05 | 雑誌エディトリアル | `/v5-editorial` | 非対称グリッド・読み物風 |
| 06 | ネオブルータリズム | `/v6-brutalism` | 太罫線・原色・ハードシャドウ |
| 07 | グラスモーフィズム | `/v7-glass` | 透過とぼかし・未来的・幻想的 |
| 08 | 昭和レトロ | `/v8-showa` | 地方広報誌的・ノスタルジー |
| 09 | ポップカラフル | `/v9-pop` | ビビッド原色・有機曲線・遊び心 |
| 10 | フォトジャーナル | `/v10-photo` | 写真主役・ドキュメンタリー |

## 自治体別 本番LP

| 自治体 | URL | ステータス | 備考 |
|---|---|---|---|
| 長野県 川上村 | `/municipalities/kawakami` | 公開中（素材差し替え前） | レタス・千曲川源流・小川山 |

### 新しい自治体LPの追加方法

1. `src/pages/municipalities/<slug>.astro` を作成（`kawakami.astro` をコピーがおすすめ）
2. ファイル冒頭の `const village = { ... }` を書き換える：
   - `name`, `prefecture`, `tagline`, `heroLead`
   - `numbers`（数字で見る）
   - `highlights`（見どころ3つ）
   - `missions`（DAOで取り組むテーマ3つ）
   - `voices`（声のプレースホルダー）
   - `partners`（運営・協力先）
3. `src/pages/municipalities/index.astro` の `villages` 配列に追加
4. 必要なら CSS の `--accent` や `--photo-*` カラーを自治体イメージに合わせて調整

### 素材（写真）差し替え

現在は CSS グラデーションによるプレースホルダー（`.photo-hero` / `.photo-field` / `.photo-river` / `.photo-sky` / `.photo-cta`）を使用しています。実写に差し替える際は：

```css
.photo-hero { background: url('/images/kawakami-hero.jpg') center/cover; }
```

のように書き換えれば OK。画像は `public/images/` 以下に置いてください。

## 技術スタック

- [Astro](https://astro.build/) v6
- 手書き CSS（Tailwind 不使用）
- Google Fonts（Noto Sans JP / Noto Serif JP / BIZ UDGothic / BIZ UDMincho / Inter）

## ディレクトリ構成

```
src/
├── layouts/
│   └── Base.astro              # 共通レイアウト（head, フォント読み込み）
├── pages/
│   ├── index.astro             # デザイン案一覧（10案）
│   ├── v1-wa-modern.astro      # 和モダン
│   ├── v2-earth.astro          # アースカラー
│   ├── v3-minimal.astro        # ミニマル白
│   ├── v4-dark.astro           # ダークモード
│   ├── v5-editorial.astro      # 雑誌エディトリアル
│   ├── v6-brutalism.astro      # ネオブルータリズム
│   ├── v7-glass.astro          # グラスモーフィズム
│   ├── v8-showa.astro          # 昭和レトロ
│   ├── v9-pop.astro            # ポップカラフル
│   ├── v10-photo.astro         # フォトジャーナル
│   └── municipalities/
│       ├── index.astro         # 自治体LP一覧
│       └── kawakami.astro      # 長野県川上村
└── components/                 # 今後コンポーネント分割用
```

## ワークフロー

1. 10案を見比べて方向性を決める（ミックスもOK）
2. 本番LPのベースとなる案を選択
3. 各自治体の素材（実写、実数、実コピー、隊員の声）を集める
4. 素材を各自治体ファイルの `village` データに差し込む
5. 最終調整・公開
