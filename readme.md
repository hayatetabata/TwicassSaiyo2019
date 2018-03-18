# モイ株式会社の2019年新卒採用エントリー課題です。

## requirements
* node.js v9.4.0

## Getting started
### cp env
```
  sed -e 's/YOUR_ID/自分のID/g' .env.example > .env

  ※ wss://saiyo2019.moi.st/websocket/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  マイページに記載されている上記のxにあたる部分を「自分のID」の部分と置き換えて実行してください
```

### install
```
  npm install
```

### run server
```
  node server.js
```

### load html
* ブラウザのdeveloper console を起動。
* ブラウザで http://localhost:3000 にアクセス
