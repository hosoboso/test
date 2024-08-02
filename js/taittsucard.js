const card = [
"サメハダ",
"すごい机",
"壊れかけのレディオ",
"チンジャオロースーのぬいぐるみ",
"ログボの味",
"ご飯とハンバーグと野菜が入っている箱",
"雪夜こんこ",
"沼に住む怪異",
"うさぎ",
"スーパーでカートを押しながらカードバトルをするガードマンのクレジットカードが描かれたカード",
"一握りのダイヤモンド",
"アメっぽいもの",
"目つきの悪い土偶",
"チーターが落っこチーター！（笑）",
"踊るモナカ",
"人工知能が作った人工知能",
"とても薄い麦茶",
"儲かっている桶屋",
"一流シェフのキーホルダー",
"野菜をモリモリおいしく食べるロボット",
"銀河将棋帝国",
"赫の精霊",
"謎のSNS",
"翠の精霊",
"至高の煎餅",
"蒼の精霊",
"隙のないディフェンス",
"究極時空魔法「ル・フォースガル」",
"ビッグバンキック",
"我が名はスザク",
];

const Food = [
"ほかほか紅鮭弁当",
"ジューシー超からあげ弁当",
"シャキシャキ大盛りサラダ",
"挽きたてホットコーヒー",
"踊らないタイプのモナカ",
"あんことクリームが入ったどら焼き",
"とてつもなく食べやすい水ようかん",
"おばあちゃんちに行くと出してくれる名前が分からないやつ",
"サクサクとろ&#x301c;りアップルパイ",
"大きくて厚みがあって少し柔らかいクッキー",
"宝石のようなジェリービーンズ",
"大切な日に食べたくなるケーキ",
"デラビミンC",
"ポッカリスイート",
"IN THE エナジーゼリー",
"とても速い麦茶",
];

const rate = ["大好物","けっこう好き","ちょっと苦手","かなり苦手",];

