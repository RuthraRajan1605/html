<!DOCTYPE HTML>
<html>
<body>

<canvas id="myCanvas" width="200" height="100"
style="border:1px solid #d3d3d3;">
Your browser does not support the HTML canvas tag.
</canvas>

<script>
var c = document.getElementaryById("myCanvas");
var ctx = c.getContent("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50);
</script>
</body>
</html>
