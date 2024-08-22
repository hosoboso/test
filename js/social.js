{

const aTag = [
document.getElementById("x-social-button"),
document.getElementById("facebook-social-button"),
document.getElementById("hatena-social-button"),
document.getElementById("line-social-button"),
document.getElementById("bluesky-social-button"),
document.getElementById("taittsuu-social-button"),
]

const socialName = 'hoso_boso';
const webAddress = location.href;
const webTitle = encodeURIComponent(document.title);

const newUrl = [
`https://x.com/share?url=${webAddress}&text=${webTitle}&via=${socialName}`,
`https://www.facebook.com/share.php?u=${webAddress}`,
`https://b.hatena.ne.jp/entry/${webAddress}`,
`https://line.me/R/msg/text/?${webTitle}%0A${webAddress}`,
`https://bsky.app/intent/compose?text=${webTitle}%20${webAddress}`,
`https://taittsuu.com/share?text=${webTitle}%0A${webAddress}%20%40${socialName}`,
]

for (let i = 0; i < aTag.length; i++) {
	aTag[i].setAttribute("href",newUrl[i]);
}

}