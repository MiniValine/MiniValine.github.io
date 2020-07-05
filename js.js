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

var options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fffe',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();
