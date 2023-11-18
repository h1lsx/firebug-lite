(function() {
  var id = "mobileperfbkmdiv";
  var div = document.getElementById(id);
  if ( div ) {
    div.style.display = "block";
  }
  else {
    var div = document.createElement('div');
    div.id = id;
    div.style.cssText = "border: 2px solid #555; padding: 0; margin: 8px; position: absolute; top: 0px; left: 40%; font-family: Arial; z-index: 9999; text-align: left;";
    var sHtml = "<div style='border: 2px solid #85BE1B; background: white; padding: 0 0 2px 8px; font-size: 12px; line-height: 140%; color: #000;'>" +
      "<div style='text-align: right;'><a style='font-weight: bold; color: #FFF; text-decoration: none; border: 1px solid #C00; padding: 0 2px 0 2px; background: #C00;' href='#' onclick='document.getElementById(\"" + id + "\").style.display=\"none\"; return false;'>X</a></div>" +
      "<div style='margin-bottom: 4px;'><a style='color: #00E; text-decoration: underline;' href=\"javascript:(function(F,i,r,e,b,u,g,L,I,T,E){if(F.getElementById(b))return;E=F[i+'NS']&&F.documentElement.namespaceURI;E=E?F[i+'NS'](E,'script'):F[i]('script');E[r]('id',b);E[r]('src',I+g+T);E[r](b,u);(F[e]('head')[0]||F[e]('body')[0]).appendChild(E);E=new%20Image;E[r]('src',I+L);})(document,'createElement','setAttribute','getElementsByTagName','FirebugLite','4','firebug-lite.js','skin/xp/sprite.png','https://h1lsx.github.io/firebug-lite/','#startOpened');\">Firebug Lite</a></div>" +

      "<div style='margin-bottom: 4px;'><a style='color: #00E; text-decoration: underline;' href=\"javascript:(function(){var%20jselem=document.createElement('SCRIPT');jselem.type='text/javascript';jselem.src='//stevesouders.com/mobileperf/pageresources.js?t='+Number(new%20Date());document.getElementsByTagName('head')[0].appendChild(jselem);})();\">Page Resources</a></div>" +

      "<div style='margin-bottom: 4px;'><a style='color: #00E; text-decoration: underline;' href=\"javascript:(function(){var%20jselem=document.createElement('SCRIPT');jselem.type='text/javascript';jselem.src='//stevesouders.com/mobileperf/docsource.js?t='+Number(new%20Date());document.getElementsByTagName('head')[0].appendChild(jselem);})();\">Docsource</a></div>" +

      "<div style='margin-bottom: 4px;'><a style='color: #00E; text-decoration: underline;' href=\"javascript:(function(){var%20jselem=document.createElement('SCRIPT');jselem.type='text/javascript';jselem.src='//stevesouders.com/mobileperf/webtiming.js?t='+Number(new%20Date());document.getElementsByTagName('head')[0].appendChild(jselem);})();\">Web Timing</a></div>" +

      "<div style='margin-bottom: 4px;'><a style='color: #00E; text-decoration: underline;' href=\"javascript:(function(){var%20script=document.createElement('script');script.type='text/javascript';script.src='//mir.aculo.us/dom-monster/dommonster.js?'+Math.floor((+new%20Date)/(864e5));document.getElementsByTagName('body')[0].appendChild(script);})()\">DOM Monster</a></div>" +

      "<div style='margin-bottom: 4px;'><a style='color: #00E; text-decoration: underline;' href=\"javascript:(function(){var%20jselem=document.createElement('SCRIPT');jselem.type='text/javascript';jselem.src='//stevesouders.com/mobileperf/storager.js?t='+Number(new%20Date());document.getElementsByTagName('head')[0].appendChild(jselem);})();\">Storager</a></div>" +

            "<div style='margin-bottom: 4px;'><a style='color: #00E; text-decoration: underline;' href=\"javascript:(function(y,p,o){p=y.body.appendChild(y.createElement('iframe'));p.id='YSLOW-bookmarklet';p.style.cssText='display:none';o=p.contentWindow.document;o.open().write('<head><body onload=%22YUI_config={win:window.parent,doc:window.parent.document};var d=document;d.getElementsByTagName(\\\'head\\\')[0].appendChild(d.createElement(\\\'script\\\')).src=\\\'//d.yimg.com/jc/yslow-bookmarklet.js\\\'%22>');o.close()}(document))\">YSlow</a></div>" +

      "<div style='margin-bottom: 4px;'><a style='color: #00E; text-decoration: underline;' href=\"javascript:(function(){var%20spritemejs=document.createElement('SCRIPT');spritemejs.type='text/javascript';spritemejs.src='//spriteme.org/spriteme.js';document.getElementsByTagName('head')[0].appendChild(spritemejs);})();\">SpriteMe</a></div>" +

      "<div style='margin-bottom: 4px;'><a style='color: #00E; text-decoration: underline;' href=\"javascript:(function(d,t){var%20j=d.createElement(t),s=d.getElementsByTagName(t)[0]||d.getElementsByTagName('link')[0];j.src='https://github.com/driverdan/cssess/raw/master/cssess-min.js';s.parentNode.insertBefore(j,s);})(document,'script');\">CSSess</a></div>" +

      "<div style='margin: 16px 2em 0 0;'><a style='color: #00E; text-decoration: underline;' href=\"http://stevesouders.com/mobileperf/mobileperfbkm.php\" target='_blank'>Mobile Perf home</a></div>" +
      "</div>";
    div.innerHTML = sHtml;
    document.body.appendChild(div);
  }
})();