const result = [
[rate[0],rate[1],rate[0],rate[2],rate[3],rate[3],rate[3],rate[3],rate[1],rate[3],rate[1],rate[1],rate[2],rate[2],rate[2],rate[1]],
[rate[0],rate[0],rate[2],rate[3],rate[0],rate[0],rate[0],rate[0],rate[0],rate[0],rate[0],rate[0],rate[1],rate[1],rate[1],rate[1]],
[rate[1],rate[3],rate[0],rate[0],rate[0],rate[0],rate[1],rate[2],rate[2],rate[2],rate[2],rate[2],rate[0],rate[1],rate[2],rate[0]],
[rate[0],rate[0],rate[0],rate[1],rate[3],rate[2],rate[3],rate[1],rate[1],rate[2],rate[1],rate[1],rate[0],rate[0],rate[0],rate[0]],
[rate[2],rate[2],rate[1],rate[0],rate[0],rate[0],rate[0],rate[0],rate[3],rate[2],rate[2],"(未検証)",rate[3],rate[3],rate[3],rate[3]],
[rate[0],rate[0],rate[0],rate[0],rate[2],rate[2],rate[3],rate[3],rate[2],rate[2],rate[3],"(未検証)",rate[3],rate[1],rate[1],rate[0]],
[rate[0],rate[0],rate[0],rate[3],rate[2],rate[2],rate[2],rate[0],rate[1],rate[0],rate[0],"(未検証)",rate[2],rate[0],rate[0],rate[0]],
[rate[2],rate[3],rate[0],rate[1],rate[1],rate[1],rate[1],rate[0],rate[2],rate[2],rate[2],"(未検証)",rate[2],rate[2],rate[2],rate[0]],
[rate[3],rate[3],rate[0],rate[3],rate[3],rate[2],rate[3],rate[2],rate[3],rate[3],rate[3],"(未検証)",rate[3],rate[3],rate[3],rate[1]],
[rate[2],rate[0],rate[3],rate[0],rate[0],rate[0],rate[0],rate[0],rate[1],rate[3],rate[2],"(未検証)",rate[0],rate[0],rate[0],rate[0]],
[rate[3],rate[3],rate[3],rate[2],rate[2],rate[2],rate[1],rate[2],rate[1],rate[1],rate[0],"(未検証)",rate[1],rate[1],rate[1],rate[3]],
[rate[2],rate[2],rate[3],rate[3],rate[1],rate[1],rate[1],rate[1],rate[0],rate[0],rate[0],"(未検証)",rate[1],rate[1],rate[1],rate[1]],
[rate[1],rate[0],rate[1],rate[1],rate[1],rate[0],rate[1],rate[0],rate[2],rate[3],rate[3],"(未検証)",rate[0],rate[1],rate[1],rate[0]],
[rate[0],rate[0],rate[1],rate[3],rate[3],rate[3],rate[3],rate[3],rate[3],rate[3],rate[3],"(未検証)",rate[3],rate[2],rate[3],rate[0]],
[rate[2],rate[2],rate[3],rate[0],rate[0],rate[0],rate[0],rate[0],rate[0],rate[0],rate[0],"(未検証)",rate[1],rate[1],rate[1],rate[1]],
[rate[1],rate[1],rate[1],rate[2],rate[0],rate[1],rate[1],rate[3],rate[1],rate[1],rate[1],"(未検証)",rate[1],rate[1],rate[1],rate[2]],
[rate[0],rate[0],rate[1],rate[3],rate[0],rate[0],rate[0],rate[0],rate[0],rate[0],rate[0],"(未検証)",rate[3],rate[3],rate[2],rate[0]],
[rate[0],rate[1],rate[0],rate[0],rate[3],rate[2],rate[2],rate[2],rate[2],rate[1],rate[2],"(未検証)",rate[1],rate[1],rate[0],rate[2]],
[rate[0],rate[0],rate[0],rate[1],rate[0],rate[0],rate[0],rate[2],rate[0],rate[0],rate[0],"(未検証)",rate[2],rate[2],rate[2],rate[3]],
[rate[0],rate[0],rate[0],rate[0],rate[0],rate[0],rate[0],rate[0],rate[0],rate[0],rate[0],"(未検証)",rate[2],rate[2],rate[3],rate[1]],
[rate[3],rate[3],rate[3],rate[3],rate[3],rate[3],rate[3],rate[3],rate[3],rate[3],rate[2],"(未検証)",rate[0],rate[0],rate[0],rate[1]],
[rate[3],rate[0],rate[0],rate[0],rate[1],rate[0],rate[1],rate[0],rate[2],rate[3],rate[3],"(未検証)",rate[3],rate[0],rate[0],rate[0]],
[rate[3],rate[0],rate[3],rate[3],rate[3],rate[3],rate[2],rate[1],rate[3],rate[2],rate[3],"(未検証)",rate[0],rate[0],rate[0],rate[1]],
[rate[1],rate[0],rate[2],rate[3],rate[1],rate[1],rate[1],rate[1],rate[0],rate[0],rate[0],"(未検証)",rate[0],rate[0],rate[0],rate[0]],
[rate[1],rate[3],rate[0],rate[1],rate[1],rate[1],rate[1],rate[0],rate[1],rate[1],rate[2],"(未検証)",rate[1],rate[1],rate[3],rate[1]],
[rate[0],rate[2],rate[1],rate[0],rate[1],rate[0],rate[1],rate[0],rate[2],rate[3],rate[3],"(未検証)",rate[0],rate[2],rate[1],rate[1]],
[rate[1],rate[2],rate[1],rate[2],rate[1],rate[0],rate[0],rate[0],rate[0],rate[1],rate[0],"(未検証)",rate[3],rate[3],rate[2],rate[0]],
[rate[0],rate[1],rate[0],rate[3],rate[2],rate[2],rate[2],rate[1],rate[1],rate[0],rate[0],"(未検証)",rate[0],rate[0],rate[0],rate[2]],
[rate[2],rate[1],rate[3],rate[3],rate[2],rate[2],rate[1],rate[3],rate[1],rate[2],rate[2],"(未検証)",rate[3],rate[3],rate[3],rate[3]],
[rate[2],rate[0],rate[2],rate[3],rate[3],rate[2],rate[3],rate[0],rate[1],rate[0],rate[0],"(未検証)",rate[3],rate[0],rate[1],rate[2]],
];

function cardResult() {
	const formNumCard = document.getElementById("selectCard").selectedIndex;
	const formNumFood = document.getElementById("selectFood").selectedIndex;
	document.getElementById("view").innerHTML = `「${card[formNumCard]}」に「${Food[formNumFood]}」を与えた結果は『${result[formNumCard][formNumFood]}』`;
}

document.getElementById("card").addEventListener("change", cardResult);