const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

// fillRect()
ctx.fillStyle = 'red'
ctx.fillRect(20, 20, 150, 100)


//strokeRect()
ctx.lineWidth = 5
ctx.strokeStyle = 'green'
ctx.strokeRect(100, 200, 150, 100)


//clearRect
ctx.clearRect(25, 25, 130, 80)


//fillText()
ctx.font = '30px Arial'
ctx.fillStyle = 'grey'
ctx.fillText('Hello World', 400, 50)


//strokeText
ctx.lineWidth = 1
ctx.strokeStyle = 'orange'
ctx.strokeText('Hello World', 400, 100)


Path

ctx.beginPath()
ctx.moveTo(50, 50)
ctx.lineTo(150, 50)
ctx.lineTo(100, 200)
// ctx.lineTo(50, 50)
ctx.closePath()
ctx.stroke()
ctx.fillStyle='coral'
ctx.fill() 


ctx.beginPath()
ctx.rect(300, 50, 150, 100)
ctx.stroke()
ctx.fill()

// Arc (circle)

const centerX = canvas.width / 2
const centerY = canvas.width/2

ctx.beginPath()
ctx.arc(centerX, centerY, 200, 0, Math.PI * 2)
ctx.stroke()

// Move to mouth
ctx.moveTo(centerX + 100, centerY)
// Draw mouth
ctx.arc(centerX, centerY, 100, 0, Math.PI, false)

ctx.stroke()


//Move left eye
ctx.moveTo(centerX -60, centerY - 80)

//Draw left eye
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI*2)

ctx.stroke()


//Move right eye
ctx.moveTo(centerX + 100, centerY - 80)

//Draw right eye
ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2)

  // Quadratic curve
   ctx.moveTo(75,25);
   ctx.quadraticCurveTo(25,25,25,62.5);
   ctx.quadraticCurveTo(25,100,50,100);
   ctx.quadraticCurveTo(50,120,30,125);
   ctx.quadraticCurveTo(60,120,65,100);
   ctx.quadraticCurveTo(125,100,125,62.5);
   ctx.quadraticCurveTo(125,25,75,25);
   ctx.stroke();

ctx.stroke()