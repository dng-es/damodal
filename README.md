damodal
=============

jQuery plugin, modal windows.


USAGE
```html
<html>
<head>
  <link rel="stylesheet" href="css/jquery.damodal.css" type="text/css"/>
  <script src="js/jquery-1.9.1.js"></script>
  <script src="js/jquery.damodal.js"></script>
  <script>
	  $(document).ready(function(){
	    $("#trigger1").damodal();
	  });
  </script>
</head>
<body>
  <p>Click <a href="#" id="trigger1" data-damodal="damodal1">here</a> to open a modal/dialog window. Click <a href="#" id="trigger2" data-damodal="damodal2">here</a> to open another dialog.</p>
        <div id="damodal1" class="damodal-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada urna vitae mi tempor elementum.</p>
        </div>       
</body>
</html>
```

<a href="http://dng-es.github.io/damodal" target="_blank">More info</a>
