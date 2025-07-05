{
// ボタン切り替え用

// id="n"をquerySelectorAllですべて取得（NodeList）
const nList = document.querySelectorAll('#n');

// 初期状態でvisibilityを"hidden"に設定し非表示にする
nList.forEach((n) => {
	n.style.visibility = "hidden";
});

// id="cbtn"（ボタン）をquerySelectorAllですべて取得（NodeList）
const cbtnList = document.querySelectorAll('#cbtn');

// "cbtn"ボタンを押した時、"visible"と"hidden"状態を切り替える
// indexはquerySelectorAllの順番（インデックス）
// "cbtn"ボタンと対応したnList（NodeList）の個々の項目と合わせるためnList[index]と指定
cbtnList.forEach((cbtn,index) => {
	cbtn.addEventListener("click", () => {
		"visible" == nList[index].style.visibility
		? nList[index].style.visibility = "hidden"
		: nList[index].style.visibility = "visible";
	});
});

// NodeListはArrayではないので、Array.fromを使ってArray化する
// （この後Array.someを使いたいので）
const nArray = Array.from(nList);

// "cbtnall"ボタンを押した時の動作
document.getElementById("cbtnall").addEventListener("click", () => {
	// Array.someで「1つでも"hidden"なら」の条件を指定する
	if (nArray.some((x) => x.style.visibility == "hidden")) {
		nList.forEach((n) => {
			n.style.visibility = "visible";
		});
	} else {
		nList.forEach((n) => {
			n.style.visibility = "hidden";
		});
	}
});

}