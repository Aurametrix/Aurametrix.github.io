
var context = canvas.getContext('2d');
var context = canvas.getContext('webgl');

context.rect(x, y, width, height);
context.fill();
context.stroke();

context.fillRect(x, y, width, height);
context.strokeRect(x, y, width, height);

context.arc(x, y, radius, 0, Math.PI * 2);
context.fill();
context.stroke();

context.fillStyle = 'red';
context.fill();

context.strokeStyle = 'red';
context.stroke();

var grd = context.createLinearGradient(x1, y1, x2, y2);
grd.addColorStop(0, 'red');   
grd.addColorStop(1, 'blue');
context.fillStyle = grd;
context.fill();

var grd = context.createRadialGradient(x1, y1, radius1, x2, y2, radius2);
grd.addColorStop(0, 'red');
grd.addColorStop(1, 'blue');
context.fillStyle = grd;
context.fill();

var imageObj = new Image();
imageObj.onload = function() {
  var pattern = context.createPattern(imageObj, 'repeat');
  context.fillStyle = pattern;
  context.fill();
};

imageObj.src = 'path/to/my/image.jpg';

context.lineJoin = 'miter|round|bevel';
context.lineCap = 'butt|round|square';

context.shadowColor = 'black';
context.shadowBlur = 20;
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;

context.globalAlpha = 0.5; // between 0 and 1

context.fillStyle = 'red';
context.fillStyle = '#ff0000';
context.fillStyle = '#f00';
context.fillStyle = 'rgb(255,0,0)';
context.fillStyle = 'rgba(255,0,0,1)';

context.beginPath();
context.lineTo(x, y);
context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
context.quadraticCurveTo(cx, cy, x, y);
context.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
context.closePath();

var imageObj = new Image();
imageObj.onload = function() {
  context.drawImage(imageObj, x, y);
};
imageObj.src = 'path/to/my/image.jpg';

var imageObj = new Image();
imageObj.onload = function() {
  context.drawImage(imageObj, x, y, width, height);
};
imageObj.src = 'path/to/my/image.jpg';

var imageObj = new Image();
imageObj.onload = function() {
  context.drawImage(imageObj, sx, sy, sw, sh, dx, dy, dw, dh);
};
imageObj.src = 'path/to/my/image.jpg';

context.font = '40px Arial';
context.fillStyle = 'red';
context.fillText('Hello World!', x, y);

context.font = '40pt Arial';
context.strokeStyle = 'red';
context.strokeText('Hello World!', x, y);
context.font = 'bold 40px Arial';
context.font = 'italic 40px Arial';
context.textAlign = 'start|end|left|center|right';
context.textBaseline = 'top|hanging|middle|alphabetic|ideographic|bottom';

var width = context.measureText('Hello world').width;

context.translate(x, y);
context.scale(x, y);
context.rotate(radians);
context.scale(-1, 1);
context.scale(1, -1);
context.transform(a, b, c, d, e, f);
context.setTransform(a, b, c, d, e, f);
context.transform(1, sy, sx, 1, 0, 0);
context.setTransform(1, 0, 0, 1, 0, 0);

context.save();
context.restore();

context.clip();

// Get Image Data

var imageData = context.getImageData(x, y, width, height);
var data = imageData.data;

// Loop Through Image Pixels

var imageData = context.getImageData(x, y, width, height);
var data = imageData.data;
var len = data.length;
var i, red, green, blue, alpha;

for(i = 0; i < len; i += 4) {
  red = data[i];
  green = data[i + 1];
  blue = data[i + 2];
  alpha = data[i + 3];
}

// Loop Through Image Pixels With Coordinates

var imageData = context.getImageData(x, y, width, height);
var data = imageData.data;
var x, y, red, green, blue, alpha;

for(y = 0; y < imageHeight; y++) {
  for(x = 0; x < imageWidth; x++) {
    red = data[((imageWidth * y) + x) * 4];
    green = data[((imageWidth * y) + x) * 4 + 1];
    blue = data[((imageWidth * y) + x) * 4 + 2];
    alpha = data[((imageWidth * y) + x) * 4 + 3];
  }
}

// Set Image Data

context.putImageData(imageData, x, y);

