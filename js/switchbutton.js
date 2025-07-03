{

const d = document,
hi = "hidden",
vi = "visible";

const nd = d.querySelectorAll('#n');

nd.forEach((n) => {
	n.style.visibility = hi;
});

const cbId = d.querySelectorAll('#cbtn');

cbId.forEach((n,index) => {
	n.addEventListener("click", () => {
		vi == nd[index].style.visibility
		? nd[index].style.visibility = hi
		: nd[index].style.visibility = vi;
	});
});

const ndArray = Array.from(nd);

d.getElementById("cbtnall").addEventListener("click", () => {
	if (ndArray.some((x) => x.style.visibility == hi)) {
		nd.forEach((n) => {
			n.style.visibility = vi;
		});
	} else {
		nd.forEach((n) => {
			n.style.visibility = hi;
		});
	}
});

}