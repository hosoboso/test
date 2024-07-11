//カレンダー

holidayList = [
[2024,1,1,"元日"],
[2024,1,8,"成人の日"],
[2024,2,11,"建国記念の日"],
[2024,2,12,"休日"],
[2024,2,23,"天皇誕生日"],
[2024,3,20,"春分の日"],
[2024,4,29,"昭和の日"],
[2024,5,3,"憲法記念日"],
[2024,5,4,"みどりの日"],
[2024,5,5,"こどもの日"],
[2024,5,6,"休日"],
[2024,7,15,"海の日"],
[2024,8,11,"山の日"],
[2024,8,12,"休日"],
[2024,9,16,"敬老の日"],
[2024,9,22,"秋分の日"],
[2024,9,23,"休日"],
[2024,10,14,"スポーツの日"],
[2024,11,3,"文化の日"],
[2024,11,4,"休日"],
[2024,11,23,"勤労感謝の日"],
[2025,1,1,"元日"],
[2025,1,13,"成人の日"],
[2025,2,11,"建国記念の日"],
[2025,2,23,"天皇誕生日"],
[2025,2,24,"休日"],
[2025,3,20,"春分の日"],
[2025,4,29,"昭和の日"],
[2025,5,3,"憲法記念日"],
[2025,5,4,"みどりの日"],
[2025,5,5,"こどもの日"],
[2025,5,6,"休日"],
[2025,7,21,"海の日"],
[2025,8,11,"山の日"],
[2025,9,15,"敬老の日"],
[2025,9,23,"秋分の日"],
[2025,10,13,"スポーツの日"],
[2025,11,3,"文化の日"],
[2025,11,23,"勤労感謝の日"],
[2025,11,24,"休日"],
[2026,1,1,"元日"],
[2026,2,11,"建国記念の日"],
[2026,4,29,"昭和の日"],
[2026,5,3,"憲法記念日"],
[2026,5,4,"みどりの日"],
[2026,5,5,"こどもの日"],
[2026,11,23,"勤労感謝の日"],
];

const todayY = (new Date()).getFullYear();	//現在の年
const todayM = (new Date()).getMonth() + 1;	//現在の月

//現在の年・月の1日目
const Monthfirstday = new Date(todayY, (todayM - 1), 1);

//現在の年・月の1日目の曜日
const firstweekday = Monthfirstday.getDay();

//月の最初の日曜の計算　月初めの曜日0～6と、日曜日までの日数を足すと、必ず8
const firstsunday = 8 - firstweekday;

//月の日数計算
let daycount;
if (todayM == 2) {	//2月
	if (todayY % 4 == 0) {
		daycount = 29;	//閏年
	} else {
		daycount = 28;	//閏年以外
	}
} else if (todayM % 2 == 1) {	//奇数月は31日
	daycount = 31;
} else {
	daycount = 30;	//2月以外の偶数月は30日
}

let text = '<div class="wrapper">';	//グリッドレイアウトで日付並べる
let caren = [];	//カレンダー日の配列

//月初め用の空欄埋める
for (let i = 0; i < (8-firstsunday); i++) {
	caren[i] = '<div></div>';
	text += caren[i];
}

//1日から順に日数の数だけグリッドレイアウトで埋める
//日曜日・祝日は赤文字、今日は太字

let todayGrid= [];
for (let i = 1; i < daycount; i++) {
todayGrid[i] = i;
}

//祝日だけ変更
for (let i = 1; i < daycount; i++) {
	for (let j = 0; j < holidayList.length; j++) {
		if ( (todayY == holidayList[j][0])&&(todayM == holidayList[j][1])&&(i == holidayList[j][2])){
			todayGrid[i] = '<span style="color: rgb(214, 122, 127)";>' + i + '<br>' + holidayList[j][3] + '</span>';
		}
	}
}

for (let i = 1; i < daycount; i++) {
	if (i == (new Date()).getDate()) {
		if ((i % 7 == firstsunday)||(i % 7 == 0)) {	//日曜日
			caren[i] = '<div><span style="color: rgb(214, 122, 127);font-weight:bold;">' + todayGrid[i] + '</span></div>';
		} else {	//今日は太字
			caren[i] = '<div><span style="font-weight:bold;">' + todayGrid[i] + '</span></div>';
		}
	}else if ((i % 7 == firstsunday)||(i % 7 == 0)) {	//日曜日は赤文字
		caren[i] = '<div><span style="color: rgb(214, 122, 127);">' + todayGrid[i] + '</span></div>';
	} else {
		caren[i] = '<div>' + todayGrid[i] + '</div>';	//通常日は数字そのまま
	}
	text += caren[i];	//「+=」で配列を作っていく
}

//月末埋め
for (let i = ((8-firstsunday) + daycount); i < 36; i++) {
	caren[i] = '<div></div>';
	text += caren[i];
}

	//<h2>で年と月のタイトル。最後は<div class="wrapper">の閉じタグ</div>を置く
document.getElementById("view3").innerHTML = "<h2>" + todayY + '年' + todayM + '月（令和' + (todayY - 2018) + '年）' + "</h2>" + 
'<div class="week"><div style="color: rgb(214, 122, 127);">日</div><div>月</div><div>火</div><div>水</div><div>木</div><div>金</div><div>土</div></div>'
 + text + "</div>";
