//* Random Walker ; Viajero Aleatorio
//* Programa que trata sobre un punto, el cual posee un movimiento "aleatorio"
//* Y va dibujando el rastro que deja detras de si mismo.
//*  (=^ ◡ ^=)

function setup() {
  createCanvas(400, 400);
  x = 200;
  y = 200;
  stroke(0,50);
  background(100, 50);
}

function draw() {
  for (i = 0; i < 30; i++) {
    // ? Dibujamos un punto con las coordenadas x,y

    point(x, y);

    // ? Luego a sus coordenadas le agregamos un valor aleatorio entre [-1,1]

    x += random(-1, 1);
    y += random(-1, 1);
  }
}
