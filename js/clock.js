function today() {
	const week = ["日", "月", "火", "水", "木", "金", "土"];
	const weekD = week[new Date().getDay()];
	const hour = ('0' + new Date().getHours()).slice(-2);
	const minute = ('0' + new Date().getMinutes()).slice(-2);
	const second = ('0' + new Date().getSeconds()).slice(-2);

	const clocksecond = (360 * new Date().getSeconds()) / 60 - 90;
	const clockminute = (360 * new Date().getMinutes()) / 60 - 90;
	const clockhour = (360 * new Date().getHours()) / 12 - 90 + minute*0.5;


	document.getElementById("view1").innerHTML =
		new Date().getFullYear() + "年" + (new Date().getMonth() + 1) + "月" + new Date().getDate() + "日(" + weekD + ")" + hour + "時" + minute + "分" + second + "秒";

	const text1 = '<div id ="min" style="background:linear-gradient(to right, transparent 50%, #C14242 50%);width:200px;height:1px;transform:translate(0, 96px) rotate(';
	const text2 = '<div id ="min" style="background:linear-gradient(to right, transparent 50%, #000 50%);width:200px;height:2px;transform:translate(0, 98px) rotate(';
	const text3 = '<div id ="min" style="background:linear-gradient(to right, transparent 50%, #472C81 50%);width:160px;height:4px;transform:translate(20px, 100px) rotate(';
	const text4 = 'deg)"></div>';
	const textcircle = '<div style="background:#C14242;width: 20px; height: 20px;border-radius: 10px;transform:translate(90px, 86px);"></div>';

	document.getElementById("view2").innerHTML = 
	text3 + clockhour + text4
	 + text2 + clockminute + text4
	 + text1 + clocksecond + text4
	 + textcircle;
}
setInterval(today, 1000);
