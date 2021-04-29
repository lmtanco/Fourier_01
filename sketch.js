// TUTORIAL DE FOURIER 01 DE DANIEL SHIFMAN
// https://www.youtube.com/watch?v=Mm2eYfj0SgA

let time = 0;
let wave = [];
let slider;

let myFont;
function preload() {
  myFont = loadFont('cmunrm.ttf');
}

function setup() {
    createCanvas(900, 400);
    slider = createSlider(1,100,1);

  }
  
  function texto() {
    noStroke();
    fill(255);
    textFont(myFont);
    textSize(20);
    text('Mueve el slider para cambiar el número de coeficientes de la transformada de Fourier',10,30);
    text('utilizados para representar una señal cuadrada.', 10, 60);
    text('Número de coeficientes: ', 100, 350);
    stroke(255,0,255);
    fill(255,0,255);
    text(slider.value(), 320, 350);
  }

  function draw() {
    background(0);
    texto();

    translate(200,200);

    let x = 0;
    let y = 0;
    for (let i = 0; i<slider.value(); i++) {
        prevx=x;
        prevy=y;
        let n = 2*i+1;
    let radius = 50 *(4/(n*PI));
    x += radius * cos(n*time);
    y += radius * sin(n*time);
    stroke(255,100);
    noFill();
    ellipse(prevx,prevy,radius*2);
    fill(255);
    //ellipse(x,y,8);
    //stroke(255);
    line(prevx,prevy,x,y);
    noFill();
    }
    wave.unshift(y); // como si fuera push_front.



    translate(200,0);
    stroke(255);
    line(x-200,y,0,wave[0]);
    
    stroke(255,0,255);
    beginShape();
    for (let i=0; i<wave.length; i++) {
        vertex(i,wave[i]);
    }    
    endShape();
    time -= 0.02;

    if (wave.length > 500){
        wave.pop();
    }
  }