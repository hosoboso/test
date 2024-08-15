const d = document;
const dId = d.getElementById("width_Id");
const lId = d.getElementById("length_Id");
const sId = d.getElementById("selectid");
const vId = d.getElementById("view");

const zenkaku = ["０","１","２","３","４","５","６","７","８","９"];
const hankaku = ["0","1","2","3","4","5","6","7","8","9"];

//文字列に全角数字が含まれていたら半角文字に置換
function charaReplace(x) {
	for (let i = 0; i < zenkaku.length; i++) {
		x = x.replaceAll(zenkaku[i], hankaku[i]);
	}
}

//テキストエリアの文字判定用の正規表現（数字のみ）
const re = /^[0-9]+$/;

//横の長さを入力した時に縦の長さに計算結果を入力する
function ratioCalc1() {
	//ドロップダウンメニュー値取得
	let n = sId.selectedIndex;
	let box_w;
	let box_l;
	
	switch (n) {
		case 0:
			box_w = 160;
			box_l = 90;
			break;
		case 1:
			box_w = 160;
			box_l = 120;
			break;
		case 2:
			box_w = 200;
			box_l = 120;
			break;
		case 3:
			box_w = 160;
			box_l = 100;
			break;
		case 4:
			box_w = 297;
			box_l = 210;
			break;
		case 5:
			box_w = 353;
			box_l = 250;
			break;
		case 6:
			box_w = 90;
			box_l = 160;
			break;
		case 7:
			box_w = 120;
			box_l = 160;
			break;
		case 8:
			box_w = 120;
			box_l = 200;
			break;
		case 9:
			box_w = 100;
			box_l = 160;
			break;
		case 10:
			box_w = 210;
			box_l = 297;
			break;
		case 11:
			box_w = 250;
			box_l = 353;
			break;
	}

	//テキストエリア（横の長さ）の文字列を取得する
	let width_IdStr = dId.value;

	charaReplace(width_IdStr);
	
	let width_result;
	let about_text = "計算結果は整数値ではないため四捨五入しています。";

	if (re.test(width_IdStr)) {
		let widthNum = Number(width_IdStr);
		width_result = Math.round(widthNum * box_l / box_w);
		if ( widthNum * box_l % box_w == 0) {
			about_text = "";
		}
		lId.value = width_result;
		vId.innerHTML = `<div style="width: ${box_w}px;height: ${box_l}px;background-color: #CCC;padding:1em;margin:1em;">${about_text}</div>`;
	} else {
		vId.innerHTML = '入力文字列は無効です。';
	}
}

//縦の長さを入力した時に横の長さに計算結果を入力する
function ratioCalc2() {
	//ドロップダウンメニュー値取得
	let n = sId.selectedIndex;
	let box_w;
	let box_l;
	
	switch (n) {
		case 0:
			box_w = 90;
			box_l = 160;
			break;
		case 1:
			box_w = 120;
			box_l = 160;
			break;
		case 2:
			box_w = 120;
			box_l = 200;
			break;
		case 3:
			box_w = 100;
			box_l = 160;
			break;
		case 4:
			box_w = 210;
			box_l = 297;
			break;
		case 5:
			box_w = 250;
			box_l = 353;
			break;
		case 6:
			box_w = 160;
			box_l = 90;
			break;
		case 7:
			box_w = 160;
			box_l = 120;
			break;
		case 8:
			box_w = 200;
			box_l = 120;
			break;
		case 9:
			box_w = 160;
			box_l = 100;
			break;
		case 10:
			box_w = 297;
			box_l = 210;
			break;
		case 11:
			box_w = 353;
			box_l = 250;
			break;
	}

	//テキストエリア（縦の長さ）の文字列を取得する
	let length_IdStr = lId.value;
	
	charaReplace(length_IdStr);

	let length_result;
	let about_text = "計算結果は整数値ではないため四捨五入しています。";

	if (re.test(length_IdStr)) {
		let lengthNum = Number(length_IdStr);
		length_result = Math.round(lengthNum * box_l / box_w);
		if ( lengthNum * box_l % box_w == 0) {
			about_text = "";
		}
		dId.value = length_result;
		vId.innerHTML = `<div style="width: ${box_l}px;height: ${box_w}px;background-color: #CCC;padding:1em;margin:1em;">${about_text}</div>`;
	} else {
		vId.innerHTML = '入力文字列は無効です。';
	}
}

//テキストエリア入力で実行
dId.addEventListener("input", ratioCalc1);
lId.addEventListener("input", ratioCalc2);

//ドロップダウンメニュー変更時実行
sId.addEventListener("change", ratioCalc1);
