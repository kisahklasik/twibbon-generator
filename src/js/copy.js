!function(e,n){var t,o,a,r,i,d,c="getSelection",l="removeAllRanges",s="addRange",f="parentNode",g="appendChild",u="test";e[c]&&n.addEventListener("copy",function(m){for(o=m.target;3===o.nodeType;)o=o[f];if(r=n.createElement("div"),(t=e[c]())&&t.rangeCount&&(t=t.getRangeAt(0))&&(a=t.cloneRange(),t=t.cloneContents())){for(;i=t.firstChild;)r[g](i);if(!/^(pre|code)$/i[u](o.nodeName||"")&&!/(^|\s)no-attribution(\s|$)/i[u](o.className||"")){var p=e.location.href;r.innerHTML+="<br><br>"+n.title+'<br >Source: <a href="'+p+'">'+p+"</a>"}d=n.createRange(),n.body[g](r),d.selectNodeContents(r),(t=e[c]())[l](),t[s](d),setTimeout(function(){r[f].removeChild(r),t[l](),t[s](a)})}},!1)}(window,document);
