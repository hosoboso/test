//共通処理用-----------------------------------------

//テキストエリアの文字判定用の正規表現（数字のみ）
const regexStrNum = /^[0-9]+$/;
//テキストエリアの文字判定用の正規表現（「数字:数字」表示）
const regexStrTime = /^[0-9]+:[0-9]+$/;

//全角・半角変換用
const fullwidthNum = ["０","１","２","３","４","５","６","７","８","９"];
const HalfwidthNum = ["0","1","2","3","4","5","6","7","8","9"];


//カウントダウンタイマー-----------------------------------------

//setInterval用変数
let nIntervId;

const stopEl = document.getElementById("stop");
const startEl = document.getElementById("start");
const endID = document.getElementById("endposition");

//「stop」ボタンは初期状態で非表示にする
stopEl.style.display ="none";

//タイマー開始ボタン「start」を押した時の動作
//タイマー用関数timerCalc()を1秒ごとに動かすための関数countdown()
function countdown() {
	endID.innerHTML = '';
	//setInterval用変数がセットされていないならタイマーを開始する
	//同時に「stop」ボタンを表示、「start」ボタンを非表示にする
	if (!nIntervId) {
		nIntervId = setInterval(timerCalc, 1000);
		stopEl.style.display = "";
		startEl.style.display ="none";
	}
}

//タイマー用関数timerCalc()
function timerCalc() {
	//テキストエリアの文字列を取得する
	let timeStr = document.getElementById("timeId").value;
	
	//文字列に全角数字と「：」が含まれていたら半角文字に置換
	for (let i = 0; i < fullwidthNum.length; i++) {
		timeStr = timeStr.replaceAll(fullwidthNum[i], HalfwidthNum[i]);
	}
	timeStr = timeStr.replaceAll("：", ":");
	
	if ( (regexStrNum.test(timeStr))||(regexStrTime.test(timeStr)) ) {
		let timeNum;
		//Number()でテキストエリアの文字列を数値変換
		if ( regexStrNum.test(timeStr) ) {
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
			if (sechk.checked) {	//チェックボックスでサウンドONの時
				const music = new Audio('sound/se1.mp3');	//HTMLAudioElement: Audio() コンストラクター
				music.play();
			}
			endID.innerHTML = "時間になりました。";
			stopcountdown();
		}
	document.getElementById("timeId").value = timeNum;
	//正規表現に当てはまらない文字列はタイマーを停止
	} else {
		endID.innerHTML = "入力文字列は無効です。";
		stopcountdown();
	}
}

//タイマー停止ボタン「stop」を押した時の動作
//clearIntervalでタイマーを停止
//setInterval用変数nIntervIdにnullを入れる＆ボタン表示反転
function stopcountdown() {
	clearInterval(nIntervId);
	nIntervId = null;
	stopEl.style.display = "none";
	startEl.style.display ="";
}

startEl.addEventListener("click", countdown);
stopEl.addEventListener("click", stopcountdown);

//カウントアップ-----------------------------------------

const CountUPendID = document.getElementById("CountUPendposition");
const CountUPtimeID = document.getElementById("CountUPtimeId");

//テキストエリアに文字入力した時に4桁以上なら先頭4文字にカットする
CountUPtimeID.addEventListener("input", () => {
	// 入力値を文字列として取得
	let value = CountUPtimeID.value;
	// 2文字を超える場合は先頭2文字にカット
	if (value.length > 4) {
		input.value = value.slice(0, 4);
	}
});

// ボタンクリック時のカウントアップ
document.getElementById("CountUP").addEventListener("click", () => {
	//表示初期化（div内削除）
	CountUPendID.replaceChildren();
	
	//テキストエリアの文字列を取得する
	let CountUPStr = CountUPtimeID.value;
	
	//文字列に全角数字が含まれていたら半角文字に置換
	for (let i = 0; i < fullwidthNum.length; i++) {
		CountUPStr = CountUPStr.replaceAll(fullwidthNum[i], HalfwidthNum[i]);
	}
	
	//正規表現で数値列か確認し、Number()でテキストエリアの文字列を数値変換
	if ( (regexStrNum.test(CountUPStr)) ) {
		let CountUPNum = Number(CountUPStr);
		//CountUPNumが9999未満ならカウントアップする
			if ( CountUPNum < 9999 ) {
				CountUPNum = CountUPNum + 1;
			} else {
				CountUPendID.innerHTML = "カウントは9999でストップです。";
			}
		CountUPtimeID.value = CountUPNum;
	} else {
		CountUPendID.innerHTML = "入力文字列は無効です。";
		CountUPtimeID.value = 1;
	}
});
