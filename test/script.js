const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');

// ctx.fillStyle='blue';
// ctx.fillRect(20,20,150,100);

// ctx.strokeStyle='green';
// ctx.lineWidth=5;
// ctx.strokeRect(190,20,150,100);

// ctx.clearRect(20,20,150,100);

// ctx.fillStyle='red';
// ctx.font='20px sans-serif';
// ctx.fillText('Hello World',40,40);

// ctx.strokeStyle='Purple';
// ctx.lineWidth=1;
// ctx.font='30px';
// ctx.strokeText('Hello world!',80,80);

//Paths
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150,50);//makes horizontal line from 50 (x) to 150(x)
ctx.lineTo(100,200);
ctx.lineTo(50,50);
// ctx.stroke();
ctx.fill();