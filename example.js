const someData = {
  tea: ["matcha", "chai"],
  coffee: ["black", "latte"],
  sugary: ["soda", "fruit juice"],
  alcohol: ["beer", "wine", "whiskey"],
};
const json = JSON.parse(someData); // なぜこれは同期関数であるのに...

const response = await fetch("/example");
const data = await response.json(); // これを await しなければならないのでしょうか??? 🤔🤔🤔🤔🤔

// A: ボディデータが非常に大きい可能性があり、ダウンロード中にスレッド全体を占有させたくないからです。
// A: 連続したストリーム（つまり生配信とか）からデータを取得している場合、レスポンスが完了しない可能性もあります。

// サーバーがHTTPリクエストにどのように応答するか
//
// - まずヘッダー情報を送信
//   - ステータスコード
//   - ヘッダー
// - ボディをストリーム
