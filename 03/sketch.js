// . Visualizando el perlin noise.
// . Como vimos anteriormente, este tipo de ruido es util por la "suavidad"
// . que posee, pero, ¿como se ve realmente?
// . \(★ω★)/

let inc = 0.005;
let comienzo = 0;

function setup() {
  createCanvas(400, 400);
  stroke(255);
  
}

function draw() {
  background(50);
  noFill();

  // * Utilizamos este comando para crear una forma hecha de vertices que definimos despues.
  beginShape();

  // * Usamos la variable de Sync_off para el perlin noise.
  sync_off = comienzo;

  
  // * Para cada x, menor a la longitud de nuestro canvas, le corresponde un y, en donde este es un valor del perlin noise.
  for (let x = 0; x < 9*width/10; x++) {
    
    y = noise(sync_off) * height;
    // Vertex es un punto que se une con otros Vertex en una linea.
    vertex(x, y);
    sync_off += inc;
  }
  //* terminamos la forma
  endShape();

  comienzo += inc;

}