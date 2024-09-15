{

const d = document,

aTag = [
	d.getElementById("x-social-button"),
	d.getElementById("facebook-social-button"),
	d.getElementById("hatena-social-button"),
	d.getElementById("line-social-button"),
	d.getElementById("bluesky-social-button"),
	d.getElementById("taittsuu-social-button"),
],

socialName = 'hoso_boso',
webAddress = location.href,
webTitle = encodeURIComponent(d.title),

newUrl = [
`https://x.com/share?url=${webAddress}&text=${webTitle}&via=${socialName}`,
`https://www.facebook.com/share.php?u=${webAddress}`,
`https://b.hatena.ne.jp/entry/${webAddress}`,
`https://line.me/R/msg/text/?${webTitle}%0A${webAddress}`,
`https://bsky.app/intent/compose?text=${webTitle}%20${webAddress}`,
`https://taittsuu.com/share?text=${webTitle}%0A${webAddress}%20%40${socialName}`,
];

for (let i = 0; i < aTag.length; i++) {
	aTag[i].setAttribute("href",newUrl[i]);
}

}