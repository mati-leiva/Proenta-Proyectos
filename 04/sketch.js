// * Hoy visualizaremos Perlin Noise, en 2 dimensiones!
// * ¿Que aplicaciones se te ocurren para esta herramienta?
// * ...φ(︶▽︶)φ...

function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
}

function draw() {
  for (i = 0; i < width; i++) {
    for (j = 0; j < height; j++) {

      // me da lataaaa ;
      // hacemos un "arreglo" rectangular, a cada pixel de la pantalla le ponemos un valor del perlin noise en 2 dimensiones
      // y con ese valor calculamos su "intensidad".
      
      color_rectangulo = noise(i / 100, j / 100);
      
      color_rectangulo *= 255;
      
      fill(color_rectangulo);
      
      rect(i, j, 1);

    }
  }
  noLoop();
}
