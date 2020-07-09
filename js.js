window.onload = function() {
	var iframes = document.querySelectorAll('iframe');
	iframes[0].setAttribute('src', 'https://ghbtns.com/github-btn.html?user=MiniValine&repo=MiniValine&type=watch&count=false');
}
if(window.location.hash){
	var checkExist = setInterval(function() {
	   if (typeof jQuery == 'undefined'){return;}
	   if ($("#"+decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-")).length) {
		  $('html, body').animate({scrollTop: $("#"+decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-")).offset().top-10}, 500);
		  clearInterval(checkExist);
	   }
	}, 100);
}
function supportCss3(style) {  
	var prefix = ['webkit', 'Moz', 'ms', 'o'],  
	i,  
	humpString = [],  
	htmlStyle = document.documentElement.style,  
	_toHumb = function (string) {  
	return string.replace(/-(\w)/g, function ($0, $1) {  
	return $1.toUpperCase();  
	});  
	};  
	for (i in prefix)  
	humpString.push(_toHumb(prefix[i] + '-' + style));  
	humpString.push(_toHumb(style));  
	for (i in humpString)  
	if (humpString[i] in htmlStyle) return true;  
	return false;  
};

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
if(supportCss3('mix-blend-mode')){
	const darkmode = new Darkmode(options);
	darkmode.showWidget();
}