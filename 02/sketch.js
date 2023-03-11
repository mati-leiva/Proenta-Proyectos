//* Random Walker ; Viajero Aleatorio
//* Nuevo tipo de ruido, ¡Perlin Noise!
//*  (=^ ◡ ^=)

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;

  xoff = 0; // . Definimos esta variable para "movernos" en el eje x del perlin noise.

  stroke(0, 70);
  background(100, 50);
}

// * El ruido Perlin, es un ruido que tiene la
// * caracteristica de ser "suave", en diferencia a
// * la funcion "random".
// * ej, random(0,1) = [0.1, 0.7, 0.81298].
// ! ej, noise(x) = [0.1,0.23,0.34]. Recordad que el perlin noise, va desde 0 a 1.

function draw() {
  for (i = 0; i < 30; i++) {
    // ? Dibujamos un punto con las coordenadas x,y

    // ? Definimos una variable ruido, la cual queremos que vaya de (-1,1)
    // ? para esto usamos la funcion map, la cual transforma los valores de "noise" que
    // ? van de 0 a 1, a valores de -1 a 1.

    ruido = map(noise(xoff), 0, 1, -1, 1);

    x += ruido;
    point(x, y);

    // ? nos movemos en el perlin noise para ir obteniendo distintos valores.

    xoff += 0.01;
  }
}
