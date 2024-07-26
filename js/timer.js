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
	//テキストエリアの文字列を取得する
	let timeStr = document.getElementById("timeId").value;
	
	//テキストエリアの文字判定用の正規表現（数字のみ）
	let reStr1 = /^[0-9]+$/;
	//テキストエリアの文字判定用の正規表現（「数字:数字」表示）
	let reStr2 = /^[0-9]+:[0-9]+$/;

	if ( (reStr1.test(timeStr))||(reStr2.test(timeStr)) ) {
		let timeNum;
		//Number()でテキストエリアの文字列を数値変換
		if ( reStr1.test(timeStr) ) {
			timeNum = Number(timeStr);
		} else {
			//「10:23」などが入力されていた場合は「:」で分割してから残り秒数計算＆数値変換
			let arr = timeStr.split(":");
			timeNum = Number(arr[0]) * 60 + Number(arr[1]);
		}
		
		//2秒以上の時は1秒ずつ減らす
		if (timeNum > 1) {
			timeNum = timeNum - 1;
			//「10:23」のような表示に変換する
			let minute = Math.floor(timeNum / 60);
			let second = ('0' + (timeNum % 60)).slice(-2);
			timeNum = minute + ":" + second;

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
	//正規表現に当てはまらない文字列はタイマーを停止
	} else {
		clearInterval(nIntervId);
		nIntervId = null;
		document.getElementById("stop").style.display = "none";
		document.getElementById("start").style.display ="";
		document.getElementById('endposition').innerHTML = '入力文字列は無効です。';
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