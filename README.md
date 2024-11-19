# これは何ですか

ブラウザがHTTPリクエストを行う際のデータ送信をリアルタイムで可視化する方法です。

# 1. example.js

# 2. デモンストレーション

`node --watch server.js`でサーバーを起動します
nodemonは必要ありません！

1. コンソールログを確認
2. ネットワークタブのタイムラインを確認
3. ネットワークタブのレスポンスタブを確認

# 3. サーバークイズの質問を進める

# 4. matcha.cssの紹介

https://matcha.mizu.sh/#

# 5. node --watch と nodemon の比較

## [node --watch](https://nodejs.org/api/cli.html#--watch)

- ネイティブ実装；インストール不要
- 基本的なファイル監視機能を提供 [リンク](https://nodejs.org/api/cli.html#--watch-path)
- JavaScriptファイルに限定

## [nodemon](https://nodemon.io/)

- 外部パッケージ
- 自動/手動再起動
- [高度なパス監視サポート](https://github.com/remy/nodemon#triggering-events-when-nodemon-state-changes)
- [JavaScriptだけでなく他のファイルタイプもサポート](https://github.com/remy/nodemon#specifying-extension-watch-list)
- [イベントフック](https://github.com/remy/nodemon#triggering-events-when-nodemon-state-changes)
