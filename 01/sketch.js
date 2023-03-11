//* Random Walker ; Viajero Aleatorio
//* Expandamos la idea anterior!
//* ¿Que reglas podriamos aplicar para poder lograr distintos tipos de diseños?
//*  (=^ ◡ ^=)

function setup() {
  createCanvas(400, 400);
  x = 200;
  y = 200;
  stroke(0, 10);
  background(100, 50);
}

function draw() {
  for (i = 0; i < 60; i++) {
    // ? Dibujamos un punto con las coordenadas x,y

    point(x, y);

    // ? Luego a sus coordenadas las movemos usando una variable aleatoria
    // ? en este caso, haremos que nuestro punto tenga una tendencia a la derecha.

    // * Definimos nuestra variable r, que toma valores entre [0,1].
    r = random(0, 1);

    // * Si el valor de nuestra variable r es mayor o igual a 0.5,
    // * Nuestro punto se mueve hacia abajo a la derecha.
    if (r >= 0.5) {
      x += 0.1;
      y += 0.1;
    } else {
      x -= 0.1;
      y -= 0.1;
    }
  }
}
