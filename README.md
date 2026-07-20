# 今庄まち歩き PWA 試作版

## 起動
Service Workerと位置情報を使うため、ファイルを直接開かずローカルサーバー経由で起動します。

```bash
cd imajo-walk-pwa
python3 -m http.server 8080
```

ブラウザで `http://localhost:8080` を開いてください。

## 入っている機能
- OpenStreetMap + Leafletによる地図
- 現在地表示
- スポット一覧とカテゴリ絞り込み
- モデルコース表示
- localStorageを使った簡易スタンプラリー
- Web App Manifest / Service WorkerによるPWA基本構成

## 公開前に必要な作業
- 各スポットの正確な緯度経度、説明、営業情報、写真、権利関係の確認
- 現地QRコードとスタンプ取得ロジックの接続
- 独自ドメインとHTTPS環境への配置
- iPhone / Android実機テスト
- 地図タイル利用方針とアクセス規模の確認
