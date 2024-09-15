{

const d = document,
hi = "hidden",
vi = "visible";

const nd = [
	"0",
	d.getElementById("n1").style,
	d.getElementById("n2").style,
	d.getElementById("n3").style,
	d.getElementById("n4").style,
	d.getElementById("n5").style,
	d.getElementById("n6").style,
	d.getElementById("n7").style,
	d.getElementById("n8").style,
	d.getElementById("n9").style,
	d.getElementById("n10").style,
	d.getElementById("n11").style,
	d.getElementById("n12").style,
	d.getElementById("n13").style,
	d.getElementById("n14").style,
	d.getElementById("n15").style,
	d.getElementById("n16").style,
	d.getElementById("n17").style,
	d.getElementById("n18").style,
	d.getElementById("n19").style,
	d.getElementById("n20").style,
	d.getElementById("n21").style,
	d.getElementById("n22").style,
	d.getElementById("n23").style,
	d.getElementById("n24").style,
	d.getElementById("n25").style,
	d.getElementById("n26").style,
	d.getElementById("n27").style,
	d.getElementById("n28").style,
	d.getElementById("n29").style,
	d.getElementById("n30").style
];

for (let i = 1; i < nd.length; i++) {
	nd[i].visibility = hi;
}

const cbId = [
	"0",
	d.getElementById("cbtn1"),
	d.getElementById("cbtn2"),
	d.getElementById("cbtn3"),
	d.getElementById("cbtn4"),
	d.getElementById("cbtn5"),
	d.getElementById("cbtn6"),
	d.getElementById("cbtn7"),
	d.getElementById("cbtn8"),
	d.getElementById("cbtn9"),
	d.getElementById("cbtn10"),
	d.getElementById("cbtn11"),
	d.getElementById("cbtn12"),
	d.getElementById("cbtn13"),
	d.getElementById("cbtn14"),
	d.getElementById("cbtn15"),
	d.getElementById("cbtn16"),
	d.getElementById("cbtn17"),
	d.getElementById("cbtn18"),
	d.getElementById("cbtn19"),
	d.getElementById("cbtn20"),
	d.getElementById("cbtn21"),
	d.getElementById("cbtn22"),
	d.getElementById("cbtn23"),
	d.getElementById("cbtn24"),
	d.getElementById("cbtn25"),
	d.getElementById("cbtn26"),
	d.getElementById("cbtn27"),
	d.getElementById("cbtn28"),
	d.getElementById("cbtn29"),
	d.getElementById("cbtn30"),
]

for (let i = 1; i < cbId.length; i++) {
	cbId[i].addEventListener("click", () => {vi==nd[i].visibility?nd[i].visibility=hi:nd[i].visibility=vi;});
}

d.getElementById("cbtnall").addEventListener("click", () => {
	if (
		(nd[1].visibility == hi)||
		(nd[2].visibility == hi)||
		(nd[3].visibility == hi)||
		(nd[4].visibility == hi)||
		(nd[5].visibility == hi)||
		(nd[6].visibility == hi)||
		(nd[7].visibility == hi)||
		(nd[8].visibility == hi)||
		(nd[9].visibility == hi)||
		(nd[10].visibility == hi)||
		(nd[11].visibility == hi)||
		(nd[12].visibility == hi)||
		(nd[13].visibility == hi)||
		(nd[14].visibility == hi)||
		(nd[15].visibility == hi)||
		(nd[16].visibility == hi)||
		(nd[17].visibility == hi)||
		(nd[18].visibility == hi)||
		(nd[19].visibility == hi)||
		(nd[20].visibility == hi)||
		(nd[21].visibility == hi)||
		(nd[22].visibility == hi)||
		(nd[23].visibility == hi)||
		(nd[24].visibility == hi)||
		(nd[25].visibility == hi)||
		(nd[26].visibility == hi)||
		(nd[27].visibility == hi)||
		(nd[28].visibility == hi)||
		(nd[29].visibility == hi)||
		(nd[30].visibility == hi)
	) {
		for (let i = 1; i < nd.length; i++) {
			nd[i].visibility = vi;
		}
	} else {
		for (let i = 1; i < nd.length; i++) {
			nd[i].visibility = hi;
		}
	}
;});

}