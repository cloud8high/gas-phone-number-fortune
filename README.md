# へっぽこケータイ占い（電話番号占い）
プチハッカソン（アイデアソン）に参加し、GAS (Google Apps Script) を触る機会がありました。  
簡単ではありますが、Google フォーム、スプレッドシート、G-mail を GAS でつなぎ「電話番号占い」のアプリ（？）を作ったので、備忘としてコードや設定を残しておきます。

## 作成したもの（動作イメージ）
Google フォームに、名前、電話番号、メールアドレスを入力して送信する。  
![01_form](https://user-images.githubusercontent.com/40209684/115737093-c9d58d80-a3c6-11eb-8673-95271b1dde94.png)  

フォームへの入力内容が Google スプレッドシート にも保存・追加される。  
![02_spreadsheet](https://user-images.githubusercontent.com/40209684/115738392-f9d16080-a3c7-11eb-905d-2c5517d014d2.png)  

フォーム入力がトリガーとなり、GAS のスクリプトが起動。  
![03_gaseditor](https://user-images.githubusercontent.com/40209684/115738406-fccc5100-a3c7-11eb-9ee1-5e23e5e66093.png)  

スクリプトでは、電話番号に応じたテキトーな占いを行い、結果をメールで送信する。（写真は受信者のメール画面）  
![04_gmail](https://user-images.githubusercontent.com/40209684/115141744-ef862e00-a078-11eb-89d2-ee33856b8b52.png)  

## 設定
`code.gs.js` の内容を、Google フォームと紐づいたスクリプトエディター（`コード.gs`）にコピーし保存する。  
「トリガーの設定」で、ソースを「スプレッドシート」に、イベント種類を「フォーム送信時」に変更する。  
![05_gastrigger](https://user-images.githubusercontent.com/40209684/115738418-ff2eab00-a3c7-11eb-9755-093c66bfd05c.png)