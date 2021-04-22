var fortuneTellerName = '占い師 ぴぐちぃー' // 占い師の名前を設定

function onAdd(e) {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet(); // スプレッドシート（book）
  var activeSheet       = activeSpreadsheet.getActiveSheet(); // アクティブシート（sheet）
  var lastRowIndex = activeSheet.getLastRow(); //  最終行indexを取得
  
  var userName    = activeSheet.getRange(lastRowIndex, 2).getValue(); // 2列目：ニックネームを取得
  var phoneNumber = activeSheet.getRange(lastRowIndex, 3).getValue(); // 3列目：電話番号を取得
  var mailAddress = activeSheet.getRange(lastRowIndex, 4).getValue(); // 4列目：メールアドレスを取得

  var mailSubject = '[占い結果のご連絡] へっぽこケータイ占い';      // メール件名
  var mailBody    = calculateFortune(userName, phoneNumber);  // メール本文（別関数で生成）
  var mailOptions = {
    name: fortuneTellerName                                   // 送信者名の設定
  };

  GmailApp.sendEmail(
    mailAddress,
    mailSubject,
    mailBody,
    mailOptions
  )
}

// 占い結果生成関数
function calculateFortune(userName, phoneNumber) {
  var arrayPhoneNumber = String(phoneNumber).split(''); // [ '0', '1', '2', '3' ]
  var total = arrayPhoneNumber.reduce(function(sum, element){
    return sum + Number(element);
  }, 0); // ex) 6
  
  fortuneMessage = ''
  remainder = total % 5;
  switch (remainder) {
    case 0:
      fortuneMessage = `
        電話番号の下4桁が「${phoneNumber}」の、
        ${userName}さんの占い結果をお伝えします。

        ${userName}さんの今後1年間の運勢は★3つです。

        楽しいことだけでなく、辛いこともありそうです。
        しかし、冷静に向き合うことで人間としても成長でき、来年以降の飛躍につながります。
        視野を広く持ち、楽観的に考えましょう。すぐに光が見えてきます。

        ラッキーアイテムは、歯磨き粉です。

        ご利用ありがとうございました。
        -- ${fortuneTellerName}
      `;
      break;
    case 1:
      fortuneMessage = `
        電話番号の下4桁が「${phoneNumber}」の、
        ${userName}さんの占い結果をお伝えします。

        ${userName}さんの今後1年間の運勢は★3つです。

        いままで順調に進んでいたことが、急にうまくいかなくなる年になりそうです。
        人との縁が解決の糸口をくれるでしょう。苦しいことをひとりで抱え込まないようにしてください。
        想像もしていなかった人が助けてくれ、一生の友人ができることでしょう。

        ラッキーアイテムは、クレジットカードです。

        ご利用ありがとうございました。
        -- ${fortuneTellerName}
      `;
      break;
    case 2:
      fortuneMessage = `
        電話番号の下4桁が「${phoneNumber}」の、
        ${userName}さんの占い結果をお伝えします。

        ${userName}さんの今後1年間の運勢は★4つです。

        これまでの努力が実を結びはじめる年になりそうです。
        チャンスは突然やってきます。そのチャンスを「掴む」意識を持ってください。
        難しく考えずにフットワークを軽く行動しましょう。一方でこれまでの努力も継続してください。

        ラッキーアイテムは、電波時計です。

        ご利用ありがとうございました。
        -- ${fortuneTellerName}
      `;
      break;
    case 3:
      fortuneMessage = `
        電話番号の下4桁が「${phoneNumber}」の、
        ${userName}さんの占い結果をお伝えします。

        ${userName}さんの今後1年間の運勢は★4つです。

        風向きが大きく変わり、様々なことに追い風が吹く1年になりそうです。
        しかし、手を広げすぎないようにしてください。
        優先順位を考え、取り組むことを絞ることが、成功への秘訣です。

        ラッキーアイテムは、木彫りの熊です。

        ご利用ありがとうございました。
        -- ${fortuneTellerName}
      `;
      break;
    case 4:
      fortuneMessage = `
        電話番号の下4桁が「${phoneNumber}」の、
        ${userName}さんの占い結果をお伝えします。

        ${userName}さんの今後1年間の運勢は★5つです。

        何事も順調に進み、豊かで幸せな1年になりそうです。
        ここ数年で最も運勢が良い年です。興味があること、やってみたいことなど、様々なことに積極的にチャレンジをしてみましょう。
        ただし、お金の使いすぎには注意です。身の丈にあった出費に抑えるようにしてください。
        今年の取り組みは「たね」になります。来年以降に綺麗な「花」が咲くことでしょう。

        ラッキーアイテムは、色鉛筆です。

        ご利用ありがとうございました。
        -- ${fortuneTellerName}
      `;
      break;
  }
  return fortuneMessage.replace(/^\s+$|^ {8}/gm, ''); // 不要なインデントを消す。'gm'は'グローバル','複数行'の意
}
