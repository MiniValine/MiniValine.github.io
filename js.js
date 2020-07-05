window.onload = function() {
	var iframes = document.querySelectorAll('iframe');
	iframes[0].setAttribute('src', 'https://ghbtns.com/github-btn.html?user=MiniValine&repo=MiniValine&type=watch&count=false');
	iframes[1].setAttribute('src', 'https://ghbtns.com/github-btn.html?user=MiniValine&repo=MiniValine&type=fork&count=false');
}
if(window.location.hash){
	var checkExist = setInterval(function() {
	   if (typeof jQuery == 'undefined'){return;}
	   if ($("#"+window.location.hash.split("#")[1]).length) {
		  $('html, body').animate({scrollTop: $("#"+window.location.hash.split("#")[1]).offset().top-90}, 1000);
		  clearInterval(checkExist);
	   }
	}, 100);
}
function IsPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
				"SymbianOS", "Windows Phone",
				"iPad", "iPod"];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
};
function IsEDGE() {
	if (navigator.userAgent.indexOf("Edg") > -1) {
		return true;
	}else{
		return false;
	}
};
if(IsPC()){
	var options = {
	  bottom: '64px', // default: '32px'
	  right: 'unset', // default: '32px'
	  left: '32px', // default: 'unset'
	  time: '0.5s', // default: '0.3s'
	  mixColor: '#fff', // default: '#fff'
	  backgroundColor: '#fff',  // default: '#fff'
	  buttonColorDark: '#100f2c',  // default: '#100f2c'
	  buttonColorLight: '#fff', // default: '#fff'
	  saveInCookies: true, // default: true,
	  label: '🌓', // default: ''
	  autoMatchOsTheme: true // default: true
	};
	if(IsEDGE()){
		options.mixColor="black";
	}
	const darkmode = new Darkmode(options);
	darkmode.showWidget();
}