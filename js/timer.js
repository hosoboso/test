//setInterval用変数
let nIntervId;

//「stop」ボタンは初期状態で非表示にする
document.getElementById("stop").style.display ="none";

//タイマー開始ボタン「start」を押した時の動作
//タイマー用関数timerCalc()を1秒ごとに動かすための関数countdown()
function countdown() {
	document.getElementById('endposition').innerHTML = '';
	//setInterval用変数がセットされていないならタイマーを開始する
	//同時に「stop」ボタンを表示、「start」ボタンを非表示にする
	if (!nIntervId) {
		nIntervId = setInterval(timerCalc, 1000);
		document.getElementById("stop").style.display = "";
		document.getElementById("start").style.display ="none";
	}
}

//タイマー用関数timerCalc()
function timerCalc() {
	//テキストエリアの文字を取得する
	let timeStr = document.getElementById("timeId").value;
	
	//テキストエリアの文字判定用の正規表現（数字及び「:」のみ）
	let reStr = /^[0-9:]+$/;

	//テキストエリアの文字列が、数字及び「:」のみでなければエラー判定で、タイマーを停止＆ボタン表示反転
	if ( !(reStr.test(timeStr)) ) {
		timeNum = "Error";
		clearInterval(nIntervId);
		nIntervId = null;
		document.getElementById("stop").style.display = "none";
		document.getElementById("start").style.display ="";

	} else {
	//テキストエリアの文字列を、Number()を使って数字列timeNumに変換
	let timeNum;
		if (timeStr.includes(":")){
		//テキストエリアの文字列に「:」が含まれる数字列なら「10:23」を「10分23秒」と判定して秒計算
			arr = timeStr.split(":");
			timeNum = Number(arr[0]) * 60 + Number(arr[1]);
		} else {
			timeNum = Number(timeStr);
		}
	
	//2秒以上の時は1秒ずつ減らす
	if (timeNum > 1) {
		timeNum = timeNum - 1;
		if (timeNum > 59) {
		//残り60秒以上の時は、「10:23」のような表示に変換する
			let minute = Math.floor(timeNum / 60);
			let second = ('0' + (timeNum % 60)).slice(-2);
			timeNum = minute + ":" + second;
		}
	} else {
		//カウントダウン0になったらタイマーを停止＆ボタン表示反転
		timeNum = 0;
		document.getElementById('endposition').innerHTML = '時間になりました。';
		clearInterval(nIntervId);
		nIntervId = null;
		document.getElementById("stop").style.display = "none";
		document.getElementById("start").style.display ="";
	}

	document.getElementById("timeId").value = timeNum;
	}
}

//タイマー停止ボタン「stop」を押した時の動作
//clearIntervalでタイマーを停止
//setInterval用変数nIntervIdにnullを入れる＆ボタン表示反転
function stopcountdown() {
	clearInterval(nIntervId);
	nIntervId = null;
	document.getElementById("stop").style.display = "none";
	document.getElementById("start").style.display ="";
}

document.getElementById("start").addEventListener("click", countdown);
document.getElementById("stop").addEventListener("click", stopcountdown);