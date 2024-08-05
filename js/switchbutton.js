const d = document;

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
	nd[i].visibility = "hidden";
}

d.getElementById("cbtn1").addEventListener("click", () => {"visible"==nd[1].visibility?nd[1].visibility="hidden":nd[1].visibility="visible";});
d.getElementById("cbtn2").addEventListener("click", () => {"visible"==nd[2].visibility?nd[2].visibility="hidden":nd[2].visibility="visible";});
d.getElementById("cbtn3").addEventListener("click", () => {"visible"==nd[3].visibility?nd[3].visibility="hidden":nd[3].visibility="visible";});
d.getElementById("cbtn4").addEventListener("click", () => {"visible"==nd[4].visibility?nd[4].visibility="hidden":nd[4].visibility="visible";});
d.getElementById("cbtn5").addEventListener("click", () => {"visible"==nd[5].visibility?nd[5].visibility="hidden":nd[5].visibility="visible";});
d.getElementById("cbtn6").addEventListener("click", () => {"visible"==nd[6].visibility?nd[6].visibility="hidden":nd[6].visibility="visible";});
d.getElementById("cbtn7").addEventListener("click", () => {"visible"==nd[7].visibility?nd[7].visibility="hidden":nd[7].visibility="visible";});
d.getElementById("cbtn8").addEventListener("click", () => {"visible"==nd[8].visibility?nd[8].visibility="hidden":nd[8].visibility="visible";});
d.getElementById("cbtn9").addEventListener("click", () => {"visible"==nd[9].visibility?nd[9].visibility="hidden":nd[9].visibility="visible";});
d.getElementById("cbtn10").addEventListener("click", () => {"visible"==nd[10].visibility?nd[10].visibility="hidden":nd[10].visibility="visible";});
d.getElementById("cbtn11").addEventListener("click", () => {"visible"==nd[11].visibility?nd[11].visibility="hidden":nd[11].visibility="visible";});
d.getElementById("cbtn12").addEventListener("click", () => {"visible"==nd[12].visibility?nd[12].visibility="hidden":nd[12].visibility="visible";});
d.getElementById("cbtn13").addEventListener("click", () => {"visible"==nd[13].visibility?nd[13].visibility="hidden":nd[13].visibility="visible";});
d.getElementById("cbtn14").addEventListener("click", () => {"visible"==nd[14].visibility?nd[14].visibility="hidden":nd[14].visibility="visible";});
d.getElementById("cbtn15").addEventListener("click", () => {"visible"==nd[15].visibility?nd[15].visibility="hidden":nd[15].visibility="visible";});
d.getElementById("cbtn16").addEventListener("click", () => {"visible"==nd[16].visibility?nd[16].visibility="hidden":nd[16].visibility="visible";});
d.getElementById("cbtn17").addEventListener("click", () => {"visible"==nd[17].visibility?nd[17].visibility="hidden":nd[17].visibility="visible";});
d.getElementById("cbtn18").addEventListener("click", () => {"visible"==nd[18].visibility?nd[18].visibility="hidden":nd[18].visibility="visible";});
d.getElementById("cbtn19").addEventListener("click", () => {"visible"==nd[19].visibility?nd[19].visibility="hidden":nd[19].visibility="visible";});
d.getElementById("cbtn20").addEventListener("click", () => {"visible"==nd[20].visibility?nd[20].visibility="hidden":nd[20].visibility="visible";});
d.getElementById("cbtn21").addEventListener("click", () => {"visible"==nd[21].visibility?nd[21].visibility="hidden":nd[21].visibility="visible";});
d.getElementById("cbtn22").addEventListener("click", () => {"visible"==nd[22].visibility?nd[22].visibility="hidden":nd[22].visibility="visible";});
d.getElementById("cbtn23").addEventListener("click", () => {"visible"==nd[23].visibility?nd[23].visibility="hidden":nd[23].visibility="visible";});
d.getElementById("cbtn24").addEventListener("click", () => {"visible"==nd[24].visibility?nd[24].visibility="hidden":nd[24].visibility="visible";});
d.getElementById("cbtn25").addEventListener("click", () => {"visible"==nd[25].visibility?nd[25].visibility="hidden":nd[25].visibility="visible";});
d.getElementById("cbtn26").addEventListener("click", () => {"visible"==nd[26].visibility?nd[26].visibility="hidden":nd[26].visibility="visible";});
d.getElementById("cbtn27").addEventListener("click", () => {"visible"==nd[27].visibility?nd[27].visibility="hidden":nd[27].visibility="visible";});
d.getElementById("cbtn28").addEventListener("click", () => {"visible"==nd[28].visibility?nd[28].visibility="hidden":nd[28].visibility="visible";});
d.getElementById("cbtn29").addEventListener("click", () => {"visible"==nd[29].visibility?nd[29].visibility="hidden":nd[29].visibility="visible";});
d.getElementById("cbtn30").addEventListener("click", () => {"visible"==nd[30].visibility?nd[30].visibility="hidden":nd[30].visibility="visible";});

d.getElementById("cbtnall").addEventListener("click", () => {
	if (
		(nd[1].visibility == "hidden")||
		(nd[2].visibility == "hidden")||
		(nd[3].visibility == "hidden")||
		(nd[4].visibility == "hidden")||
		(nd[5].visibility == "hidden")||
		(nd[6].visibility == "hidden")||
		(nd[7].visibility == "hidden")||
		(nd[8].visibility == "hidden")||
		(nd[9].visibility == "hidden")||
		(nd[10].visibility == "hidden")||
		(nd[11].visibility == "hidden")||
		(nd[12].visibility == "hidden")||
		(nd[13].visibility == "hidden")||
		(nd[14].visibility == "hidden")||
		(nd[15].visibility == "hidden")||
		(nd[16].visibility == "hidden")||
		(nd[17].visibility == "hidden")||
		(nd[18].visibility == "hidden")||
		(nd[19].visibility == "hidden")||
		(nd[20].visibility == "hidden")||
		(nd[21].visibility == "hidden")||
		(nd[22].visibility == "hidden")||
		(nd[23].visibility == "hidden")||
		(nd[24].visibility == "hidden")||
		(nd[25].visibility == "hidden")||
		(nd[26].visibility == "hidden")||
		(nd[27].visibility == "hidden")||
		(nd[28].visibility == "hidden")||
		(nd[29].visibility == "hidden")||
		(nd[30].visibility == "hidden")
	) {
		for (let i = 1; i < nd.length; i++) {
			nd[i].visibility = "visible";
		}
	} else {
		for (let i = 1; i < nd.length; i++) {
			nd[i].visibility = "hidden";
		}
	}
;});