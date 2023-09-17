// Função setup que é executada uma vez quando o sketch é iniciado
function setup() {
  // Cria um canvas com 80% da largura e 50% da altura do viewport
  let canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.5 );
  // Associa o canvas ao elemento com o id sketch
  canvas.parent("sketch");
  // Define a cor de fundo do canvas como Preto
  background(1);
}

// Função draw que é executada continuamente a cada quadro
function draw() {
  // Define a cor do preenchimento dos objetos como vermelha
  fill(50, 50, 255);
  // Define a cor da borda dos objetos como preta
  stroke(0);
  // Define a espessura da borda dos objetos como 2 pixels
  strokeWeight(0);
  // Desenha um círculo com o centro na posição do mouse e o raio de 50 pixels
  circle(mouseX, mouseY, 10);
}

// Função mousePressed que é executada quando o botão do mouse é pressionado
function mousePressed() {
  // Limpa o canvas e restaura a cor de fundo original
  clear();
  background(1);
}

// Função keyPressed que é executada quando uma tecla do teclado é pressionada
function keyPressed() {
  // Se a tecla for a letra S
  if (key == "s" || key == "S") {
    // Salva uma imagem do canvas como um arquivo PNG
    saveCanvas("sketch.png");
  }
}

// Função windowResized que é executada quando a janela do navegador é redimensionada

function windowResized() {
      // Ajusta o tamanho do canvas para 80% da largura e 50% da altura do viewport
resizeCanvas(windowWidth *0.8, windowHeight * 0.5);
}